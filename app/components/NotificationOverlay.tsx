// NotificationOverlay.tsx
import React from 'react';
import Image from 'next/image';

import UserNot1 from "/public/assets/UserNot1.svg"
import UserNot2 from "/public/assets/UserNot2.svg"
import Cross from "/public/assets/Cross.svg"

interface NotificationOverlayProps {
    isVisible: boolean;
    onClose: () => void;
}

const NotificationOverlay: React.FC<NotificationOverlayProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#0B0D18] p-6 rounded-[15px]  shadow-custom-blue border-[1.01px] border-[#00A6DE]  w-[440px]  z-50">
                <h2 className="text-[16px] leading-[19.36px] text-white font-semibold pb-10 pt-20 text-center">Notifications</h2>
                <div className='max-h-[350px] overflow-y-auto custom-scrollbar flex flex-col items-center gap-y-[25px]'>
                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot1} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>User</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>

                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot2} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>User</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>

                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot1} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>Brain steve</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>

                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot2} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>Brain steve</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>

                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot1} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>Brain steve</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>

                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot2} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>Brain steve</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>

                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot2} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>User</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>

                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot2} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>Brain steve</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>

                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot1} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>User</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>

                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot1} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>Brain steve</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>

                    <div className='flex items-center max-w-[367px] mx-auto gap-[16px]'>
                        <Image width={37.52} height={37.52} src={UserNot2} alt="UserNot1" />

                        <div className='flex items-start '>
                            <div className='flex flex-col items-start gap-y-[4px]'>
                                <h1 className='text-[13.05px] leading-[15.79px] text-white font-bold'>User</h1>
                                <p className='whitespace-nowrap text-[13.05px] leading-[15.79px] text-[#FFFFFFBF]'>Brain just purchased treasure hunt worth of 5$</p>
                            </div>
                            <p className='whitespace-nowrap text-[9.79px] leading-[11.84px] text-white font-normal'>14m ago</p>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className="mt-10 absolute top-10 left-[850px]">
                    <Image src={ Cross} alt=" Cross" />
                </button>
            </div>
        </div>
    );
};

export default NotificationOverlay;
