import React from 'react';

import { Table } from "@/components/ui/table"

interface TableProps {
    headers: string[];
    data: (string | number | React.ReactNode)[][];
}

const TopPlayersTable: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto bg-table-gradient border-[2.61px] border-[#00A6DE26] rounded-[8px]">
        <div className='pl-[15px]'>
            <h1 className='text-white text-[15.5px] leading-[23.26px] tracking-[0.15%] font-semibold'>Top players</h1>
        </div>
      <Table className="min-w-full">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 border-b border-b-[#FFFFFF26] text-white bg-[#2B336233] text-left text-[15.5px] font-normal leading-[23.26px]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-2 px-4 border-b border-b-[#FFFFFF26] text-white">
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

export default TopPlayersTable;