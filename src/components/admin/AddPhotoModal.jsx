import React from 'react';

const AddPhotoModal = ({ photo, onChange, onSave, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(e);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white p-8 shadow-2xl w-full max-w-md">
        <h3 className="font-serif text-2xl mb-6">Add New Memory</h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Photo URL</label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-gray-900 transition-colors"
                value={photo.url}
                onChange={e => onChange({...photo, url: e.target.value})}
                placeholder="https://..."
                required
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Title</label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-gray-900 transition-colors"
                value={photo.title}
                onChange={e => onChange({...photo, title: e.target.value})}
                placeholder="e.g. Deep Freezer Launch"
                required
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Story Snippet</label>
              <textarea 
                className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-gray-900 transition-colors"
                value={photo.snippet}
                onChange={e => onChange({...photo, snippet: e.target.value})}
                placeholder="Why was this moment important?"
                rows="3"
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="flex-1 bg-gray-900 text-white py-3 text-xs uppercase tracking-widest hover:bg-gray-700">Add</button>
            <button type="button" onClick={onClose} className="flex-1 border border-gray-200 py-3 text-xs uppercase tracking-widest hover:bg-gray-50">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPhotoModal;