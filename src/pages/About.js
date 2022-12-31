import React from 'react'
import LoadSvgIcon from '../utils/LoadSvgIcon'

const About = () => {
    return (
        <div className='h-full p-4 text-justify text-sm text-titr'>
            <p>این اپلیکیشن و سایت، یک شبیه سازی از روی نرم افزار «دینگ» می باشد.</p>
            <p className='mt-3 mb-2'>در این نرم افزار امکانات زیر قرار داده شده است:</p>
            <ul className='text-caption text-xs'>
                <li className='mb-2 flex items-center'>
                    <LoadSvgIcon name="check" size={15} weight={1.5} color="var(--color-caption)" />
                    <p className='mr-1'>ثبت ورود و خروج با انتخاب لوکیشن از روی نقشه</p>
                </li>
                <li className='mb-2 flex items-center'>
                    <LoadSvgIcon name="check" size={15} weight={1.5} color="var(--color-caption)" />
                    <p className='mr-1'>مشاهده حساب کاربری و ویرایش اطلاعات</p>
                </li>
                <li className='mb-2 flex items-center'>
                    <LoadSvgIcon name="check" size={15} weight={1.5} color="var(--color-caption)" />
                    <p className='mr-1'>گزارش گیری از زمان های ورود و خروج ثبت شده</p>
                </li>
                <li className='mb-2 flex items-center'>
                    <LoadSvgIcon name="check" size={15} weight={1.5} color="var(--color-caption)" />
                    <p className='mr-1'>مشاهده نظرات و ثبت نظر در مورد نرم افزار</p>
                </li>
                <li className='mb-2 flex items-center'>
                    <LoadSvgIcon name="check" size={15} weight={1.5} color="var(--color-caption)" />
                    <p className='mr-1'>تغییر تنظیمات نرم افزار</p>
                </li>
            </ul>
        </div>
    )
}

export default About