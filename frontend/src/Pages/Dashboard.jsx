import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('general');
  const [documents, setDocuments] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Load documents from localStorage on component mount
  useEffect(() => {
    const savedDocs = localStorage.getItem('documents');
    if (savedDocs) {
      setDocuments(JSON.parse(savedDocs));
    }
  }, []);

  // Save documents to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents));
  }, [documents]);

  const handleCreateDocument = (e) => {
    e.preventDefault();
    
    if (!title || !description) return;

    const now = new Date().toISOString();
    
    if (editingId) {
      // Update existing document
      setDocuments(documents.map(doc => 
        doc.id === editingId 
          ? { ...doc, title, description, category, lastEdited: now }
          : doc
      ));
    } else {
      // Create new document
      const newDocument = {
        id: Date.now(),
        title,
        description,
        category,
        createdAt: now,
        lastEdited: now
      };
      setDocuments([...documents, newDocument]);
    }

    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('general');
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (doc) => {
    setTitle(doc.title);
    setDescription(doc.description);
    setCategory(doc.category);
    setEditingId(doc.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col p-8">
        <h1 className="text-3xl font-bold mb-8">Document Dashboard</h1>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary px-6 py-2 rounded-lg"
          >
            Create Document
          </button>
          <Link 
            to="/team"
            className="btn-secondary px-6 py-2 rounded-lg"
          >
            Team Editor
          </Link>
        </div>

        {showForm && (
          <div className="card p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">
              {editingId ? 'Edit Document' : 'Create New Document'}
            </h2>
            <form onSubmit={handleCreateDocument}>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-2">
                  Title*
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Document title"
                  className="input-field w-full px-4 py-2 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block mb-2">
                  Description*
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Document description"
                  className="input-field w-full px-4 py-2 rounded-lg"
                  rows="4"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="block mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="input-field w-full px-4 py-2 rounded-lg"
                >
                  <option value="general">General</option>
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                  <option value="ideas">Ideas</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="btn-primary flex-1 py-2 rounded-lg"
                >
                  {editingId ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn-secondary flex-1 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div key={doc.id} className="card p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
                  {doc.category}
                </span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEdit(doc)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(doc.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
              <p className="mb-4 text-gray-600">{doc.description}</p>
              
              <div className="text-xs text-gray-500 mt-auto">
                <div>Created: {new Date(doc.createdAt).toLocaleString()}</div>
                <div>Last edited: {new Date(doc.lastEdited).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;