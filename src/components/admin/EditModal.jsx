import React from 'react';

const EditModal = ({ field, value, onChange, onSave, onClose }) => {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white p-6 shadow-2xl w-full max-w-lg">
        <h3 className="font-serif text-xl mb-4">Editing {field.field}</h3>
        <textarea 
          className="w-full h-32 p-4 bg-gray-50 border border-gray-200 mb-4 focus:outline-none focus:border-gray-900"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <div className="flex gap-4">
          <button onClick={onSave} className="flex-1 bg-gray-900 text-white py-3 text-xs uppercase tracking-widest">Save</button>
          <button onClick={onClose} className="flex-1 border border-gray-200 py-3 text-xs uppercase tracking-widest hover:bg-gray-50">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;