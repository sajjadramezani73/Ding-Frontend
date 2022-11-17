import { useState } from "react";
import Login from "../containers/login/Login"
import Signup from "../containers/signup/Signup";

const SignupLogin = () => {

    const [mode, setMode] = useState('signup');

    return (
        <div className="h-full bg-gradient-to-br from-primaryLight to-secondaryLight">
            <div className="h-full flex flex-col">
                <div className="flex-grow pt-14 px-4 xs:px-10">
                    {mode === 'login' && <Login />}
                    {mode === 'signup' && <Signup />}
                </div>
                <div className="py-6 bg-white flex justify-center items-center">
                    <p className="text-xs text-body ml-3">
                        {mode === 'login' && 'ثبت نام نکرده اید؟'}
                        {mode === 'signup' && 'از قبل ثبت نام کرده اید؟'}
                    </p>
                    <div className="text-xs text-primary font-bold">
                        {mode === 'login' && (
                            <span onClick={() => setMode('signup')}>ثبت نام</span>
                        )}
                        {mode === 'signup' && (
                            <span onClick={() => setMode('login')}>ورود</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupLogin