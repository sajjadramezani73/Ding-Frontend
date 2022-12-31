import React from 'react'
import Time from '../time/Time'

const DeviceContainer = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            {/* <div className="w-40 h-40 bg-captionLight rounded-full flex justify-center items-center pb-4">
                <Time />
            </div> */}
            <p className='text-center text-sm text-caption px-10'>به دلیل عدم وجود دستگاه، این بخش غیر فعال می باشد.</p>
        </div>
    )
}

export default DeviceContainer