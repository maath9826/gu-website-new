"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { Root, createRoot } from "react-dom/client";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [40, 48],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMap = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<Root | null>(null);
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!rootRef.current) {
      rootRef.current = createRoot(mapRef.current);
    }

    const position: L.LatLngExpression = [latitude, longitude];
    const zoom = 16;

    rootRef.current.render(
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
        scrollWheelZoom={false}
        ref={setMap}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          maxZoom={19}
        />
        <Marker position={position} />
      </MapContainer>
    );

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [latitude, longitude]);

  useEffect(() => {
    if (map) {
      map.setView([latitude, longitude], 14);
    }
  }, [map, latitude, longitude]);

  return <div ref={mapRef} style={{ height: "100%", width: "100%" }} />;
};

export default LocationMap;
