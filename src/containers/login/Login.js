import { useState } from 'react';
import Input from '../../components/forms/textInput/Input'
import Button from '../../components/ui/button/Button';

const Login = () => {

  const [infoLogin, setInfoLogin] = useState({
    username: '',
    password: ''
  });

  return (
    <>
      <p className='text-xl text-body font-bold text-center mb-6'>ورود</p>
      <div className='mb-4'>
        <Input
          value={infoLogin.username}
          iconName="user"
          placeholder="نام کاربری"
          onChange={(e => setInfoLogin({ ...infoLogin, username: e.target.value }))}
        />
      </div>
      <div>
        <Input
          type='password'
          value={infoLogin.password}
          iconName="lock"
          placeholder="رمز عبور"
          onChange={(e => setInfoLogin({ ...infoLogin, password: e.target.value }))}
        />
      </div>
      <div className='mt-8'>
        <Button
          title="ورود"
          className="w-full"
          // loading={true}
        />
      </div>
    </>
  )
}

export default Login