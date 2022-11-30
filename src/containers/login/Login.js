import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/forms/textInput/Input'
import Button from '../../components/ui/button/Button';
import { loginUser } from '../../services/queries';
import { addUser } from '../../store/userSlice';

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [infoLogin, setInfoLogin] = useState({
    username: '',
    password: ''
  });
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    infoLogin.firstName === '' ||
      infoLogin.lastName === '' ||
      infoLogin.username === '' ||
      infoLogin.password === '' ||
      infoLogin.confirmPassword === '' ||
      infoLogin.gender === '' ? setDisabled(true) : setDisabled(false)
  }, [infoLogin])

  const loginHandler = () => {
    setLoading(true)
    loginUser({
      username: infoLogin.username,
      password: infoLogin.password
    }).then(res => {
      dispatch(addUser(res?.user));
      setLoading(false)
      Cookies.set('token', res?.token)
      toast.success(res?.message)
      navigate('/home')
    }).catch(err => {
      toast.error(err?.response?.data?.message)
      setLoading(false)
    })
  }

  return (
    <>
      <p className='text-xl text-body font-bold text-center mb-6'>ورود</p>
      <div className='mb-4'>
        <Input
          value={infoLogin.username}
          iconName="user"
          placeholder="نام کاربری"
          rule="required"
          onChange={(e => setInfoLogin({ ...infoLogin, username: e.target.value }))}
        />
      </div>
      <div>
        <Input
          type='password'
          value={infoLogin.password}
          iconName="lock"
          placeholder="رمز عبور"
          rule="required"
          onChange={(e => setInfoLogin({ ...infoLogin, password: e.target.value }))}
        />
      </div>
      <div className='mt-8'>
        <Button
          title="ورود"
          className="w-full"
          loading={loading}
          disabled={disabled}
          onClick={() => loginHandler()}
        />
      </div>
    </>
  )
}

export default Login