import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ResourceData } from '../services/resourceData';

interface ResourceButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  color: string;
  resourceData: ResourceData;
}

export default function ResourceButton({ icon: Icon, label, onClick, color, resourceData }: ResourceButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 sm:p-6 ${color} rounded-xl shadow-lg transform transition-all hover:scale-105 active:scale-95 flex flex-col items-center space-y-2 text-white`}
    >
      <Icon size={36} strokeWidth={1.5} className="sm:w-12 sm:h-12" />
      <span className="text-lg sm:text-xl font-bold tracking-wide text-center">{label}</span>
      <div className="text-sm text-white/90 text-center">
        <div className="font-medium">{resourceData.name}</div>
        {resourceData.address && (
          <div className="text-xs mt-1 text-white/80">{resourceData.address}</div>
        )}
      </div>
    </button>
  );
}