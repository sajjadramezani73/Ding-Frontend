import { useEffect } from 'react'
import Map from '../../components/map/Map'
import useGetUserLocation from '../../hooks/useGetUserLocation'

const MapContainer = () => {

    const { loading, setLoading, getPosition, locationData } = useGetUserLocation()

    // useEffect(() => {
    //     getPosition();
    // }, []);


    console.log('loading', loading)
    console.log('locationData', locationData);

    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <Map
                zoom={14}
                position={{
                    lat: locationData?.lat,
                    lng: locationData?.lng
                }}
                width="100%"
                height="100%"
                getLatLng={value => console.log(value)}
                getPosition={() => getPosition()}
            />
        </div>
    )
}

export default MapContainer