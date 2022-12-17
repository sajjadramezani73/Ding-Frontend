import { useState } from "react";

const useGetUserLocation = () => {

    const [loading, setLoading] = useState(true);
    const [latlng, setLatLng] = useState({ lat: 35.688180, lng: 51.392918 });

    const getPosition = async () => {
        if (navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition((position) => {
                setLatLng({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            }, showError);
        }
    };
    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                // setLocationError({
                //     hasError: true,
                //     msg: "در بخش تنظیمات تلفن‌ همراه‌تان دسترسی موقعیت مکانی را فعال کنید.",
                // });
                console.log('در بخش تنظیمات تلفن‌ همراه‌تان دسترسی موقعیت مکانی را فعال کنید.')
                break;
            case error.POSITION_UNAVAILABLE:
                // setLocationError({
                //     hasError: true,
                //     msg: "اطلاعات موقعیت مکانی در دسترس نمیباشد",
                // });
                console.log("اطلاعات موقعیت مکانی در دسترس نمیباشد");
                break;
            case error.TIMEOUT:
                // setLocationError({
                //     hasError: true,
                //     msg: "اطلاعات دریافت نشد ، مجددا تلاش نمایید",
                // });
                console.log("اطلاعات دریافت نشد ، مجددا تلاش نمایید")
                break;
            case error.UNKNOWN_ERROR:
                // setLocationError({
                //     hasError: true,
                //     msg: "خطلای غیرمنتظره ای رخ داده است ، مجدد تلاش نمایید",
                // });
                console.log("خطلای غیرمنتظره ای رخ داده است ، مجدد تلاش نمایید");
                break;
            default:
                console.log('default');
        }
    };
    return {
        loading,
        setLoading,
        getPosition,
        locationData: latlng,
    };
};

export default useGetUserLocation;
