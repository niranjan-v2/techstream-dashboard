import React, { useEffect } from 'react';

export default function VtsApp() {
  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevOverscroll = document.documentElement.style.overscrollBehavior;

    // Lock scrolling on the outer page
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.overscrollBehavior = 'none';

    // Cleanup on unmount – restore original styles
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.documentElement.style.overscrollBehavior = prevOverscroll;
    };
  }, []);

  return (
    // Full-screen container
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center">
      <div
        className="
          relative w-full h-full
          md:h-[calc(100vh-4rem)] md:max-w-sm md:aspect-[9/19]
          bg-black overflow-hidden
          md:rounded-[2.5rem] md:shadow-2xl md:border md:border-slate-700
        "
      >
        <iframe
          title="Valluvan Tamil School App"
          src="https://vts--ik9o0sdube.expo.app"
          className="w-full h-full border-0"
          style={{ display: 'block' }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
