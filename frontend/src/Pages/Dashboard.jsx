import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
const DashboardPage = () => {
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [title, setTitle] = useState(''); // Document title
  const [description, setDescription] = useState(''); // Document description
  const [documents, setDocuments] = useState([]); // List of created documents

  // Handle form submission
  const handleCreateDocument = (e) => {
    e.preventDefault();
    if (title && description) {
      const newDocument = {
        id: Date.now(), // Unique ID for the document
        title,
        description,
      };
      setDocuments([...documents, newDocument]); // Add new document to the list
      setTitle(''); // Reset title
      setDescription(''); // Reset description
      setShowForm(false); // Hide the form
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-stone-100 flex flex-col p-8">
      {/* Dashboard Heading */}
      <h1 className="text-3xl font-bold text-stone-800 mb-8">Dashboard</h1>

      {/* Create Document Button */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 mb-8"
      >
        Create Document
      </button>

      {/* Create Document Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold text-stone-800 mb-4">Create New Document</h2>
          <form onSubmit={handleCreateDocument}>
            {/* Title Input */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-stone-700 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter document title"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Description Input */}
            <div className="mb-6">
              <label htmlFor="description" className="block text-stone-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter document description"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Create Document
            </button>
          </form>
        </div>
      )}

      {/* List of Created Documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-stone-800 mb-2">{doc.title}</h3>
            <p className="text-stone-600">{doc.description}</p>
          </div>
        ))}
      </div>
    </div>
                </>
  );
};

export default DashboardPage;