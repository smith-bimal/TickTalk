import BlackButton from "../components/BlackButton";
import PhoneNumberInputGroup from "../components/PhoneNumberInputGroup";

const LandingAuth = () => {
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

                    <div className="space-y-4">
                        <img src="logo-without-text.png" alt="" className="max-h-16" />
                        <h1 className="text-5xl font-semibold leading-[4rem]">Fast. Friendly. <br /> Real-time Messaging.</h1>
                        <p className="max-w-xl text-[#6B7280]">With TickTalk, stay instantly connected through secure, lightning-fast messages using just your phone number.
                            No emails. No passwords. Just talk.</p>

                        <PhoneNumberInputGroup />
                    </div>

                    <div className="flex mt-20 gap-12 -mb-20">
                        <BlackButton icon="ri-apple-fill" body="App Store" />
                        <BlackButton icon="ri-google-play-fill" body="Google Play" />
                        <BlackButton icon="ri-mac-line" body="Mac or Windows" />
                    </div>
                </div>
            </div>

            <div className="w-5/12 h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#111827] to-[#23224e]">
                <img src="auth_phone.png" alt="" className="max-h-[45rem]" />
            </div>
        </div>
    )
}

export default LandingAuth;