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
    const data = [
        [<Image width={35} height={35} src={Profile1} alt="LevelBadge" />, 'AYomitiide', 'Binance' , <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,<p className="text-[#01C601]">95%</p>, 'Pirate Lord', 'Nigeria'
        ],

        [<Image width={35} height={35} src={Profile2} alt="LevelBadge" />, 'Jude Steve', 'Ton wallet' , <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,<p className="text-[#01C601]">65%</p>, 'Ocean raider', 'USA'
        ],

        [<Image width={35} height={35} src={Profile3} alt="LevelBadge" />, 'DR Crowny', 'OKX Wallet' , <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,<p className="text-[#01C601]">90%</p>, 'Lord', 'UK'
        ],

        [<Image width={35} height={35} src={Profile4} alt="LevelBadge" />, 'Daniel Ray', 'Binance' , <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,<p className="text-[#01C601]">95%</p>, 'Sea Captain', 'England'
        ],

        [<Image width={35} height={35} src={Profile5} alt="LevelBadge" />, 'Tacha Nite', 'Binance' , <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,<p className="text-[#01C601]">95%</p>, 'Wealthy pirate', 'England'
        ],

        [<Image width={35} height={35} src={Profile4} alt="LevelBadge" />, 'Shacks BE', 'Ton Wallet' , <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,<p className="text-[#01C601]">75%</p>, 'Coin Collector', 'Italy'
        ],

        [<Image width={35} height={35} src={Profile5} alt="LevelBadge" />, 'Mark Brain', 'Binance' , <p className="max-w-[193px] text-[#00A6DE]">UQC31W_AAWZwZ5-sAnSg3iznJ6VT0RLRrXYXpPlXQ_CsIp0m</p>,<p className="text-[#01C601]">75%</p>, 'Pirate Lord', 'Germany'
        ],
    ];

    return (
        <>
       
            <LeaderBoard />

            <div className="pt-[10px]">
                <AllPlayersTable headers={headers} data={data} />
            </div>
       
       
        </>
    )
}


export default AllPlayerContent;