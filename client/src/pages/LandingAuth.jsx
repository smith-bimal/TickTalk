import { useEffect, useState } from "react";
import BlackButton from "../components/BlackButton";
import OTPBox from "../components/OTPBox";
import { useNavigate } from 'react-router';
import MailIdInputGroup from "../components/MailIdInputGroup";
import { crypticMailConvertor } from "../helper/crypticMailConvertor";

const LandingAuth = () => {
    const [smsSent, setSmsSent] = useState(false);
    const [ipVal, setIpVal] = useState({val:"", isMail: false, isUsername: false});
    const [crypticMail, setCrypticMail] = useState("");
    const [isAbleToResend, setIsAbleToResend] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitLoading, setIsSubmitLoading] = useState(false)
    const [countdown, setCountdown] = useState(30);
    const [otp, setOtp] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (smsSent && countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            setIsAbleToResend(true);
        }
        return () => clearInterval(timer);
    }, [smsSent, countdown]);

    const handleMailSend = async () => {
        if (isLoading) return;

        setIsLoading(true);
        try {
            setCrypticMail(crypticMailConvertor(ipVal.val));
            //TODO: Add API call here
            setSmsSent(true);
            setCountdown(30);
            setIsAbleToResend(false);
        } catch (error) {
            console.error('Failed to send SMS:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleResend = () => {
        if (isAbleToResend) {
            setCountdown(30);
            setIsAbleToResend(false);
            handleMailSend();
        }
    };

    const handleSubmitOTP = async () => {
        setIsSubmitLoading(true);
        try {
            let res =await new Promise((resolve) => setTimeout(() => resolve(otp), 2000)); // Simulate a delay
            console.log(res); //TODO: Remove this line and add API call here
            navigate("/user/chats");
        }
        catch (error) {
            console.error('Failed to submit OTP:', error);
        }
        finally {
            setIsSubmitLoading(false);
        }
    }

    const handleResetPhoneNumber = () => {
        setSmsSent(false);
        setOtp("");
        setIsAbleToResend(false);
        setCountdown(30);
        setIsLoading(false);
    }

    return (
        <div className="flex">
            <div className="flex-grow p-20">
                <div className="max-w-3xl mx-auto relative flex flex-col justify-center items-start h-full">
                    <div className="flex w-full items-center justify-between gap-8 absolute top-0">
                        <p className="cursor-pointer hover:text-[#3B82F6] transition-all">WEB VERSION</p>
                        <p className="cursor-pointer hover:text-[#3B82F6] transition-all">FEATURES</p>
                        <p className="cursor-pointer hover:text-[#3B82F6] transition-all">HELP</p>
                        <p className="cursor-pointer hover:text-[#3B82F6] transition-all">SECURITY</p>
                    </div>

                    {smsSent ? <>
                        <div className="space-y-4">
                            <img src="logo-without-text.png" alt="" className="max-h-16 -mb-1" />
                            <h1 className="text-5xl font-semibold leading-[4rem]">Verification Code</h1>
                            <p className="max-w-xl text-[#6B7280]">
                                Verification code sent to: <br /><span>{crypticMail}</span>
                            </p>

                            <p className="text-[#6B7280]">
                                Enter the code below to unlock your TickTalk experience.
                            </p>

                            <div className="flex items-center gap-6">
                                <OTPBox setOtp={setOtp} otp={otp} />
                                <button
                                    onClick={handleResend}
                                    className={`${isAbleToResend ? "text-[#3b82f6] cursor-pointer" : "text-[#6B7280] cursor-no-drop"} font-medium text-sm p-4`}
                                >
                                    Resend Code {!isAbleToResend && countdown > 0 ? `(${countdown}s)` : ''}
                                </button>
                            </div>
                            <button onClick={handleSubmitOTP} className='px-5 py-3 bg-[#3B82F6] text-white rounded-lg cursor-pointer min-w-40'>{
                                isSubmitLoading ? <i className="ri-loader-4-line animate-spin inline-block text-2xl -my-2"></i> : "Submit OTP"
                            }</button>
                            <p className="mt-8 text-[#3b82f6] cursor-pointer w-fit" onClick={handleResetPhoneNumber}><i className="ri-arrow-left-line"></i> Back</p>
                        </div>
                    </> :
                        <>
                            <div className="space-y-4">
                                <img src="logo-without-text.png" alt="" className="max-h-16" />
                                <h1 className="text-5xl font-semibold leading-[3rem]">
                                    Effortless. Secure. <br /> Connected.
                                </h1>
                                <p className="max-w-xl text-[#6B7280]">
                                    TickTalk brings you instant, private messaging—sync, share, and chat anywhere. Simple sign in. Powerful conversations.
                                </p>

                                <MailIdInputGroup handleMailSend={handleMailSend} setIpVal={setIpVal} ipVal={ipVal} />
                            </div>

                            <div className="flex mt-10 gap-6 -mb-20">
                                <BlackButton icon="ri-apple-fill" body="App Store" />
                                <BlackButton icon="ri-google-play-fill" body="Google Play" />
                                <BlackButton icon="ri-mac-line" body="Mac or Windows" />
                            </div>
                        </>
                    }
                </div>
            </div>

            <div className="w-5/12 h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#111827] to-[#23224e]">
                <img src="auth_phone.png" alt="" className="max-h-[45rem]" />
            </div>
        </div>
    )
}

export default LandingAuth;