import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server';
import LoadSvgIcon from '../../utils/LoadSvgIcon';

const StaticMap = ({ zoom = 18, width, height, position }) => {

    const iconHTML = renderToStaticMarkup(
        <LoadSvgIcon name="location-pin" fill='var(--color-primary)' size={40} />
    )
    const icon = L.divIcon({
        html: iconHTML,
        iconSize: [35, 35], // size of the icon
        iconAnchor: [14, 40]
    });

    return (
        <MapContainer
            center={[position?.lat, position?.lng]}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: height, width: width, zIndex: 0 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}"
                foo='bar'
            />
            <Marker
                position={[position?.lat, position?.lng]}
                icon={icon}
            ></Marker>
        </MapContainer>
    )
}

export default StaticMap
