import React from 'react';
import { Table } from "@/components/ui/table";


interface PlayerData {
    id: number; // Unique ID for each player
    profileImage: React.ReactNode;
    name: string;
    exchange: string;
    wallet: React.ReactNode;
    winrate: React.ReactNode;
    rank: string;
    country: string;
  }

  interface AllPlayersTableProps {
    headers: string[];
    data: PlayerData[];
  }
  

const AllPlayersTable: React.FC<AllPlayersTableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto bg-[#FFFFFF0D] border-[2.61px] border-[#00A6DE26] rounded-[8px]">
        <div className='pl-[15px]'>
            <h1 className='text-white text-[15.5px] leading-[23.26px] tracking-[0.15%] font-semibold'>Player&apos;s profile</h1>
        </div>
      <Table className="min-w-full">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4  text-white bg-[#2B336233] text-left text-[15.5px] font-normal leading-[23.26px]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        {data.map((player) => (
          <tr key={player.id} className='text-white'> 
            <td>{player.profileImage}</td>
            <td>{player.name}</td>
            <td>{player.exchange}</td>
            <td>{player.wallet}</td>
            <td>{player.winrate}</td>
            <td>{player.rank}</td>
            <td>{player.country}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllPlayersTable;