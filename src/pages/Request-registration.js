import { useState } from "react";
import LoadSvgIcon from "../utils/LoadSvgIcon";

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
                            <div className={`w-1/2 flex justify-center items-center 
                            ${active && 'bg-captionDark'}`}
                                onClick={() => setMode(tab.id)}
                                key={tab.id}>
                                <p className={`text-xs ${active ? 'text-white' : 'text-captionDark'}`}>{tab.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="h-[400px] border flex justify-center items-center">map and device</div>
            </div>
            <div className="px-4 pb-4">
                <div className="h-10 bg-captionLight rounded-full flex justify-end mb-2">
                    <button className="flex items-center text-sm bg-primary text-white rounded-full h-full px-4">
                        <LoadSvgIcon name="chevronRight" size={20} weight={1.5} color="#FFFFFF" />
                        ورود
                    </button>
                </div>
                <div className="h-10 bg-captionLight rounded-full flex">
                    <button className="flex items-center text-sm bg-primary text-white rounded-full h-full px-4">
                        خروج
                        <LoadSvgIcon name="chevronLeft" size={20} weight={1.5} color="#FFFFFF" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RequestRegistration