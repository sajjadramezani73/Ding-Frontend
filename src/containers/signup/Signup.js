import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Checkbox from '../../components/forms/checkbox/Checkbox';
import Input from '../../components/forms/textInput/Input';
import Button from '../../components/ui/button/Button';
import { signupUser } from '../../services/queries';

const Signup = () => {

    const [infoSignup, setInfoSignup] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const [genders] = useState([
        { value: 'male', title: 'مرد' },
        { value: 'famale', title: 'زن' }
    ]);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        infoSignup.firstName === '' ||
            infoSignup.lastName === '' ||
            infoSignup.username === '' ||
            infoSignup.password === '' ||
            infoSignup.confirmPassword === '' ||
            infoSignup.gender === '' ? setDisabled(true) : setDisabled(false)
    }, [infoSignup])

    const signupHandler = () => {
        setLoading(true)
        signupUser({
            firstName: infoSignup.firstName,
            lastName: infoSignup.lastName,
            username: infoSignup.username,
            password: infoSignup.password,
            gender: infoSignup.gender
        }).then(res => {
            console.log(res);
            toast.success(res?.message)
            setLoading(false)
            setInfoSignup({firstName:'',lastName:'', username: '', password: '', confirmPassword: '', gender: '' })
        }).catch(err => {
            toast.error(err?.response?.data?.message)
            setLoading(false)
        })
    }

    return (
        <>
            <p className='text-xl text-body font-bold text-center mb-6'>ثبت نام</p>
            <div className='mb-4'>
                <Input
                    value={infoSignup.username}
                    iconName="user"
                    placeholder="نام کاربری"
                    onChange={(e => setInfoSignup({ ...infoSignup, username: e.target.value }))}
                />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
                <Input
                    value={infoSignup.firstName}
                    iconName="user"
                    placeholder="نام"
                    onChange={(e => setInfoSignup({ ...infoSignup, firstName: e.target.value }))}
                />
                <Input
                    value={infoSignup.lastName}
                    iconName="user"
                    placeholder="نام خانوادگی"
                    onChange={(e => setInfoSignup({ ...infoSignup, lastName: e.target.value }))}
                />
            </div>
            <div className='grid grid-cols-2 gap-3 mb-4'>
                <Input
                    type='password'
                    value={infoSignup.password}
                    iconName="lock"
                    placeholder="رمز عبور"
                    onChange={(e => setInfoSignup({ ...infoSignup, password: e.target.value }))}
                />
                <Input
                    type='password'
                    value={infoSignup.confirmPassword}
                    iconName="lock"
                    placeholder="تکرار رمز عبور"
                    onChange={(e => setInfoSignup({ ...infoSignup, confirmPassword: e.target.value }))}
                />
            </div>
            <div className="flex mr-0.5 gap-x-3">
                {genders.map(item => {
                    const activeGender = item.value === infoSignup.gender ? true : false
                    return (
                        <Checkbox
                            key={item.value}
                            title={item.title}
                            checked={activeGender}
                            theme="light"
                            onClick={() => setInfoSignup({ ...infoSignup, gender: item.value })}
                        />
                    )
                })}
            </div>
            <div className='mt-8'>
                <Button
                    title="ثبت نام"
                    className="w-full"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => signupHandler()}
                />
            </div>
        </>
    )
}

export default Signup