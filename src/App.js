import './App.css';
import React from "react";
import {  ScatterChart,
  Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
const pdata = [
  {
    "Alcohol": 1,
    "Malic Acid": 14.23,
    "Ash": 1.71,
  },
  {
    "Alcohol": 1,
    "Malic Acid": 13.2,
    "Ash": 1.78,
  },
  {
    "Alcohol": 1,
    "Malic Acid": 13.16,
    "Ash": 2.36,
  },
  {
    "Alcohol": 1,
    "Malic Acid": 14.37,
    "Ash": 1.95,
  },
  {
    "Alcohol": 1,
    "Malic Acid": 13.24,
    "Ash": 2.59,
  },
  {
    "Alcohol": 1,
    "Malic Acid": 14.2,
    "Ash": 1.76,
  },
];

function App() {
  return (
    <>
      <h3 className="chart-heading">ScatterChart</h3>
      <ResponsiveContainer width="120%" aspect={3}>
        <ScatterChart data={pdata} width={200} height={200} margin={{ top: 5, right: 250, left: 10, bottom: 2 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Ash" interval={'preserveStartEnd'} tickFormatter={(value) => value } />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          <Legend />
          <Scatter type="monotone" dataKey="Malic Acid" stroke="red" activeDot={{ r: 8 }} />
          <Scatter type="monotone" dataKey="Alcohol" stroke="green" activeDot={{ r: 8 }} />
        </ScatterChart>
      </ResponsiveContainer>

      {/* <h1 className="chart-heading">Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Alcohol" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Malic Acid" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer> */}

      <h3 className="chart-heading">Bar Chart</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Ash" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Malic Acid" fill="#8884d8" />
          <Bar dataKey="Alcohol" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;