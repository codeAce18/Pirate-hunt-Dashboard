import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiArrowDown } from 'react-icons/fi';

const gameSessionsData = [
  { name: 'M', sessions: 300 },
  { name: 'T', sessions: 500 },
  { name: 'W', sessions: 400 },
  { name: 'T', sessions: 450 },
  { name: 'F', sessions: 600 },
  { name: 'Today', sessions: 700 },
];

const completionRatesData = [
  { name: 'M', rates: 60 },
  { name: 'T', rates: 75 },
  { name: 'W', rates: 65 },
  { name: 'T', rates: 70 },
  { name: 'F', rates: 85 },
  { name: 'Today', rates: 90 },
];

const ActivePlayersBar: React.FC = () => {
  return (
    <div className="w-[626px] p-4 bg-[#FFFFFF0D] rounded-[10.43px] border-[#00A6DE26] border-[2.61px] shadow-md flex flex-row space-x-4">
      {/* First Chart: Game Sessions */}
      <div className="flex flex-col items-center w-1/2 bg-[#00000026] pr-[20px]">
        <h2 className="text-[16px] leading-[19.36px] text-[#FFFFFF] font-bold mb-2 flex items-center">
          Game Sessions <FiArrowDown className="ml-2 text-[#00A6DE]" />
        </h2>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={gameSessionsData}>
              <XAxis dataKey="name" />
              <YAxis axisLine={false} tick={false}  />
              <Tooltip />
              <Bar dataKey="sessions" fill="#00A6DE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second Chart: Completion Rates */}
      <div className="flex flex-col items-center w-1/2 bg-[#00000026] pr-[20px]">
        <h2 className="text-[16px] text-white font-bold mb-2 flex items-center">
          Completion Rates <FiArrowDown className="ml-2 text-[#01C601]" />
        </h2>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={completionRatesData}>
              <XAxis dataKey="name" 
              interval={0} // Show all labels
              tick={{ fontSize: 14 }} // Adjust font size if needed
              />
              <YAxis axisLine={false} tick={false}  />
              <Tooltip />
              <Bar dataKey="rates" fill="#01C601" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ActivePlayersBar;
