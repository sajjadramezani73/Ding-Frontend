import { useState } from "react";

const useGetUserLocation = () => {

    const [loading, setLoading] = useState(false);
    const [latlng, setLatLng] = useState({ lat: 35.688180, lng: 51.392918, zoom: 14 });
    const [locationError, setLocationError] = useState({
        showError: false,
        messageError: ''
    });

    const getPosition = async (e) => {
        setLoading(true)
        if (navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition((position) => {
                setLatLng({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
                setLoading(false)
            }, showError);
        }
    };

    const showError = (error) => {
        setLoading(false)
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setLocationError({
                    showError: true,
                    messageError: "در بخش تنظیمات تلفن‌ همراه‌، دسترسی موقعیت مکانی را فعال کنید."
                })
                break;
            case error.POSITION_UNAVAILABLE:
                setLocationError({
                    showError: true,
                    messageError: "اطلاعات موقعیت مکانی در دسترس نمی باشد."
                })
                break;
            case error.TIMEOUT:
                setLocationError({
                    showError: true,
                    messageError: "اطلاعات دریافت نشد ، مجددا تلاش نمایید."
                })
                break;
            case error.UNKNOWN_ERROR:
                setLocationError({
                    showError: true,
                    messageError: "خطلای غیرمنتظره ای رخ داده است ، مجدد تلاش نمایید."
                })
                break;
            default:
                console.log('default');
        }
    };
    return {
        loading,
        setLoading,
        getPosition,
        setLatLng,
        locationData: latlng,
        locationError,
        setLocationError
    };
};

export default useGetUserLocation;
