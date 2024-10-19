import Image from 'next/image';
import BigCup from "/public/assets/BigCup.svg";
import Profile from "/public/assets/Profile.svg";
import LevelBadge from "/public/assets/LevelBadge.svg";
import Cross from "/public/assets/Cross.svg"
import  { useState } from 'react';
import ActivePlayers from './ActivePlayers';
import Players from "/public/assets/Players.svg"
const UsersProfile = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleTogglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };
    return (
        <div>
            <div className='border-[2.61px] bg-gradient-gradient rounded-[10.43px] border-[#00A6DE26] w-[500px] h-[277px]'>
                <div className='flex items-center gap-10'>
                    <div>
                        <h1 className='text-[12.95px] leading-[25.9px] tracking-[0.15%] font-semibold text-white pl-[10px]'>User&apos;s profile</h1>
                        <Image src={Profile} alt="Profile" />
                    </div>
                    <div>
                        <p className='text-[12px] text-[#FFFFFF59] leading-[25.25px]'>
                            Name: <span className='text-[#FFFFFF]'>Mark Brain</span>
                        </p>
                        <p className='text-[12px] text-[#FFFFFF59] leading-[25.25px]'>
                            Username: <span className='text-[#FFFFFF]'>Mbrain</span>
                        </p>
                        <p className='text-[12px] text-[#FFFFFF59] leading-[25.25px]'>
                            Country:  <span className='text-[#FFFFFF]'>Nigeria</span>
                        </p>
                    </div>
                    <div>
                        <p className='text-[12px] text-[#FFFFFF59] leading-[25.25px]'>
                            Rank:  <span className='text-[#FFFFFF]'>Pirate Lord</span>
                        </p>
                        <p className='text-[12px] text-[#FFFFFF59] leading-[25.25px]'>
                            Winrate:   <span className='text-[#FFFFFF]'>95%</span>
                        </p>
                        <div className='flex items-center gap-[4px]'>
                            <p className='text-[12px] text-[#FFFFFF59] leading-[25.25px]'>
                                Level:
                            </p>
                            <div className='flex items-center gap-[10px]'>
                                <Image width={11.99} height={11.99} src={LevelBadge} alt="LevelBadge" />
                                <p className='text-[#FFFFFF] text-[12px] leading-[25.25px]'>13</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center pt-[30px]'>
                    <Image src={BigCup} alt="BigCup" />
                </div>
            </div>

            <div className='pt-[5px]'>
                <div className='flex items-start rounded-[10.45px] bg-gradient-gradient justify-between w-[500px] h-[95px] p-[10px] border-[2.61px] border-[#00A6DE26]'>
                    <div>
                        <h1 className='text-[12px] leading-[14.52px] text-white font-semibold'>Current active players</h1>
                        <Image src={Players} alt='Players' />
                    </div>
                    <div className='relative'
                    onClick={handleTogglePopup}>
                        <button className='bg-[#00A6DE] text-[12px] leading-[14.52px] w-[70px] rounded-[25px] p-[8px] text-white'>
                            See all
                        </button>


                        {isPopupVisible && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                                <div className="bg-initial-gradient w-[440px] rounded-[25px] border-[1.01px] border-[#00A6DE] shadow-custom-blue p-4">
                                    <ActivePlayers />
                                    <button onClick={handleTogglePopup} className="mt-10 absolute top-10 left-[850px]">
                                       <Image src={ Cross} alt=" Cross" />
                                    </button>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UsersProfile;