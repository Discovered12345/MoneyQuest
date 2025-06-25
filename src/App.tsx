import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import LessonView from './components/LessonView';
import { mockUsers } from './data/mockData';
import { User } from './types';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [user, setUser] = useState<User>(mockUsers[0]); // Using first mock user as logged-in user

  const handleUserUpdate = (updates: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Dashboard onViewChange={setCurrentView} user={user} />;
      case 'lessons':
        return <LessonView onViewChange={setCurrentView} user={user} onUserUpdate={handleUserUpdate} />;
      default:
        return <Dashboard onViewChange={setCurrentView} user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentView={currentView} 
        onViewChange={setCurrentView}
      />
      {renderCurrentView()}
    </div>
  );
}

export default App;