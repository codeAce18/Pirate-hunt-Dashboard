import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { time: '1D', players: 1200 },
  { time: '2D', players: 1000 },
  { time: '3D', players: 1400 },
  { time: '7D', players: 1000 },
  { time: '1W', players: 1300 },
  { time: '1M', players: 900 },
];

const OverviewChart = () => {
  return (
    <div className="w-[478px] h-[381.36px] bg-table-gradient border-[2.61px] border-[#00A6DE26]  flex flex-col shadow-md rounded-lg">
      <h3 className="text-lg font-medium text-left mb-4 pl-16 text-[#FFFFFF59]">Total Players</h3>
      <div className="flex-1 flex items-center justify-center w-full">
          <ResponsiveContainer width="100%" height="90%" className="mr-16">
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPlayers" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00A6DE" stopOpacity={1} />
                    <stop offset="87.47%" stopColor="rgba(0, 0, 0, 0.65)" stopOpacity={1} />
                    <stop offset="100%" stopColor="rgba(0, 166, 222, 0.45)" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" interval={0} />
              <YAxis axisLine={false} tick={false} />
              <CartesianGrid  horizontal={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="players"
                stroke="#4DAFF2"
                fillOpacity={1}
                fill="url(#colorPlayers)"
              />
            </AreaChart>
          </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverviewChart;
