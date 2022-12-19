/* eslint-disable no-unused-expressions */
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server';
import LoadSvgIcon from '../../utils/LoadSvgIcon';
import { useEffect, useState } from 'react';

const Map = ({ zoom = 18, width, height, position, getLatLng, getPosition }) => {

    const [latLng, setLatLng] = useState({
        ...position,
        zoom: position.zoom ?? 17,
    });

    const iconHTML = renderToStaticMarkup(
        <LoadSvgIcon name="location-pin" fill='var(--color-primary)' size={40} />
    )
    const icon = L.divIcon({
        html: iconHTML,
        iconSize: [35, 35], // size of the icon
        iconAnchor: [14, 40]
    });

    const HandleClickMap = () => {
        const map = useMapEvents({
            drag() {
                setLatLng({ ...map.getCenter(), zoom: map.getZoom() })
            },
            dragend() {
                getLatLng({ ...map.getCenter(), zoom: map.getZoom() })
            },
        })
        latLng == null ? null : map.setView(latLng)
        return null
    }

    useEffect(() => {
        setLatLng(position)
    }, [position])


    return (
        <>
            <MapContainer
                center={[latLng?.lat, latLng?.lng]}
                zoom={zoom}
                style={{ height: height, width: width, zIndex: 0 }}
                scrollWheelZoom='center'
                touchZoom='center'
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}"
                    foo='bar'
                />

                <HandleClickMap />

                <Marker
                    position={[latLng?.lat, latLng?.lng]}
                    icon={icon}
                ></Marker>
            </MapContainer>

            <button
                className="absolute z-10 right-5 bottom-7 w-10 h-10 rounded-full bg-white flex justify-center items-center"
                onClick={getPosition}
            >
                <LoadSvgIcon name="target" fill="var(--color-primary)" weight={2} />
            </button>
        </>

    )
}

export default Map
