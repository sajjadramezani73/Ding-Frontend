import { useState } from 'react'
import SidebarLinkItem from './SidebarLinkItem';

const SidebarLinks = () => {

    const [links] = useState([
        {
            title: 'اطلاعات حساب کاربری',
            icon: 'user',
            href: 'profile'
        },
        {
            title: 'گزارش',
            icon: 'chart',
            href: 'report'
        },
        {
            title: 'درباره سامانه',
            icon: 'info',
            href: 'about'
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