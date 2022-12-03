import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Checkbox from '../components/forms/checkbox/Checkbox';
import Input from '../components/forms/textInput/Input'
import Button from '../components/ui/button/Button';

const Profile = () => {

    const { user } = useSelector(store => store.user);

    const [userInfo, setUserInfo] = useState(null);
    const [genders] = useState([
        { value: 'male', title: 'مرد' },
        { value: 'famale', title: 'زن' }
    ]);

    useEffect(() => {
        setUserInfo(user)
    }, [user])

    console.log('userInfo', userInfo)


    return (
        <div className='h-full bg-white flex flex-col justify-between p-4'>
            <div>
                <div className='mb-4'>
                    <Input
                        value={userInfo?.username}
                        iconName="user"
                        placeholder="نام کاربری"
                        rule="required"
                        disabled={true}
                        onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
                    />
                </div>
                <div className='mb-4'>
                    <Input
                        value={userInfo?.firstName}
                        iconName="user"
                        placeholder="نام"
                        rule="required"
                        onChange={e => setUserInfo({ ...userInfo, firstName: e.target.value })}
                    />
                </div>
                <div className='mb-4'>
                    <Input
                        value={userInfo?.lastName}
                        iconName="user"
                        placeholder="نام خانوادگی"
                        rule="required"
                        onChange={e => setUserInfo({ ...userInfo, lastName: e.target.value })}
                    />
                </div>
                <div className="flex mr-0.5 gap-x-3">
                    {genders.map(item => {
                        const activeGender = item.value === userInfo?.gender ? true : false
                        return (
                            <Checkbox
                                key={item.value}
                                title={item.title}
                                checked={activeGender}
                                theme="light"
                                onClick={() => setUserInfo({ ...userInfo, gender: item.value })}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="">
                <Button
                    title="ویرایش"
                    // disabled={true}
                    // loading={true}
                    onClick={() => console.log('first')}
                />
            </div>
        </div>
    )
}

export default Profile