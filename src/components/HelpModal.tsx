import React from 'react';
import { X } from 'lucide-react';

interface HelpModalProps {
  onClose: () => void;
}

export default function HelpModal({ onClose }: HelpModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close help modal"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
        
        <div className="space-y-4 text-gray-600">
          <p>Welcome to HopeConnect! We're here to help you access essential services:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Tap any button to directly connect with that service</li>
            <li>All calls are free and confidential</li>
            <li>Services are available 24/7</li>
            <li>For emergencies, use the red button in the bottom right</li>
          </ul>
          
          <p className="font-semibold text-gray-700">Don't worry if you're not sure what you need - just tap HELP anytime and we'll guide you.</p>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 active:transform active:scale-95 transition-all"
        >
          Got it
        </button>
      </div>
    </div>
  );
}