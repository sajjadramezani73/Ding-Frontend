import { useState } from "react";
import DeviceContainer from "../containers/deviceContainer/DeviceContainer";
import MapContainer from "../containers/mapContainer/MapContainer";
import RequestRegistrationBtn from "../containers/request-registration-btn/Request-registration-btn";

const RequestRegistration = () => {

    const [mode, setMode] = useState('device');
    const [tabs] = useState([
        { title: 'موقعیت مکانی', id: 'location' },
        { title: 'دستگاه دینگ', id: 'device' },
    ]);

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <div className="h-10 bg-captionLight flex">
                    {tabs.map(tab => {
                        const active = tab.id === mode
                        return (
                            <div className={`w-1/2 flex justify-center items-center cursor-pointer
                            ${active && 'bg-captionDark'}`}
                                onClick={() => setMode(tab.id)}
                                key={tab.id}>
                                <p className={`text-xs ${active ? 'text-white' : 'text-captionDark'}`}>{tab.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="h-[400px] flex justify-center items-center border-b-4 border-primary">
                    {mode === 'device' && <DeviceContainer />}
                    {mode === 'location' && <MapContainer />}
                </div>
            </div>
            <div className="px-4 pb-4">
                <RequestRegistrationBtn />
            </div>
        </div>
    )
}

export default RequestRegistration