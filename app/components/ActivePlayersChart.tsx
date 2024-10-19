// components/ActivePlayersChart.tsx
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '1D', players: 7000 },
  { name: '2D', players: 8500 },
  { name: '3D', players: 5300 },
  { name: '7D', players: 6800 },
  { name: '1W', players: 4000 },
  { name: '2W', players: 7500 },
  { name: '3W', players: 5000 },
  { name: '1M', players: 6000 },
  { name: '2M', players: 4500 },
  { name: '3M', players: 7000 },
];

const ActivePlayersChart: React.FC = () => {
  return (

    <div className="w-full h-[381px] p-4 bg-gradient-gradient border-[2.61px] border-[#00A6DE26] rounded-lg shadow-md flex flex-col  ">
    <h2 className="text-[16.02px] leading-[43.49px] tracking-[0.15%] font-semibold mb-4 text-white text-left pl-16">Total Active Players</h2>
    <div className="w-full h-full flex justify-center items-center pr-16">
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
            <defs>
            <linearGradient id="customGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="-57.47%" stopColor="#00A6DE" />
                <stop offset="87.47%" stopColor="rgba(0, 0, 0, 0.65)" />
                <stop offset="289.13%" stopColor="rgba(0, 166, 222, 0.45)" />
            </linearGradient>
            </defs>
            <CartesianGrid horizontal={false} stroke="#B1B1B126" />
            <XAxis dataKey="name" tick={{ fill: '#2E2E30' }} />
            <YAxis axisLine={false} tick={false} />
            <Tooltip />
            <Area
            type="monotone"
            dataKey="players"
            stroke="#00A6DE"
            fill="url(#customGradient)" // Apply your custom gradient
            />
        </AreaChart>
        </ResponsiveContainer>
    </div>
    </div>
  );
};

export default ActivePlayersChart;
