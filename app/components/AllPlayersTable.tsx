import React from 'react';
import { Table } from "@/components/ui/table";
import Image from 'next/image';

interface TableProps {
    headers: string[];
    data: (string | number | React.ReactNode)[][];
}

const AllPlayersTable: React.FC<TableProps> = ({ headers, data }) => {
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
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-2 px-4  text-white">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllPlayersTable;