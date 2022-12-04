import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import Checkbox from '../components/forms/checkbox/Checkbox';
import Input from '../components/forms/textInput/Input'
import Button from '../components/ui/button/Button';
import { baseUrl } from '../constant/index'
import LoadSvgIcon from '../utils/LoadSvgIcon';

const Profile = () => {

    const { user } = useSelector(store => store.user);
    const inputRef = useRef()

    const [userInfo, setUserInfo] = useState(null);
    const [genders] = useState([
        { value: 'male', title: 'مرد' },
        { value: 'famale', title: 'زن' }
    ]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedPath, setSelectedPath] = useState("");

    useEffect(() => {
        setUserInfo(user)
    }, [user])

    // select file of computer for send to api
    const selectFileHandler = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            if (e.target.files[0].type === "image/jpeg" || e.target.files[0].type === "image/png") {
                // setError("");
                setSelectedFile(e.target.files[0]);

                const reader = new FileReader();
                reader.onload = (e) => {
                    setSelectedPath(e.target.result);
                };
                reader.readAsDataURL(e.target.files[0]);
            } else {
                setSelectedFile(null);
                setSelectedPath("");
                // setError("فرمت فایل ارسالی شما صحیح نمی باشد.");
            }
        }
    };

    console.log('userInfo', userInfo)


    return (
        <div className='h-full bg-white flex flex-col justify-between p-4'>
            <div>
                <div className="flex justify-center mb-4">
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        ref={inputRef}
                        className="hidden"
                        onChange={selectFileHandler}
                    />
                    <div className="w-28 h-28 border rounded overflow-hidden relative">
                        {userInfo?.hasAvatar === 1 ? (
                            <img src={baseUrl + '/' + userInfo?.avatar} alt="" className='w-full h-full object-cover' />
                        ) : (
                            <>
                                {selectedPath !== '' ? (
                                    <img src={selectedPath} alt="" className='w-full h-full object-cover' />
                                ) : (
                                    <div className='w-full h-full flex flex-col justify-center items-center cursor-pointer'
                                        onClick={() => inputRef.current.click()}>
                                        <LoadSvgIcon name="dragDrop" weight={1.5} />
                                        <p className='text-captionDark text-xs font-bold'>آپلود تصویر</p>
                                    </div>
                                )}
                            </>
                        )}

                        {(userInfo?.avatar !== '' || selectedPath !== '') && (
                            <div className="absolute bottom-0 right-0 bg-primary/[0.6] p-0.5 rounded-tl-sm"
                                onClick={() => {
                                    setUserInfo({ ...userInfo, avatar: '' })
                                    setSelectedFile(null)
                                    setSelectedPath('')
                                }}
                            >
                                <LoadSvgIcon name="trash" color='#ffffff' size={20} />
                            </div>
                        )}
                    </div>
                </div>
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