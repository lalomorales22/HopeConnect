import React, { useState } from 'react';
import {
  Utensils,
  Home,
  Car,
  Heart,
  Bed,
  Bath,
  Phone,
  BookOpen,
  Briefcase,
  Mail,
  HelpCircle
} from 'lucide-react';
import ResourceButton from './components/ResourceButton';
import EmergencyButton from './components/EmergencyButton';
import HelpModal from './components/HelpModal';
import ResourceModal from './components/ResourceModal';
import { resourceData } from './services/resourceData';

function App() {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const handleResourceClick = (type: string) => {
    setSelectedResource(type);
  };

  const handleCall = () => {
    if (selectedResource) {
      window.location.href = `tel:${resourceData[selectedResource].phone}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        onClick={() => setShowHelpModal(true)}
        className="fixed top-4 left-4 z-40 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-red-700 active:transform active:scale-95 transition-all"
      >
        <HelpCircle size={24} />
        <span className="font-bold text-lg">HELP</span>
      </button>

      <div className="p-4 sm:p-6 pt-20">
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">HopeConnect</h1>
          <p className="text-lg sm:text-xl text-gray-600">San Diego Resources - One Tap Away</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <ResourceButton
            icon={Utensils}
            label="Food Now"
            color="bg-green-500"
            onClick={() => handleResourceClick('food')}
            resourceData={resourceData.food}
          />
          <ResourceButton
            icon={Home}
            label="Emergency Shelter"
            color="bg-blue-500"
            onClick={() => handleResourceClick('shelter')}
            resourceData={resourceData.shelter}
          />
          <ResourceButton
            icon={Car}
            label="Free Ride"
            color="bg-purple-500"
            onClick={() => handleResourceClick('transport')}
            resourceData={resourceData.transport}
          />
          <ResourceButton
            icon={Heart}
            label="Medical Help"
            color="bg-red-500"
            onClick={() => handleResourceClick('health')}
            resourceData={resourceData.health}
          />
          <ResourceButton
            icon={Bed}
            label="Housing Help"
            color="bg-indigo-500"
            onClick={() => handleResourceClick('housing')}
            resourceData={resourceData.housing}
          />
          <ResourceButton
            icon={Bath}
            label="Hygiene Center"
            color="bg-teal-500"
            onClick={() => handleResourceClick('hygiene')}
            resourceData={resourceData.hygiene}
          />
          <ResourceButton
            icon={Phone}
            label="Crisis Support"
            color="bg-pink-500"
            onClick={() => handleResourceClick('crisis')}
            resourceData={resourceData.crisis}
          />
          <ResourceButton
            icon={BookOpen}
            label="Education"
            color="bg-yellow-500"
            onClick={() => handleResourceClick('education')}
            resourceData={resourceData.education}
          />
          <ResourceButton
            icon={Briefcase}
            label="Job Support"
            color="bg-orange-500"
            onClick={() => handleResourceClick('jobs')}
            resourceData={resourceData.jobs}
          />
          <ResourceButton
            icon={Mail}
            label="Mail Services"
            color="bg-cyan-500"
            onClick={() => handleResourceClick('mail')}
            resourceData={resourceData.mail}
          />
        </div>

        <footer className="mt-8 text-center text-gray-500">
          <p className="text-sm">San Diego Community Resources • 24/7 Support</p>
        </footer>
      </div>

      <EmergencyButton />
      
      {showHelpModal && (
        <HelpModal onClose={() => setShowHelpModal(false)} />
      )}
      
      {selectedResource && (
        <ResourceModal
          resource={resourceData[selectedResource]}
          onClose={() => setSelectedResource(null)}
          onCall={handleCall}
        />
      )}
    </div>
  );
}

export default App;