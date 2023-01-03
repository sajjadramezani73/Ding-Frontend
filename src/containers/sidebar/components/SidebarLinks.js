import { useState } from 'react'
import SidebarLinkItem from './SidebarLinkItem';

const SidebarLinks = () => {

    const [links] = useState([
        {
            title: 'ثبت ورود و خروج',
            icon: 'finger',
            href: '/home'
        },
        {
            title: 'اطلاعات حساب کاربری',
            icon: 'user',
            href: 'profile'
        },
        {
            title: 'گزارش گیری',
            icon: 'chart',
            href: 'report'
        },
        {
            title: 'درباره سامانه',
            icon: 'info',
            href: 'about'
        },
        {
            title: 'نظرسنجی',
            icon: 'commentFill',
            href: 'comments'
        },
        {
            title: 'تنظیمات',
            icon: 'setting',
            href: 'setting'
        },
    ]);

    return (
        links.map(link => {
            return <SidebarLinkItem item={link} key={link.href} />
        })
    )
}

export default SidebarLinks