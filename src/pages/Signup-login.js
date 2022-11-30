import { useState } from "react";
import Login from "../containers/login/Login"
import Signup from "../containers/signup/Signup";

const SignupLogin = () => {

    const [mode, setMode] = useState('signup');

    return (
        <div className="h-full bg-primary bg-[url('./assets/images/cover.png')] bg-[length:90%] bg-no-repeat bg-[center_top_30px]">
            <div className="h-full flex flex-col justify-end p-4">
                <div className="bg-white p-4 rounded-3xl">
                    {mode === 'login' && <Login />}
                    {mode === 'signup' && <Signup />}
                    <div className="pt-4 flex justify-center items-center">
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
        </div>
    )
}

export default SignupLogin