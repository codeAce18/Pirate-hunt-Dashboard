"use client";

import { useState } from 'react';
// import NotificationOverlay from './NotificationOverlay'; 
import Image from 'next/image';
import YourProfile from "/public/assets/YourProfile.png";

import Caretdown from "/public/assets/Caretdown.svg"

import OverviewIcon from "/public/assets/OverviewIcon.svg"
import OverviewIconBlue from "/public/assets/OverviewIconBlue.svg"

import ChartsIcon from "/public/assets/ChartsIcon.svg"
import ChartsIconBlue from "/public/assets/ChartsIconBlue.svg"

// import NotificationIcon from "/public/assets/NotificationIcon.svg"
// import NotificationIconBlue from "/public/assets/NotificationIconBlue.svg"

import TopPlayersIcon from "/public/assets/TopPlayersIcon.svg"
import TopPlayersIconBlue from "/public/assets/TopPlayersIconBlue.svg"


import LevelsIcon from "/public/assets/Levels.svg"
import LevelsIconBlue from "/public/assets/LevelsBlue.svg"


import TaskIcon from "/public/assets/task.svg"
import TaskIconBlue from "/public/assets/taskBlue.svg"

import RateIcon from "/public/assets/Rate.svg"
import RateIconBlue from "/public/assets/RateBlue.svg"

import AllPlayersIcon from "/public/assets/AllPlayersIcon.svg"
import AllPlayersIconBlue from "/public/assets/AllPlayersIconBlue.svg"

import LogOutIcon from "/public/assets/LogOutIcon.svg"
import LogOutIconBlue from "/public/assets/LogOutIconBlue.svg"
import OverviewContent from './OverviewContent';
import ChartsContent from './ChartsContent';


import AllPlayersContent from './AllPlayersContent';
import TopPlayersContent from './TopPlayersContent';

import LevelsContent from './LevelsContent';
import TasksContent from './TasksContent';
import TappingRateContent from './TappingRateContent';

type ContentType = 'overview' | 'charts' | 'notification' | 'Levels' | 'Tasks' | 'tappingRate' | 'allPlayers' | 'topPlayers';

