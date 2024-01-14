import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { Place } from '../../types';

const initialPosition = {
    lat: -23.5725631,
    lng: -46.8257264
}

const OrderLocation = () => {
    const [address] = React.useState<Place>({
        position: initialPosition
    });

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <MapContainer 
                    center={address.position} 
                    zoom={13}
                    key={address.position.lat}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup minWidth={90}>
                            Unidade 01
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default OrderLocation;