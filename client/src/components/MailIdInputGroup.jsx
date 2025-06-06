import { useState } from 'react'
import PrimaryButton from './PrimaryButton';

const MailIdInputGroup = ({ setIpVal, ipVal, handleMailSend }) => {
    const [inputActive, setInputActive] = useState(false);

    return (
        <div className="flex flex-col gap-4 mt-12 max-w-98">
            <div className="relative flex-1 mr-2">
                <input
                    type="email"
                    value={ipVal.val}
                    onChange={(e) => setIpVal(prev => ({ ...prev, val: e.target.value, isMail: e.target.value.includes('@'), isUsername: !e.target.value.includes('@') }))}
                    className={`w-full p-2 border-b-[2px] bg-transparent focus:outline-none transition-all ${inputActive ? 'border-[#3B82F6]' : 'border-[#E5E7EB]'
                        }`}
                    placeholder="username / email"
                    onFocus={() => setInputActive(true)}
                    onBlur={() => setInputActive(false)}
                />
            </div>
            <PrimaryButton
                onClick={handleMailSend}
            >
                Send OTP
            </PrimaryButton>

            <div className="flex gap-4 mx-auto items-center">
                <div className='border-1 border-black/10 h-0 min-w-20'></div>
                <p className="text-sm text-gray-500">or, login with</p>
                <div className='border-1 border-black/10 h-0.5 min-w-20'></div>
            </div>

            <div className="flex items-center justify-center gap-2">
                <div className="p-3 border-2 border-black/10 hover:bg-black/5 transition rounded-xl cursor-pointer w-fit">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" alt="" className='max-h-5' />
                </div>
                <div className="p-3 border-2 border-black/10 hover:bg-black/5 transition rounded-lg cursor-pointer w-fit">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png" alt="" className='max-h-5' />
                </div>
            </div>
        </div>
    )
}

export default MailIdInputGroup