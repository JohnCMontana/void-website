"use client";

import { useEffect, useState } from "react";
import { FaCookieBite } from "react-icons/fa";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleAccept = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end">
      {/* Bubble */}
      <div
        className="bg-white/40 p-4 rounded-xl shadow-lg flex flex-col gap-2 relative max-w-xs"
        style={{ cursor: "pointer" }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Cookie icon */}
        <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shadow-md">
          <FaCookieBite className="w-6 h-6 p-1 text-black" />
        </div>

        <div className="font-normal text-sm text-black/70">Consentimiento de Cookies</div>

        {expanded && (
          <div className="text-sm mt-2 text-black/70">
            Este sitio web utiliza cookies que permiten el funcionamiento
            y la prestación de los servicios en el mismo.
            Puede obtener la información sobre nuestra{" "}
            <a href="/politica-cookies" className="underline">
              Política de Cookies
            </a>.
            <br />
            Sin embargo, contiene enlaces a sitios web de terceros con Políticas de Cookies ajenas a esta web que usted podrá decidir si acepta o no cuando acceda a ellos.
            <div className="flex justify-end mt-2">
              <button
                onClick={handleAccept}
                className="bg-red-500 hover:bg-red-400 text-white px-4 py-2"
              >
                Aceptar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
