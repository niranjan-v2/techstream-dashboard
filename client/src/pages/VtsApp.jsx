// client/src/pages/VtsApp.jsx
import React from "react";

export default function VtsApp() {
  return (
    <div className="w-screen h-screen bg-black">
      <iframe
        title="Valluvan Tamil School App"
        src="https://vts--0foguoexm3.expo.app/info"
        className="w-full h-full border-0"
        style={{ display: "block" }} // remove default inline spacing
        allowFullScreen
      />
    </div>
  );
}
