// client/src/pages/VtsApp.jsx
import React from 'react';

export default function VtsApp() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8">
      {/* Phone frame */}
      <div className="relative w-full max-w-sm aspect-[9/19] rounded-[2.5rem] bg-black shadow-2xl border border-slate-700 overflow-hidden">
        {/* Embedded Expo web app */}
        <iframe
          title="Valluvan Tamil School App"
          src="https://vts--ljimep9oys.expo.app"
          className="w-full h-full border-0"
          style={{ borderRadius: '2.5rem' }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
