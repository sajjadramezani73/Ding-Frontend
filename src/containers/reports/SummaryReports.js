import React from 'react'
import LoadSvgIcon from '../../utils/LoadSvgIcon'

const SummaryReports = ({ loading, reports }) => {
    return (
        loading ? (
            <div className='h-full flex justify-center items-center'>
                <LoadSvgIcon name="loading" fill="var(--color-caption)" />
            </div>
        ) : (
            <div className='text-xs text-captionDark divide-y divide-primary/[0.5]'>
                <div className="flex items-center justify-between py-2.5">
                    <p>مجموع ساعات طول شیفت:</p>
                    <p>00:00</p>
                </div>
                <div className="flex items-center justify-between py-2.5">
                    <p>مجموع ساعات کارکرد:</p>
                    <p>00:00</p>
                </div>
                <div className="flex items-center justify-between py-2.5">
                    <p>مجموع ساعات تاخیر در ورود:</p>
                    <p>00:00</p>
                </div>
                <div className="flex items-center justify-between py-2.5">
                    <p>مجموع ساعات تعجیل در خروج:</p>
                    <p>00:00</p>
                </div>
                <div className="flex items-center justify-between py-2.5">
                    <p>مجموع روزهای مرخصی:</p>
                    <p>00:00</p>
                </div>
                <div></div>
            </div>
        )
    )
}

export default SummaryReports