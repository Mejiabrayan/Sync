import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await axios.get(
          'http://numbersapi.com/random/math?json&min=1&max=100'
        );
        setStats([
          { id: 1, label: 'Number Fact', value: response.data.text },
          { id: 2, label: 'Views', value: Math.floor(Math.random() * 100) },
          { id: 3, label: 'Engagement', value: Math.floor(Math.random() * 100) },
          { id: 4, label: 'Outreach', value: Math.floor(Math.random() * 100) },
        ]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchStats();
  }, []);

  const data = [
    { label: stats[1]?.label, value: stats[1]?.value },
    { label: stats[2]?.label, value: stats[2]?.value },
    { label: stats[3]?.label, value: stats[3]?.value },
  ];

  return (
    <div className='mt-5 bg-gray-200 rounded-lg p-4 space-y-4'>
      <h3 className='text-lg font-semibold text-gray-800 mb-4'>Statistics</h3>
      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-white shadow rounded-lg p-4 text-center'>
          <h4 className='text-xl font-semibold mb-2'>{stats[0]?.value}</h4>
          <p className='text-gray-500'>{stats[0]?.label}</p>
        </div>
        <div className='bg-white shadow rounded-lg p-4'>
          <BarChart width={200} height={150} margin={{ top: 10, bottom: 10, left: 5, right: 5 }} data={data}>
            <XAxis dataKey='label' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='value' fill='#8884d8' />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Stats;
