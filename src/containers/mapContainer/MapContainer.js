import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Map from '../../components/map/Map'
import useGetUserLocation from '../../hooks/useGetUserLocation'
import { addMapLocation } from '../../store/mapSlice'

const MapContainer = () => {

    const dispatch = useDispatch()
    const { map } = useSelector(store => store.map);

    const { loading, setLoading, getPosition, setLatLng, locationData } = useGetUserLocation()

    useEffect(() => {
        storeLatLng(locationData)
    }, [locationData]);

    const storeLatLng = (obj) => {
        dispatch(addMapLocation(obj))
        setLatLng(obj)
    }

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
                getLatLng={value => storeLatLng(value)}
                getPosition={() => getPosition()}
            />
        </div>
    )
}

export default MapContainer