"use client";

import { useState } from "react";

export default function SummarizerPage() {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [text, setText] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
    } else {
      setFileName("");
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file && !text) return;
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    } else if (text) {
      formData.append("text", text);
    }
    try {
      const res = await fetch("http://127.0.0.1:8000/upload_notes", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        setFile(null);
        setFileName("");
        setText("");
      }
    } catch (err) {
      // Optionally handle error
    }
  };

  return (
    <div className="w-full max-w-6xl">
      <div className="mb-8">
        <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col min-h-[60px]">
          <span className="text-xl font-bold text-gray-900">Upload Notes</span>
        </div>
      </div>
      <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col min-h-[220px] mb-8">
        <span className="text-lg font-bold mb-4 text-gray-900">Upload File (PDF/DOCX/TXT) or Paste Text</span>
        <div className="mb-4 flex items-center gap-4">
          <label htmlFor="file-upload" className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow cursor-pointer hover:bg-orange-600 transition font-semibold">Choose File</label>
          <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
          <span className="text-gray-900 text-sm">{fileName || "No file chosen"}</span>
        </div>
        <textarea
          className="w-full h-24 mb-4 p-2 border border-gray-300 rounded text-gray-900 placeholder-gray-900"
          placeholder="Or paste your notes here..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition self-end disabled:bg-gray-400"
          onClick={handleUpload}
          disabled={!file && !text}
        >
          Summarize
        </button>
      </div>
      <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col min-h-[180px]">
        <span className="text-lg font-bold mb-4 text-gray-900">Summary</span>
        <span className="text-base text-gray-900">Your summarized notes will appear here.</span>
      </div>
      {showPopup && (
        <div className="fixed top-8 right-8 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50 transition-all">File uploaded successfully!</div>
      )}
    </div>
  );
} 