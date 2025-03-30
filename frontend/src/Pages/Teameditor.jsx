import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const TeamEditorPage = () => {
  const [content, setContent] = useState('');
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState(null);
  const navigate = useNavigate();

  // Load documents from localStorage
  useEffect(() => {
    const savedDocs = localStorage.getItem('teamDocuments');
    if (savedDocs) {
      setDocuments(JSON.parse(savedDocs));
    }
  }, []);

  // Save documents to localStorage when they change
  useEffect(() => {
    localStorage.setItem('teamDocuments', JSON.stringify(documents));
  }, [documents]);

  const handleSave = () => {
    if (!content.trim()) return;

    const now = new Date().toISOString();
    
    if (currentDoc) {
      // Update existing document
      setDocuments(documents.map(doc => 
        doc.id === currentDoc.id 
          ? { ...doc, content, lastEdited: now }
          : doc
      ));
    } else {
      // Create new document
      const newDoc = {
        id: Date.now(),
        content,
        createdAt: now,
        lastEdited: now
      };
      setDocuments([...documents, newDoc]);
    }
    
    setContent('');
    setCurrentDoc(null);
  };

  const handleLoad = (doc) => {
    setContent(doc.content);
    setCurrentDoc(doc);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Team Editor</h1>
          <button 
            onClick={() => navigate('/')}
            className="btn-secondary px-4 py-2 rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>

        <div className="flex gap-8">
          {/* Document list */}
          <div className="w-64">
            <h2 className="text-xl font-bold mb-4">Saved Files</h2>
            <div className="space-y-2">
              {documents.map(doc => (
                <div 
                  key={doc.id} 
                  className={`p-3 rounded-lg cursor-pointer ${currentDoc?.id === doc.id ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                  onClick={() => handleLoad(doc)}
                >
                  <div className="font-medium">
                    Doc #{doc.id.toString().slice(-4)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(doc.lastEdited).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editor area */}
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start collaborating with your team..."
              className="w-full h-96 p-4 border rounded-lg font-mono"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSave}
                className="btn-primary px-6 py-2 rounded-lg"
              >
                {currentDoc ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamEditorPage;