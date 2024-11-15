import React from 'react';
import { X, MapPin, Phone } from 'lucide-react';
import { ResourceData } from '../services/resourceData';

interface ResourceModalProps {
  resource: ResourceData;
  onClose: () => void;
  onCall: () => void;
}

export default function ResourceModal({ resource, onClose, onCall }: ResourceModalProps) {
  const handleAddressClick = () => {
    if (resource.address) {
      window.open(`https://maps.google.com/?q=${encodeURIComponent(resource.address)}`, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close resource modal"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">{resource.name}</h2>

        <div className="space-y-4">
          {resource.address && (
            <button
              onClick={handleAddressClick}
              className="flex items-start space-x-3 text-left w-full p-3 rounded-lg hover:bg-gray-50"
            >
              <MapPin className="text-gray-500 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-600">{resource.address}</span>
            </button>
          )}

          <div className="text-gray-600 p-3">
            <p>{resource.services}</p>
          </div>

          <button
            onClick={onCall}
            className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 active:transform active:scale-95 transition-all"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}