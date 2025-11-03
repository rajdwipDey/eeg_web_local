import { TrackingStep } from '@/src/types/order';
import React from 'react';

interface TrackingProgressProps {
  trackingNumber: string;
  steps: TrackingStep[];
}

export const TrackingProgress: React.FC<TrackingProgressProps> = ({ 
  trackingNumber, 
  steps 
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <h4 className="font-semibold text-gray-900 mb-3">Tracking: {trackingNumber}</h4>
      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start gap-4">
              <div className={`w-4 h-4 rounded-full relative z-10 ${
                step.completed ? 'bg-[#42b3e5]' : 'bg-gray-300'
              }`}></div>
              <div>
                <p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                  {step.title}
                </p>
                <p className="text-sm text-gray-600">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};