import React, { useState } from 'react';
import { Unlock, Lock } from 'lucide-react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useAdmin } from './hooks/useAdmin';
import { INITIAL_DATA } from './data/initialData';

// Components
import Navigation from './components/common/Navigation';
import Modal from './components/common/Modal';
import HomeView from './components/views/HomeView';
import JourneyView from './components/views/JourneyView';
import AchievementsView from './components/views/AchievementsView';
import GalleryView from './components/views/GalleryView';
import PersonalView from './components/views/PersonalView';
import AdminLogin from './components/admin/AdminLogin';
import EditModal from './components/admin/EditModal';
import AddPhotoModal from './components/admin/AddPhotoModal';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [data, setData] = useLocalStorage('hk_portfolio_data_v8', INITIAL_DATA);
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Admin functionality
  const { isAdmin, showLogin, setShowLogin, handleLogin, logout } = useAdmin();
  
  // Admin edit state
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');
  
  // Gallery add state
  const [isAddingPhoto, setIsAddingPhoto] = useState(false);
  const [newPhoto, setNewPhoto] = useState({ url: '', title: '', snippet: '' });

  const startEdit = (section, field) => {
    setEditingField({ section, field });
    setTempValue(data[section][field]);
  };

  const saveEdit = () => {
    setData(prev => ({
      ...prev,
      [editingField.section]: {
        ...prev[editingField.section],
        [editingField.field]: tempValue
      }
    }));
    setEditingField(null);
  };

  const handleAddPhoto = (e) => {
    e.preventDefault();
    const id = 'g' + Date.now();
    setData(prev => ({
      ...prev,
      gallery: [...(prev.gallery || []), { ...newPhoto, id }]
    }));
    setIsAddingPhoto(false);
    setNewPhoto({ url: '', title: '', snippet: '' });
  };

  const renderView = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <HomeView 
            data={data} 
            setTab={setActiveTab} 
            isAdmin={isAdmin} 
            onEdit={startEdit} 
            onSelectPhase={setSelectedItem}
          />
        );
      case 'Journey':
        return <JourneyView data={data.experiences_page} />;
      case 'Achievements':
  return (
    <AchievementsView 
      data={data.achievements_page} 
      onSelect={setSelectedItem} 
    />
  );
      case 'Gallery':
        return (
          <GalleryView 
            data={data.gallery_page} 
            isAdmin={isAdmin} 
            onAdd={() => setIsAddingPhoto(true)}
          />
        );
      case 'Personal':
        return <PersonalView data={data.personal_page} onSelect={setSelectedItem} />;
      default:
        return <HomeView data={data} setTab={setActiveTab} isAdmin={isAdmin} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-gray-200">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4, .font-serif { font-family: 'Playfair Display', serif; }
        
        @keyframes fade-in {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.2, 1, 0.2, 1) forwards; opacity: 0; }
      `}</style>

      <Navigation 
        activeTab={activeTab} 
        setTab={setActiveTab} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main>{renderView()}</main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xs text-gray-400 uppercase tracking-widest">
            © 2025 Hemant Kumar.
          </div>
          <button 
            onClick={() => isAdmin ? logout() : setShowLogin(true)}
            className="text-gray-300 hover:text-gray-900 transition-colors"
          >
            {isAdmin ? <Unlock size={16} /> : <Lock size={16} />}
          </button>
        </div>
      </footer>

      {/* Modals */}
      <Modal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        data={selectedItem} 
      />
      
      {showLogin && (
        <AdminLogin 
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      )}

      {editingField && (
        <EditModal 
          field={editingField}
          value={tempValue}
          onChange={setTempValue}
          onSave={saveEdit}
          onClose={() => setEditingField(null)}
        />
      )}

      {isAddingPhoto && (
        <AddPhotoModal 
          photo={newPhoto}
          onChange={setNewPhoto}
          onSave={handleAddPhoto}
          onClose={() => setIsAddingPhoto(false)}
        />
      )}
    </div>
  );
};

export default App;