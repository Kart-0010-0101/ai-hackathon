# AI Hackathon Project

This repository contains the code and documentation for the AI Hackathon project, a full-stack application leveraging cutting-edge AI technologies.

## Description
A project created during the AI Hackathon event that combines multiple AI models and modern web technologies to create an innovative solution.

## Tech Stack

### Frontend
- Next.js (v14) - React framework
- React (v18)
- TypeScript
- Tailwind CSS
- Shadcn/ui components
- React Query for state management

### Backend
- Python (v3.11)
- FastAPI
- SQLAlchemy
- PostgreSQL
- Redis for caching

### AI/ML
- GPT-4 for natural language processing
- Whisper for speech recognition
- Stable Diffusion for image generation
- Hugging Face Transformers
- PyTorch

## Project Structure
```
.
├── cognitipath-frontend/     # Next.js frontend application
├── cognitipath-backend/      # FastAPI backend application
├── docs/                     # Project documentation
├── OPEN_SOURCE_MODELS.md     # AI models and citations
└── TECH_STACK.md            # Detailed technology stack
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Python 3.11
- PostgreSQL
- Redis

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd cognitipath-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd cognitipath-backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the development server:
   ```bash
   uvicorn app.main:app --reload
   ```

## Documentation
- [Open Source Models](OPEN_SOURCE_MODELS.md) - Details about AI models and citations
- [Tech Stack](TECH_STACK.md) - Comprehensive technology stack documentation

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- OpenAI for GPT-4 and Whisper
- Stability AI for Stable Diffusion
- Hugging Face for Transformers
- All other open-source contributors
