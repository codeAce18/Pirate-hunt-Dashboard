import AllPlayersTable from "./AllPlayersTable";
import LeaderBoard from "./LeaderBoard";
import Profile1 from "/public/assets/Profile1.svg";
import Profile2 from "/public/assets/Profile2.svg";
import Profile3 from "/public/assets/Profile3.svg";
import Profile4 from "/public/assets/Profile4.svg";
import Profile5 from "/public/assets/Profile5.svg";
import Image from 'next/image';

const AllPlayerContent = () => {
    const headers = ['Profile', 'Name', 'Exchange', 'Wallet', 'Winrate%', 'Rank', 'Country'];
    
    // Example data structure with unique keys
    const data = [
        {
            id: 1,
            profileImage: <Image className="ml-[10px]" width={35} height={35} src={Profile1} alt="Profile 1" />,
            name: 'AYomitiide',
            exchange: 'Binance',
            wallet: <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,
            winrate: <p className="text-[#01C601]">95%</p>,
            rank: 'Pirate Lord',
            country: 'Nigeria'
        },
        {
            id: 2,
            profileImage: <Image className="ml-[10px]" width={35} height={35} src={Profile2} alt="Profile 2" />,
            name: 'Jude Steve',
            exchange: 'Ton wallet',
            wallet: <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,
            winrate: <p className="text-[#01C601]">65%</p>,
            rank: 'Ocean raider',
            country: 'USA'
        },
        {
            id: 3,
            profileImage: <Image className="ml-[10px]" width={35} height={35} src={Profile3} alt="Profile 3" />,
            name: 'DR Crowny',
            exchange: 'OKX Wallet',
            wallet: <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,
            winrate: <p className="text-[#01C601]">90%</p>,
            rank: 'Lord',
            country: 'UK'
        },
        {
            id: 4,
            profileImage: <Image className="ml-[10px]" width={35} height={35} src={Profile4} alt="Profile 4" />,
            name: 'Daniel Ray',
            exchange: 'Binance',
            wallet: <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,
            winrate: <p className="text-[#01C601]">95%</p>,
            rank: 'Sea Captain',
            country: 'England'
        },
        {
            id: 5,
            profileImage: <Image className="ml-[10px]" width={35} height={35} src={Profile5} alt="Profile 5" />,
            name: 'Tacha Nite',
            exchange: 'Binance',
            wallet: <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,
            winrate: <p className="text-[#01C601]">95%</p>,
            rank: 'Wealthy pirate',
            country: 'England'
        },
        {
            id: 6,
            profileImage: <Image className="ml-[10px]" width={35} height={35} src={Profile4} alt="Profile 4" />,
            name: 'Shacks BE',
            exchange: 'Ton Wallet',
            wallet: <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,
            winrate: <p className="text-[#01C601]">75%</p>,
            rank: 'Coin Collector',
            country: 'Italy'
        },
        {
            id: 7,
            profileImage: <Image className="ml-[10px]" width={35} height={35} src={Profile5} alt="Profile 5" />,
            name: 'Mark Brain',
            exchange: 'Binance',
            wallet: <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,
            winrate: <p className="text-[#01C601]">75%</p>,
            rank: 'Pirate Lord',
            country: 'Germany'
        },
    ];

    return (
        <>
            <LeaderBoard />
            <div className="pt-[10px]">
                <AllPlayersTable headers={headers} data={data} />
            </div>
        </>
    );
};

export default AllPlayerContent;
