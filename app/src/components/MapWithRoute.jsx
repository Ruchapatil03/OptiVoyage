import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default icon issue in React
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const MapWithRoute = () => {
    // Define the route using an array of coordinates
    const route = [
        [
            18.9621428,
            72.8041992
        ],
        [
            18.7464085,
            72.7094421
        ],
        [
            18.0017213,
            72.5679932
        ],
        [
            15.7563068,
            72.509766
        ],
        [
            12.8246565,
            73.7797856
        ],
        [
            11.105103,
            74.2851567
        ],
        [
            7.5062674,
            74.7026371
        ],
        [
            3.9957805,
            78.9433591
        ],
        [
            5.4322736,
            83.1181638
        ],
        [
            11.3077077,
            83.8916016
        ],
        [
            13.8636794,
            84.9462891
        ],
        [
            16.5940814,
            86.6162109
        ],
        [
            18.2022185,
            87.253418
        ],
        [
            19.4976642,
            87.6159668
        ],
        [
            20.5402217,
            87.3654786
        ],
        [
            21.0660479,
            87.409424
        ],
        [
            21.4755627,
            87.4313966
        ]
    ]


    return (
        <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom={18}
            />
            <Polyline positions={route} color="blue" />
            <Marker position={[19.0760, 72.8777]}>
                <Popup>Mumbai</Popup>
            </Marker>
            <Marker position={[21.4755627, 87.4313966]}>
                <Popup>Kolkata</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapWithRoute;