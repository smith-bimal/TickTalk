import React, { useEffect, useRef, useState } from 'react'
import { data } from "../helper/countryCodes";
import PrimaryButton from './PrimaryButton';

const PhoneNumberInputGroup = () => {
    const [codes, setCodes] = useState([]);
    const [selectedCode, setSelectedCode] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setCodes(data);
        setSelectedCode(data[0]);

        // Add click outside listener
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="flex gap-6 items-center">
            <div className="relative" ref={dropdownRef}>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-2 pr-0 pl-10 border-b-[2px] bg-transparent cursor-pointer relative transition-all ${isOpen ? "border-[#3B82F6]" : "border-[#E5E7EB]"}`}
                >
                    {selectedCode && (
                        <img
                            src={selectedCode.imageUrl}
                            alt=""
                            className="w-6 h-4 object-cover absolute left-2 top-1/2 transform -translate-y-1/2"
                        />
                    )}
                    <span>{selectedCode?.phoneCode}</span>
                    <i class="ri-arrow-down-s-line ml-2"></i>
                </div>

                {isOpen && (
                    <div className="absolute border border-[#e5e7eb] top-full left-0 mt-1 w-48 max-h-48 overflow-y-auto bg-white shadow-lg rounded-lg z-50">
                        {codes.map((code, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setSelectedCode(code);
                                    setIsOpen(false);
                                }}
                            >
                                <img src={code.imageUrl} alt="" className="w-6 h-4 object-cover" />
                                <span>{code.phoneCode + " (" + code.code + ")"}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="relative flex-1 mr-2">
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-2 border-b-[2px] border-[#E5E7EB] bg-transparent focus:outline-none focus:border-[#3B82F6] transition-all"
                    maxLength={15}
                    placeholder="Enter phone number"
                />
            </div>

            <PrimaryButton>Send OTP</PrimaryButton>
        </div>
    )
}

export default PhoneNumberInputGroup