import React from 'react';
import { Phone } from 'lucide-react';

export default function EmergencyButton() {
  const handleEmergencyCall = () => {
    window.location.href = 'tel:911';
  };

  return (
    <button
      onClick={handleEmergencyCall}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-red-600 p-3 sm:p-4 rounded-full shadow-lg animate-pulse hover:bg-red-700 active:transform active:scale-95 transition-all"
      aria-label="Emergency Help"
    >
      <Phone size={28} className="text-white sm:w-8 sm:h-8" />
    </button>
  );
}