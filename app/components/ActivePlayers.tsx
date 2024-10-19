
import LevelBadge from "/public/assets/LevelBadge.svg";
import Player1 from "/public/assets/Player1.svg"
import Player2 from "/public/assets/Player2.svg"
import Player3 from "/public/assets/Player3.svg"
import Ashnot from "/public/assets/Ashnot.svg"
import Coin from "/public/assets/Coin.svg"
import GreenNot from "/public/assets/GreenNot.svg"
import Image from 'next/image';


const ActivePlayers = () => {
    return (
        <div className="pt-20">
            <h2 className="text-[12px] leading-[14.52px] font-semibold text-white pl-6 pb-4">Current active players</h2>
            <div className="overflow-y-auto max-h-[400px] custom-scrollbar flex flex-col items-center gap-y-[6px]">
                <div className="flex items-center justify-between w-[358px] mx-auto border-[1px] border-[#FFFFFF26] py-[16px] px-[10px] rounded-[16px] bg-[#00000026]">
                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center gap-[5px]">
                            <Image src={Player1} alt="Player1" />
                            <div className="flex flex-col items-center">
                                <h1 className="text-[16px] leading-[24px] text-[#FFFFFF] font-semibold">Smith</h1>
                                <div className="flex items-center gap-[5px]">
                                    <Image width={12} height={12} src={LevelBadge} alt="LevelBadge" />
                                    <p className="text-[12px] leading-[16px] tracking-[0.4px] text-[#FFFFFF]  font-normal">Lvl 7</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="flex items-center gap-[8px]">
                                <Image width={4} height={4} src={Ashnot} alt="Ashnot" />
                                <Image width={12} height={12} src={Coin} alt="Coin" />
                            </div>
                            <p className="text-[12px] leading-[16px] tracking-[0.4px] font-medium text-[#FFFFFF8C]">2,114,230</p>
                        </div>
                    </div>
                    <Image width={8} height={8} src={GreenNot} alt="GreenNot" />
                </div>


                <div className="flex items-center justify-between w-[358px] mx-auto border-[1px] border-[#FFFFFF26] py-[16px] px-[10px] rounded-[16px] bg-[#00000026]">
                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center gap-[5px]">
                            <Image src={Player2} alt="Player2" />
                            <div className="flex flex-col items-center">
                                <h1 className="text-[16px] leading-[24px] text-[#FFFFFF] font-semibold">Smith</h1>
                                <div className="flex items-center gap-[5px]">
                                    <Image width={12} height={12} src={LevelBadge} alt="LevelBadge" />
                                    <p className="text-[12px] leading-[16px] tracking-[0.4px] text-[#FFFFFF]  font-normal">Lvl 7</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="flex items-center gap-[8px]">
                                <Image width={4} height={4} src={Ashnot} alt="Ashnot" />
                                <Image width={12} height={12} src={Coin} alt="Coin" />
                            </div>
                            <p className="text-[12px] leading-[16px] tracking-[0.4px] font-medium text-[#FFFFFF8C]">2,114,230</p>
                        </div>
                    </div>
                    <Image width={8} height={8} src={GreenNot} alt="GreenNot" />
                </div>


                <div className="flex items-center justify-between w-[358px] mx-auto border-[1px] border-[#FFFFFF26] py-[16px] px-[10px] rounded-[16px] bg-[#00000026]">
                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center gap-[5px]">
                            <Image src={Player3} alt="Player3" />
                            <div className="flex flex-col items-center">
                                <h1 className="text-[16px] leading-[24px] text-[#FFFFFF] font-semibold">Janet</h1>
                                <div className="flex items-center gap-[5px]">
                                    <Image width={12} height={12} src={LevelBadge} alt="LevelBadge" />
                                    <p className="text-[12px] leading-[16px] tracking-[0.4px] text-[#FFFFFF]  font-normal">Lvl 7</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="flex items-center gap-[8px]">
                                <Image width={4} height={4} src={Ashnot} alt="Ashnot" />
                                <Image width={12} height={12} src={Coin} alt="Coin" />
                            </div>
                            <p className="text-[12px] leading-[16px] tracking-[0.4px] font-medium text-[#FFFFFF8C]">2,114,230</p>
                        </div>
                    </div>
                    <Image width={8} height={8} src={GreenNot} alt="GreenNot" />
                </div>


                <div className="flex items-center justify-between w-[358px] mx-auto border-[1px] border-[#FFFFFF26] py-[16px] px-[10px] rounded-[16px] bg-[#00000026]">
                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center gap-[5px]">
                            <Image src={Player1} alt="Player1" />
                            <div className="flex flex-col items-center">
                                <h1 className="text-[16px] leading-[24px] text-[#FFFFFF] font-semibold">Janet</h1>
                                <div className="flex items-center gap-[5px]">
                                    <Image width={12} height={12} src={LevelBadge} alt="LevelBadge" />
                                    <p className="text-[12px] leading-[16px] tracking-[0.4px] text-[#FFFFFF]  font-normal">Lvl 6</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="flex items-center gap-[8px]">
                                <Image width={4} height={4} src={Ashnot} alt="Ashnot" />
                                <Image width={12} height={12} src={Coin} alt="Coin" />
                            </div>
                            <p className="text-[12px] leading-[16px] tracking-[0.4px] font-medium text-[#FFFFFF8C]">2,114,230</p>
                        </div>
                    </div>
                    <Image width={8} height={8} src={GreenNot} alt="GreenNot" />
                </div>

                <div className="flex items-center justify-between w-[358px] mx-auto border-[1px] border-[#FFFFFF26] py-[16px] px-[10px] rounded-[16px] bg-[#00000026]">
                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center gap-[5px]">
                            <Image src={Player3} alt="Player3" />
                            <div className="flex flex-col items-center">
                                <h1 className="text-[16px] leading-[24px] text-[#FFFFFF] font-semibold">Jane</h1>
                                <div className="flex items-center gap-[5px]">
                                    <Image width={12} height={12} src={LevelBadge} alt="LevelBadge" />
                                    <p className="text-[12px] leading-[16px] tracking-[0.4px] text-[#FFFFFF]  font-normal">Lvl 8</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="flex items-center gap-[8px]">
                                <Image width={4} height={4} src={Ashnot} alt="Ashnot" />
                                <Image width={12} height={12} src={Coin} alt="Coin" />
                            </div>
                            <p className="text-[12px] leading-[16px] tracking-[0.4px] font-medium text-[#FFFFFF8C]">2,114,230</p>
                        </div>
                    </div>
                    <Image width={8} height={8} src={GreenNot} alt="GreenNot" />
                </div>

                <div className="flex items-center justify-between w-[358px] mx-auto border-[1px] border-[#FFFFFF26] py-[16px] px-[10px] rounded-[16px] bg-[#00000026]">
                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center gap-[5px]">
                            <Image src={Player2} alt="Player2" />
                            <div className="flex flex-col items-center">
                                <h1 className="text-[16px] leading-[24px] text-[#FFFFFF] font-semibold">Adams</h1>
                                <div className="flex items-center gap-[5px]">
                                    <Image width={12} height={12} src={LevelBadge} alt="LevelBadge" />
                                    <p className="text-[12px] leading-[16px] tracking-[0.4px] text-[#FFFFFF]  font-normal">Lvl 7</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="flex items-center gap-[8px]">
                                <Image width={4} height={4} src={Ashnot} alt="Ashnot" />
                                <Image width={12} height={12} src={Coin} alt="Coin" />
                            </div>
                            <p className="text-[12px] leading-[16px] tracking-[0.4px] font-medium text-[#FFFFFF8C]">2,114,230</p>
                        </div>
                    </div>
                    <Image width={8} height={8} src={GreenNot} alt="GreenNot" />
                </div>

                <div className="flex items-center justify-between w-[358px] mx-auto border-[1px] border-[#FFFFFF26] py-[16px] px-[10px] rounded-[16px] bg-[#00000026]">
                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center gap-[5px]">
                            <Image src={Player3} alt="Player3" />
                            <div className="flex flex-col items-center">
                                <h1 className="text-[16px] leading-[24px] text-[#FFFFFF] font-semibold">Smith</h1>
                                <div className="flex items-center gap-[5px]">
                                    <Image width={12} height={12} src={LevelBadge} alt="LevelBadge" />
                                    <p className="text-[12px] leading-[16px] tracking-[0.4px] text-[#FFFFFF]  font-normal">Lvl 7</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="flex items-center gap-[8px]">
                                <Image width={4} height={4} src={Ashnot} alt="Ashnot" />
                                <Image width={12} height={12} src={Coin} alt="Coin" />
                            </div>
                            <p className="text-[12px] leading-[16px] tracking-[0.4px] font-medium text-[#FFFFFF8C]">2,114,230</p>
                        </div>
                    </div>
                    <Image width={8} height={8} src={GreenNot} alt="GreenNot" />
                </div>
            </div>
        </div>
    )
}

export default ActivePlayers;