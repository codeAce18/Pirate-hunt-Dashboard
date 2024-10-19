import { useState } from 'react';

import LeaderBoard from "./LeaderBoard";
import OverviewChart from "./OverviewChart";
import OverviewTable from "./OverviewTable";
import UsersProfile from "./UsersProfile";

import Image from 'next/image';
import RankCup from "/public/assets/RankCup.svg";


import LevelBadge from "/public/assets/LevelBadge.svg";





const OverviewContent = () => {

    const [showPopup, setShowPopup] = useState<number | null>(null); // Track the row index for the popup
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 }); // Position of the popup
    const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null); // Track which player is selected
    const popupWidth = 150; //
    const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>, index: number, player: string) => {
      // Get the button's position relative to the viewport
      const rect = event.currentTarget.getBoundingClientRect();
      setPopupPosition({top: rect.top, left: rect.left - popupWidth - 10 }); // Set the popup's position near the button
      setSelectedPlayer(player); // Set the selected player for the popup message
      setShowPopup(index); // Show the popup for the clicked row
    };
  
    const handleClosePopup = () => {
      setShowPopup(null); // Close the popup
      setSelectedPlayer(null); // Reset selected player
    };

        // Custom headers and data
        const headers = ['Place', 'Level', 'Player name', 'PRT', 'Winrate%',  'Rank', 'Rank'];
        const data = [
        [1, 
        <div className="flex items-center gap-[35px]">
            <Image width={15.5} height={15.5} src={LevelBadge} alt="LevelBadge" />
            13
        </div> , 'Naomi', '10,114230', <p className="text-[#01C601]">95%</p>, 
            <div className="flex items-center gap-[15px]">
                Pirate lord
                <Image src={RankCup} alt="RankCup" />
            </div>, <button onClick={(e) => handleEditClick(e, 1, 'Naomi')} className="w-[84.3px] h-[24px] bg-[#4DAFF2] text-white text-[11.63px] leading-[23.26px] font-normal tracking-[0.15%] rounded-[24px]">Edit</button>],
        [2, <div className="flex items-center gap-[35px]">
                <Image width={15.5} height={15.5} src={LevelBadge} alt="LevelBadge" />
                12
            </div>, 'Juliet', '8,114230',<p className="text-[#01C601]">90%</p>, 
            <div className="flex items-center gap-[15px]">
                Ocean raider
                <Image src={RankCup} alt="RankCup" />
            </div>, <button onClick={(e) => handleEditClick(e, 1, 'Juliet')} className="w-[84.3px] h-[24px] bg-[#4DAFF2] text-white text-[11.63px] leading-[23.26px] font-normal tracking-[0.15%] rounded-[24px]">Edit</button>],
        [3, <div className="flex items-center gap-[35px]">
                <Image width={15.5} height={15.5} src={LevelBadge} alt="LevelBadge" />
                11
            </div>, 'Jasmine', '7,114230',<p className="text-[#01C601]">80%</p>, 
            <div className="flex items-center gap-[15px]">
                Wealthy pirate
                <Image src={RankCup} alt="RankCup" />
            </div>, <button onClick={(e) => handleEditClick(e, 1, 'Jasmine')} className="w-[84.3px] h-[24px] bg-[#4DAFF2] text-white text-[11.63px] leading-[23.26px] font-normal tracking-[0.15%] rounded-[24px]">Edit</button>],
        [4, <div className="flex items-center gap-[35px]">
                <Image width={15.5} height={15.5} src={LevelBadge} alt="LevelBadge" />
                10
            </div>, 'Tariq', '6,114230',<p className="text-[#01C601]">70%</p>, 
            <div className="flex items-center gap-[15px]">
                Sea captain
                <Image src={RankCup} alt="RankCup" />
            </div>, <button onClick={(e) => handleEditClick(e, 1, 'Tariq')} className="w-[84.3px] h-[24px] bg-[#4DAFF2] text-white text-[11.63px] leading-[23.26px] font-normal tracking-[0.15%] rounded-[24px]">Edit</button>],
        [5, <div className="flex items-center gap-[35px]">
                <Image width={15.5} height={15.5} src={LevelBadge} alt="LevelBadge" />
                9
            </div>, 'Kelvin', '5,114230',<p className="text-[#01C601]">60%</p>, 
            <div className="flex items-center gap-[15px]">
                Gold hoarder
                <Image src={RankCup} alt="RankCup" />
            </div>, <button onClick={(e) => handleEditClick(e, 1, 'Kelvin')} className="w-[84.3px] h-[24px] bg-[#4DAFF2] text-white text-[11.63px] leading-[23.26px] font-normal tracking-[0.15%] rounded-[24px]">Edit</button>],
        [6, <div className="flex items-center gap-[35px]">
                <Image width={15.5} height={15.5} src={LevelBadge} alt="LevelBadge" />
                8
            </div>, 'Smith', '3,114230',<p className="text-[#01C601]">65%</p>, 
            <div className="flex items-center gap-[15px]">
                Coin collector
                <Image src={RankCup} alt="RankCup" />
            </div>, <button onClick={(e) => handleEditClick(e, 1, 'Smith')} className="w-[84.3px] h-[24px] bg-[#4DAFF2] text-white text-[11.63px] leading-[23.26px] font-normal tracking-[0.15%] rounded-[24px]">Edit</button>],
        [7, <div className="flex items-center gap-[35px]">
                <Image width={15.5} height={15.5} src={LevelBadge} alt="LevelBadge" />
                7
            </div>, 'Brain', '2,114230',<p className="text-[#01C601]">60%</p>, 
            <div className="flex items-center gap-[15px]">
                legendary gold
                <Image src={RankCup} alt="RankCup" />
            </div>, <button onClick={(e) => handleEditClick(e, 1, 'Brain')} className="w-[84.3px] h-[24px] bg-[#4DAFF2] text-white text-[11.63px] leading-[23.26px] font-normal tracking-[0.15%] rounded-[24px]">Edit</button>],
        ];
   

        return (
        <>
            <LeaderBoard />

            <div className="pt-[10px]">
                <div className="flex items-start justify-center gap-[5px]">
                    <OverviewChart />

                    <UsersProfile />
                </div>

                <div className='pt-[10px]'>
                    <OverviewTable headers={headers} data={data} />


                    {showPopup !== null && (
                    <div
                    className="absolute bg-[#0C0D13] w-[250px] p-4 shadow-custom-blue  border-[1px] border-[#00A6DEA6]  z-10 rounded-md"
                    style={{ top: popupPosition.top, left: popupPosition.left }}
                    >
                    <p className="text-sm text-[#FFFFFF] text-[11.34px] leading-[13.72px]">Do you want to remove player {selectedPlayer}?</p>
                    <div className="flex justify-end gap-2 mt-4">
                        <button className="w-[48.29px]  py-[3.62px] px-[10.74px] text-[#FFFFFF] text-[8.98px] border-[0.56px] border-[#FFFFFF]" onClick={handleClosePopup}>
                        No
                        </button>
                        <button
                        className="w-[48.29px]  py-[3.62px] px-[10.74px] text-[#FFFFFF] text-[8.98px] border-[0.56px] border-[#FFFFFF]"
                        onClick={() => {
                            console.log(`Removing player ${selectedPlayer}`);
                            handleClosePopup();
                        }}
                        >
                        Yes
                        </button>
                    </div>
                    </div>
                )}
                </div>
            </div>
        
        </>
    )
}


export default OverviewContent;