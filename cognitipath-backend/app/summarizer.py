import numpy as np
import torch
from transformers import BertTokenizer, BertModel
from sklearn.metrics.pairwise import cosine_similarity
import nltk
from nltk.tokenize import sent_tokenize
import argparse

class BertSummarizer:
    def __init__(self, model_name='bert-base-uncased'):
        # Download necessary NLTK data
        try:
            nltk.data.find('tokenizers/punkt')
        except LookupError:
            nltk.download('punkt', quiet=True)
            
        # Set device
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        print(f"Using device: {self.device}")
        
        # Load BERT model and tokenizer
        print("Loading BERT model and tokenizer...")
        self.tokenizer = BertTokenizer.from_pretrained(model_name)
        self.model = BertModel.from_pretrained(model_name).to(self.device)
        self.model.eval()
        print("Model loaded successfully!")

    def get_sentence_embeddings(self, sentences):
        """Get embeddings for a list of sentences using BERT"""
        embeddings = []
        
        for sentence in sentences:
            # Tokenize and convert to tensor
            inputs = self.tokenizer(sentence, return_tensors="pt", 
                                    padding=True, truncation=True, max_length=512)
            inputs = {k: v.to(self.device) for k, v in inputs.items()}
            
            # Get embeddings without gradient calculation
            with torch.no_grad():
                outputs = self.model(**inputs)
                
            # Use CLS token embedding as sentence representation
            embeddings.append(outputs.last_hidden_state[:, 0, :].cpu().numpy())
            
        return np.vstack(embeddings)

    def summarize(self, text, ratio=0.3, min_sentences=3, max_sentences=5, 
                  diversity_penalty=0.5, focus_words=None):
        """
        Generate a summary of the input text
        
        Args:
            text (str): The text to summarize
            ratio (float): Proportion of sentences to include (0.0 to 1.0)
            min_sentences (int): Minimum number of sentences in summary
            max_sentences (int): Maximum number of sentences in summary
            diversity_penalty (float): Higher values (0.0-1.0) increase diversity
            focus_words (list): List of words to focus on in the summary
            
        Returns:
            str: The generated summary
        """
        # Split text into sentences
        sentences = sent_tokenize(text)
        
        if len(sentences) <= min_sentences:
            return text
            
        # Calculate number of sentences for the summary
        num_sentences = max(min_sentences, 
                           min(max_sentences, int(len(sentences) * ratio)))
                           
        # Get sentence embeddings
        embeddings = self.get_sentence_embeddings(sentences)
        
        # Calculate document embedding (average of all sentence embeddings)
        doc_embedding = np.mean(embeddings, axis=0).reshape(1, -1)
        
        # Initialize focus embedding if focus words are provided
        if focus_words and len(focus_words) > 0:
            focus_embeddings = self.get_sentence_embeddings(focus_words)
            focus_embedding = np.mean(focus_embeddings, axis=0).reshape(1, -1)
        else:
            focus_embedding = None
            
        # Calculate similarity scores
        similarity_scores = []
        
        for i, embedding in enumerate(embeddings):
            # Similarity to document
            doc_sim = cosine_similarity(embedding.reshape(1, -1), doc_embedding)[0][0]
            
            # Consider focus words if provided
            if focus_embedding is not None:
                focus_sim = cosine_similarity(embedding.reshape(1, -1), focus_embedding)[0][0]
                # Blend document similarity with focus similarity
                score = (doc_sim + focus_sim) / 2
            else:
                score = doc_sim
                
            similarity_scores.append((i, score))
        
        # Select sentences for summary using a diversity-aware approach
        selected_indices = []
        remaining_indices = [i for i in range(len(sentences))]
        
        while len(selected_indices) < num_sentences and remaining_indices:
            # Get highest scoring sentence among remaining ones
            best_idx = None
            best_score = -float('inf')
            
            for idx in remaining_indices:
                # Get base score
                _, base_score = similarity_scores[idx]
                
                # Apply diversity penalty based on similarity to already selected sentences
                diversity_discount = 0
                if selected_indices and diversity_penalty > 0:
                    for sel_idx in selected_indices:
                        sel_embedding = embeddings[sel_idx].reshape(1, -1)
                        curr_embedding = embeddings[idx].reshape(1, -1)
                        sim = cosine_similarity(sel_embedding, curr_embedding)[0][0]
                        diversity_discount += sim * diversity_penalty
                        
                # Apply positional bias (slightly prefer sentences that appear earlier)
                position_factor = 1.0 - (0.05 * (idx / len(sentences)))
                
                # Calculate final score
                final_score = (base_score - diversity_discount) * position_factor
                
                if final_score > best_score:
                    best_score = final_score
                    best_idx = idx
            
            if best_idx is not None:
                selected_indices.append(best_idx)
                remaining_indices.remove(best_idx)
        
        # Sort indices by their position in the original text
        selected_indices.sort()
        
        # Construct the summary
        summary_sentences = [sentences[i] for i in selected_indices]
        summary = ' '.join(summary_sentences)
        
        return summary

def main():
    parser = argparse.ArgumentParser(description='BERT-based Text Summarizer')
    parser.add_argument('--input', type=str, help='Path to input text file')
    parser.add_argument('--output', type=str, help='Path to output summary file')
    parser.add_argument('--ratio', type=float, default=0.3, help='Summary length ratio (0.0-1.0)')
    parser.add_argument('--min', type=int, default=3, help='Minimum sentences in summary')
    parser.add_argument('--max', type=int, default=5, help='Maximum sentences in summary')
    parser.add_argument('--diversity', type=float, default=0.5, help='Diversity penalty (0.0-1.0)')
    parser.add_argument('--focus', type=str, help='Comma-separated focus words')
    
    args = parser.parse_args()
    
    # Initialize summarizer
    summarizer = BertSummarizer()
    
    # Read input text
    if args.input:
        with open(args.input, 'r', encoding='utf-8') as f:
            text = f.read()
    else:
        text = input("Enter the text to summarize:\n")
    
    # Process focus words if provided
    focus_words = None
    if args.focus:
        focus_words = [word.strip() for word in args.focus.split(',')]
    
    # Generate summary
    summary = summarizer.summarize(
        text,
        ratio=args.ratio,
        min_sentences=args.min,
        max_sentences=args.max,
        diversity_penalty=args.diversity,
        focus_words=focus_words
    )
    
    # Output summary
    if args.output:
        with open(args.output, 'w', encoding='utf-8') as f:
            f.write(summary)
        print(f"Summary written to {args.output}")
    else:
        print("\nSUMMARY:")
        print(summary)

if __name__ == "__main__":
    main()