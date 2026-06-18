"use client";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export const DashboardRadarChart = ({ data }) => {
  return (
    <div className="w-full h-[400px] bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
      <h3 className="text-white font-bold mb-4">Category Analytics</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#3f3f46" />
          <PolarAngleAxis dataKey="category" tick={{ fill: '#a1a1aa' }} />
          <PolarRadiusAxis domain={[0, 'auto']} />
          <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
          <Radar name="Amount" dataKey="amount" stroke="#6366f1" fill="#6366f1" fillOpacity={0.5} />
          <Radar name="Wishlist" dataKey="wishlist" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};