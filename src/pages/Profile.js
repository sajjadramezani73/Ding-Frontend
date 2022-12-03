import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Input from '../components/forms/textInput/Input'

const Profile = () => {

    const { user } = useSelector(store => store.user);

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        setUserInfo(user)
    }, [user])


    return (
        <div className='h-full bg-white p-4'>

        </div>
    )
}

export default Profile