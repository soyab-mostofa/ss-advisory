"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { DivIcon } from "leaflet";
import type * as L from "leaflet";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Custom marker icon component
const CustomMarkerIcon = () => {
  const [leafletLib, setLeafletLib] = useState<typeof L | null>(null);

  useEffect(() => {
    // Import Leaflet only on client side
    import("leaflet").then((leaflet) => {
      setLeafletLib(leaflet);

      // Fix for default markers in react-leaflet
      delete (
        leaflet.default.Icon.Default.prototype as unknown as Record<
          string,
          unknown
        >
      )._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
    });
  }, []);

  if (!leafletLib) return null;

  return leafletLib.divIcon({
    html: `
      <div class="relative">
        <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <div class="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-red-500"></div>
      </div>
    `,
    className: "custom-marker",
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  });
};

export default function MapSection() {
  const [isClient, setIsClient] = useState(false);
  const [customIcon, setCustomIcon] = useState<DivIcon | null>(null);

  // SS Advisory office coordinates (Dhaka, Bangladesh)
  const officePosition: [number, number] = [23.837515, 90.368943];

  useEffect(() => {
    setIsClient(true);

    // Create custom icon after component mounts
    import("leaflet").then((L) => {
      const icon = L.default.divIcon({
        html: `
          <div class="relative">
            <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <div class="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-red-500"></div>
          </div>
        `,
        className: "custom-marker",
        iconSize: [32, 40],
        iconAnchor: [16, 40],
        popupAnchor: [0, -40],
      });
      setCustomIcon(icon);
    });
  }, []);

  // Show loading state while client-side rendering
  if (!isClient) {
    return (
      <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
      <MapContainer
        center={officePosition}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {customIcon && (
          <Marker position={officePosition} icon={customIcon}>
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-gray-900 mb-1">
                  SS Advisory Office
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Dhaka, Bangladesh
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">Open now</span>
                </div>
                <div className="mt-2 text-xs text-blue-600">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${officePosition[0]},${officePosition[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Custom CSS for marker styling */}
      <style jsx global>{`
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .leaflet-popup-tip {
          background: white;
        }
      `}</style>
    </div>
  );
}