const Sidebar = () => {

    

    const [isOpen, setIsOpen] = useState(true);  // Default open
    const [activeContent, setActiveContent] = useState<ContentType>('overview');  // Default content

    const handleContentChange = (content: ContentType) => {
        setActiveContent(content);
        
    };

   

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };


    return (
  
            <div className="flex ">
                {/* {sideBar} */}
                <div className="bg-initial-gradient overflow-y-scroll fixed top-0 left-0 border-r-[2px] border-r-[#00A6DE26] h-screen w-[284px]  scrollbar-hide">
                    <div className="pt-16">
                        <div className="flex items-center justify-center gap-[30px]">
                            <div>
                                <Image src={YourProfile} alt="YourProfile"/>
                            </div>
                            <div>
                                <h1 className="text-[16px] text-white leading-[19.36px] font-semibold">Bryan kobe</h1>
                                <p className="text-[#FFFFFF40] text-[16px] leading-[19.36px] font-normal">@The admin</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="flex items-center justify-center gap-32 cursor-pointer"  onClick={toggleDropdown}>
                            <h1 className="text-[16px] text-white leading-[19.36px] font-medium">Dashboard</h1>
                            <div  className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                <Image src={Caretdown} alt="Caretdown" />
                            </div>
                        </div>
                
                        <div  className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                            <div className="pt-[20px]">
                            <div
                                    className={`flex items-center justify-start ${activeContent === 'overview' ? 'bg-white rounded-[8px] p-[16px] w-[260px] mx-auto ' : 'hover:bg-white rounded-[8px] mx-auto w-[260px]  p-[16px]'} cursor-pointer px-10 gap-[10px] group`}
                                    onClick={() => handleContentChange('overview')}
                                >
                                    <div className="relative">
                                        {/* Default Icon */}
                                        <Image
                                            src={OverviewIcon}
                                            alt="OverviewIcon"
                                            className={`group-hover:opacity-0 transition-opacity duration-300 ${activeContent === 'overview' ? 'opacity-0' : ''}`}
                                        />
                                        {/* Blue Icon (Visible on Hover) */}
                                        <Image
                                            src={OverviewIconBlue}
                                            alt="OverviewIconBlue"
                                            className={`absolute top-0 left-0 transition-opacity duration-300 ${activeContent === 'overview' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                        />
                                    </div>
                                    <h1 className={`text-[16px] leading-[19.36px] font-medium ${activeContent === 'overview' ? 'text-[#00A6DE]' : 'text-white group-hover:text-[#00A6DE]'} transition-colors duration-300`}>
                                        Overview
                                    </h1>
                                </div>
                                <div className="pt-[20px]">
                                <div
                                        className={`flex items-center justify-start ${activeContent === 'charts' ? 'bg-white rounded-[8px] p-[16px] w-[260px] mx-auto' : 'hover:bg-white rounded-[8px] mx-auto w-[260px] p-[16px]'}  cursor-pointer px-10 gap-[10px] group`}
                                        onClick={() => handleContentChange('charts')}
                                    >
                                        <div className="relative">
                                            <Image
                                                src={ChartsIcon}
                                                alt="ChartsIcon"
                                                className={`group-hover:opacity-0 transition-opacity duration-300 ${activeContent === 'charts' ? 'opacity-0' : ''}`}
                                            />
                                            <Image
                                                src={ChartsIconBlue}
                                                alt="ChartsIconBlue"
                                                className={`absolute top-0 left-0 transition-opacity duration-300 ${activeContent === 'charts' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                            />
                                        </div>
                                        <h1 className={`text-[16px] leading-[19.36px] font-medium ${activeContent === 'charts' ? 'text-[#00A6DE]' : 'text-white group-hover:text-[#00A6DE]'} transition-colors duration-300`}>
                                            Charts
                                        </h1>
                                    </div>
                                </div>
                                {/* <div className="pt-[20px]">
                                    <div
                                        className={`flex items-center ${activeContent === 'notification' ? 'bg-white rounded-[8px] p-[16px] w-[260px] mx-auto' : 'hover:bg-white rounded-[8px] mx-auto w-[260px] p-[16px]'}  cursor-pointer justify-start px-10 gap-[10px] group`}
                                        onClick={handleNotificationCheck}
                                    >
                                        <div className="relative">
                                           
                                            <Image
                                                src={NotificationIcon}
                                                alt="NotificationIcon"
                                                className={`group-hover:opacity-0 transition-opacity duration-300 ${activeContent === 'notification' ? 'opacity-0' : ''}`}
                                            />
                                           
                                            <Image
                                                src={NotificationIconBlue}
                                                alt="NotificationIconBlue"
                                                className={`absolute top-0 left-0 transition-opacity duration-300 ${activeContent === 'notification' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                            />
                                        </div>
                                        <h1 className={`text-[16px] leading-[19.36px] font-medium ${activeContent === 'notification' ? 'text-[#00A6DE]' : 'text-white group-hover:text-[#00A6DE]'} transition-colors duration-300`}>
                                            Notification
                                        </h1>
                                    </div>

                                    {isNotificationVisible && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                        <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] max-w-xs">
                                            <h2 className="text-xl font-bold mb-4">Notifications</h2>
                                            <ul className="space-y-2">
                                            <li>Notification 1</li>
                                            <li>Notification 2</li>
                                            </ul>
                                            <button
                                            onClick={closeOverlay}
                                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                            >
                                            Close
                                            </button>
                                        </div>
                                        </div>
                                    )}
                                </div> */}
                                <div className="pt-[20px]">
                                <div
                                        className={`flex items-center ${activeContent === 'Levels' ? 'bg-white rounded-[8px] p-[16px] w-[260px] mx-auto' : 'hover:bg-white rounded-[8px] mx-auto w-[260px] p-[16px]'} cursor-pointer  justify-start px-10 gap-[10px] group`}
                                        onClick={() => handleContentChange('Levels')}
                                    >
                                        <div className="relative">
                                            <Image
                                                src={LevelsIcon}
                                                alt="LevelsIcon"
                                                className={`group-hover:opacity-0 transition-opacity duration-300 ${activeContent === 'Levels' ? 'opacity-0' : ''}`}
                                            />
                                            <Image
                                                src={LevelsIconBlue}
                                                alt="LevelsIconBlue"
                                                className={`absolute top-0 left-0 transition-opacity duration-300 ${activeContent === 'Levels' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                            />
                                        </div>
                                        <h1 className={`text-[16px] leading-[19.36px] font-medium ${activeContent === 'Levels' ? 'text-[#00A6DE]' : 'text-white group-hover:text-[#00A6DE]'} transition-colors duration-300`}>
                                            Levels
                                        </h1>
                                    </div>
                                </div>

                                <div className="pt-[20px]">
                                <div
                                        className={`flex items-center ${activeContent === 'Tasks' ? 'bg-white rounded-[8px] p-[16px] w-[260px] mx-auto' : 'hover:bg-white rounded-[8px] mx-auto w-[260px] p-[16px]'} cursor-pointer  justify-start px-10 gap-[10px] group`}
                                        onClick={() => handleContentChange('Tasks')}
                                    >
                                        <div className="relative">
                                            <Image
                                                src={TaskIcon}
                                                alt="TaskIcon"
                                                className={`group-hover:opacity-0 transition-opacity duration-300 ${activeContent === 'Tasks' ? 'opacity-0' : ''}`}
                                            />
                                            <Image
                                                src={TaskIconBlue}
                                                alt="TaskIconBlue"
                                                className={`absolute top-0 left-0 transition-opacity duration-300 ${activeContent === 'Tasks' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                            />
                                        </div>
                                        <h1 className={`text-[16px] leading-[19.36px] font-medium ${activeContent === 'Tasks' ? 'text-[#00A6DE]' : 'text-white group-hover:text-[#00A6DE]'} transition-colors duration-300`}>
                                            Tasks
                                        </h1>
                                    </div>
                                </div>

                                <div className="pt-[20px]">
                                <div
                                        className={`flex items-center ${activeContent === 'tappingRate' ? 'bg-white rounded-[8px] p-[16px] w-[260px] mx-auto' : 'hover:bg-white rounded-[8px] mx-auto w-[260px] p-[16px]'} cursor-pointer  justify-start px-10 gap-[10px] group`}
                                        onClick={() => handleContentChange('tappingRate')}
                                    >
                                        <div className="relative">
                                            <Image
                                                src={RateIcon}
                                                alt="RateIcon"
                                                className={`group-hover:opacity-0 transition-opacity duration-300 ${activeContent === 'tappingRate' ? 'opacity-0' : ''}`}
                                            />
                                            <Image
                                                src={RateIconBlue}
                                                alt="RateIconBlue"
                                                className={`absolute top-0 left-0 transition-opacity duration-300 ${activeContent === 'tappingRate' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                            />
                                        </div>
                                        <h1 className={`text-[16px] leading-[19.36px] font-medium ${activeContent === 'tappingRate' ? 'text-[#00A6DE]' : 'text-white group-hover:text-[#00A6DE]'} transition-colors duration-300`}>
                                            Tapping Rate
                                        </h1>
                                    </div>
                                </div>
                                <div className="pt-[20px]">
                                    <div
                                        className={`flex items-center ${activeContent === 'allPlayers' ? 'bg-white rounded-[8px] w-[260px] mx-auto p-[16px]' : 'hover:bg-white rounded-[8px] p-[16px] mx-auto w-[260px]'}  cursor-pointer  justify-start px-10 gap-[10px] group`}
                                        onClick={() => handleContentChange('allPlayers')}
                                    >
                                        <div className="relative">
                                            {/* Default Icon */}
                                            <Image
                                                src={AllPlayersIcon}
                                                alt="AllPlayersIcon"
                                                className={`group-hover:opacity-0 transition-opacity duration-300 ${activeContent === 'allPlayers' ? 'opacity-0' : ''}`}
                                            />
                                            {/* Blue Icon (Visible on Hover) */}
                                            <Image
                                                src={AllPlayersIconBlue}
                                                alt="AllPlayersIconBlue"
                                                className={`absolute top-0 left-0 transition-opacity duration-300 ${activeContent === 'allPlayers' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                            />
                                        </div>
                                        <h1 className={`text-[16px] leading-[19.36px] font-medium ${activeContent === 'allPlayers' ? 'text-[#00A6DE]' : 'text-white group-hover:text-[#00A6DE]'} transition-colors duration-300`}>
                                            All players
                                        </h1>
                                    </div>
                                </div>
                                <div className="pt-[20px]">
                                <div
                                        className={`flex items-center ${activeContent === 'topPlayers' ? 'bg-white rounded-[8px] w-[260px] mx-auto p-[16px]' : 'hover:bg-white rounded-[8px] p-[16px] mx-auto w-[260px]'}  cursor-pointer  justify-start px-10 gap-[10px] group`}
                                        onClick={() => handleContentChange('topPlayers')}
                                    >
                                        <div className="relative">
                                            <Image
                                                src={TopPlayersIcon}
                                                alt="TopPlayersIcon"
                                                className={`group-hover:opacity-0 transition-opacity duration-300 ${activeContent === 'topPlayers' ? 'opacity-0' : ''}`}
                                            />
                                            <Image
                                                src={TopPlayersIconBlue}
                                                alt="TopPlayersIconBlue"
                                                className={`absolute top-0 left-0 transition-opacity duration-300 ${activeContent === 'topPlayers' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                            />
                                        </div>
                                        <h1 className={`text-[16px] leading-[19.36px] font-medium ${activeContent === 'topPlayers' ? 'text-[#00A6DE]' : 'text-white group-hover:text-[#00A6DE]'} transition-colors duration-300`}>
                                            Top players
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[100px]">
                            <div className="flex items-center hover:bg-white mx-auto rounded-[8px] w-[260px] p-[16px] justify-start px-10 gap-[10px] group cursor-pointer">
                                <div className="relative">
                                    {/* Default Icon */}
                                    <Image
                                        src={LogOutIcon}
                                        alt="LogOutIcon"
                                        className="group-hover:opacity-0 transition-opacity duration-300"
                                    />
                                    {/* Blue Icon (Visible on Hover) */}
                                    <Image
                                        src={LogOutIconBlue} // Make sure to define this blue icon
                                        alt="LogOutIconBlue"
                                        className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                                <h1 className="text-[16px] leading-[19.36px] font-medium text-white group-hover:text-[#00A6DE] transition-colors duration-300">
                                Log out
                                </h1>
                            </div>
                        </div>
            </div>
               
            </div>
                {/* Main Content Area */}
                <div className="ml-[284px] px-10 w-full bg-[#000000] h-[950px]">
                    {activeContent === 'overview' && <OverviewContent />}
                    {activeContent === 'charts' && <ChartsContent />}
                    {/* {activeContent === 'notification' && <NotificationContent />} */}
                    {activeContent === 'Levels' && <LevelsContent />}
                    {activeContent === 'Tasks' && <TasksContent />}
                    {activeContent === 'tappingRate' && <TappingRateContent />}
                    {activeContent === 'allPlayers' && <AllPlayersContent />}
                    {activeContent === 'topPlayers' && <TopPlayersContent />}
                    {/* Add more conditional rendering for other components */}
                
                </div>
        </div>
    )
       
}


export default Sidebar;