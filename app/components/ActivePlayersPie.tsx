import React from 'react';
import Image from 'next/image';
import blue from "/public/assets/blue.svg"
import darkblue from "/public/assets/darkblue.svg"
import green from "/public/assets/green.svg"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Level 1-5', value: 60, color: "#00A6DE" },   // 60%
  { name: 'Level 6-10', value: 20, color: "#01C601" },  // 20%
  { name: 'Level 11-13', value: 20, color: "#1A314E" }, // 20%
];

const ActivePlayersPie: React.FC = () => {
  return (
    <div className="w-[346px] h-[353.42px] p-4 bg-gradient-gradient rounded-[9.67px] border-[2.42px] border-[#00A6DE26] shadow-md flex flex-col justify-center items-center">
      <h2 className="text-[12.47px] leading-[15.1px] font-bold mb-4 text-white">Users Level</h2>
      <div className="w-full h-full flex justify-center items-center pr-[16px] -mt-4">

        <ResponsiveContainer width="80%" height="80%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="40%"   
              outerRadius="80%"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        
      </div>

        <div className='flex flex-col items-center gap-y-[10px]'>
            <div className='flex items-center gap-20'>
                <div className='flex items-center gap-[5px]'>
                    <Image src={blue} alt="blue" />

                    <p className='text-[12.47px] text-[#767676] leading-[15.1px] font-bold'>Level 1 - Level 5 </p>
                </div>

                <p className='text-[#404040] text-[12.47px] leading-[15.1px]'>60%</p>
            </div>

            <div className='flex items-center gap-20'>
                <div className='flex items-center gap-[5px]'>
                    <Image src={green} alt="green" />

                    <p className='text-[12.47px] text-[#767676] leading-[15.1px] font-bold'>Level 6 - level 10</p>
                </div>

                <p className='text-[#404040] text-[12.47px] leading-[15.1px]'>20%</p>
            </div>

            <div className='flex items-center gap-20'>
                <div className='flex items-center gap-[5px]'>
                    <Image src={darkblue} alt="darkblue" />

                    <p className='text-[12.47px] text-[#767676] leading-[15.1px] font-bold'>Level 11 - Level 13 </p>
                </div>

                <p className='text-[#404040] text-[12.47px] leading-[15.1px]'>20%</p>
            </div>
        </div>
    </div>
  );
};

export default ActivePlayersPie;
