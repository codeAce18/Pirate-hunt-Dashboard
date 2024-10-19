import YourProfile from "/public/assets/YourProfile.png";

import Link from "next/link"

import Image from 'next/image';


const LeaderBoard = () => {
    return (
        <div>
            <div className="relative h-[167px] py-[20px] rounded-bl-[8px] rounded-br-[8px] bg-gradient-image border-[2px] border-[#00A6DE26]">
            <div>
                <Link href="/signinscreen">
                    <div className="flex items-end justify-end">
                        <button className="bg-[#00000026] w-[108px] rounded-[8px] border-[1px] border-[#FFFFFF26] py-[10px] px-[16px] text-white ">
                            Sign in
                        </button>
                    </div>
                </Link>

                <div className="px-[20px] flex items-center justify-start gap-[10px]">
                <div>
                    <Image src={YourProfile} alt="YourProfile" />
                </div>

                <p className="text-[#FFFFFF] text-[12px] leading-[24px] tracking-[0.15%] font-normal max-w-[439px]">
                    Ahoy, matey! Welcome to Pirate Hunt, a Telegram clicker mini-game that's a treasure trove of fun and excitement on the Ton Network.
                </p>
                </div>

                <div className="flex items-center justify-end gap-[5px]">
                <h1 className="text-[#FFFFFFD9] text-[16px] leading-[24px] tracking-[0.15%]">
                    Leaderboard resets in : 
                </h1>

                <p className="text-[14px] leading-[24px] tracking-[0.15%] text-white">
                    <span className="w-[23px] h-[29px] rounded-[8px] bg-[#00000040] border-[1px] border-[#00000026] p-[10px]">2</span> <span className="w-[23px] h-[29px] rounded-[8px] bg-[#00000040] border-[1px] border-[#00000026] p-[10px]">1</span> : <span className="w-[23px] h-[29px] rounded-[8px] bg-[#00000040] border-[1px] border-[#00000026] p-[10px]">5</span> <span className="w-[23px] h-[29px] rounded-[8px] bg-[#00000040] border-[1px] border-[#00000026] p-[10px]">7</span>
                </p>
                </div>
            </div>
            </div>
        </div>
    )
}


export default LeaderBoard;