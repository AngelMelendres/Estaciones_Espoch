import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Importa los estilos de Leaflet
import useEstaciones from "../../hooks/useEstaciones";
const Map = () => {
  const { estaciones } = useEstaciones();

  return (
    <div className="w-2/3 mx-auto mt-10">
      <MapContainer
        center={[-1.65373, -78.677258]}
        zoom={8}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {estaciones.map((estacion, index) => (
          <Marker
            key={index}
            position={[estacion.latitud, estacion.longitud]}
            style={{
              color: "red",
              fillOpacity: 0.7,
              radius: 10,
            }}
          >
            <Popup>
              <div>
                <strong>{estacion.nombre}</strong>
                <p>Parroquia: {estacion.parroquia}</p>
                <p>Cantón: {estacion.canton}</p>
                <p>Altura: {estacion.altura} m</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
