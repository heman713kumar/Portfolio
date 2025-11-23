import React, { useState } from 'react';

const AdminLogin = ({ onLogin, onClose }) => {
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(pass);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-2xl border border-gray-100 max-w-sm w-full">
        <h3 className="font-serif text-2xl mb-6">Admin Access</h3>
        <input 
          type="password" 
          className="w-full bg-gray-50 border-b border-gray-200 p-3 mb-6 focus:outline-none focus:border-gray-900 transition-colors"
          placeholder="Passkey"
          value={pass}
          onChange={e => setPass(e.target.value)}
          autoFocus
        />
        <button className="w-full bg-gray-900 text-white py-3 text-xs uppercase tracking-widest hover:bg-gray-700">
          Enter
        </button>
        <button 
          type="button"
          onClick={onClose}
          className="w-full mt-4 text-xs text-gray-400 hover:text-gray-900"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;