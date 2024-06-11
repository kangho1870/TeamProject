import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function LoginHandler() {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code)

    useEffect(() => {
        const handleLogin = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/login/kakao', {
                    params: { code },
                    withCredentials: true // 인증 정보 포함
                });
                console.log('Login successful', response.data);
                // 로그인 성공 시 메인 페이지로 리디렉션
                navigate('/hospitals');
            } catch (error) {
                console.error('Login failed', error);
                // 로그인 실패 시 로그인 페이지로 리디렉션
                navigate('/login');
            }
        };

        handleLogin();
    }, [code, navigate]);

    return (
        <>
            <div>
                <p>로그인 중입니다.</p>
                <p>잠시만 기다려주세요.</p>
            </div>
        </>
    )
}

export default LoginHandler;