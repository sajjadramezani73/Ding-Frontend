import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Map from '../../components/map/Map'
import ConfirmModal from '../../components/modals/ConfirmModal'
import Button from '../../components/ui/button/Button'
import useGetUserLocation from '../../hooks/useGetUserLocation'
import { addMapLocation } from '../../store/mapSlice'
import LoadSvgIcon from '../../utils/LoadSvgIcon'

const MapContainer = () => {

    const dispatch = useDispatch()
    const { map } = useSelector(store => store.map);

    const { loading, locationError, setLocationError, getPosition, setLatLng, locationData } = useGetUserLocation()

    useEffect(() => {
        storeLatLng(locationData)
    }, [locationData]);

    const storeLatLng = (obj) => {
        dispatch(addMapLocation(obj))
        setLatLng(obj)
    }

    return (
        <>
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

            <ConfirmModal
                options={{
                    show: loading || locationError?.showError,
                    // setShow: () => setResultModal(false),
                }}
            >
                <div className="p-5 min-h-[164px] bg-white flex justify-center items-center">
                    {loading && <LoadSvgIcon name="loading" fill="var(--color-caption)" />}
                    {locationError?.showError && (
                        <div className="flex flex-col items-center">
                            <LoadSvgIcon name="resultDanger" color="var(--color-danger)" size={35} />
                            <p className='text-sm text-captionDark py-4 text-center'>{locationError?.messageError}</p>
                            <div className="">
                                <Button
                                    title="متوجه شدم"
                                    className="h-9 text-xxs px-3"
                                    onClick={() => setLocationError({ showError: false, messageError: '' })}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </ConfirmModal>
        </>
    )
}

export default MapContainer