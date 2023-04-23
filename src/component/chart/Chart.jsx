import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'january',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'february',
    orders: 3000,
    users: 1218,
    amt: 2250,
  },
  {
    name: 'march',
    orders: 3050,
    users: 1368,
    amt: 2260,
  },
  {
    name: 'april',
    orders: 6000,
    users: 1598,
    amt: 2210,
  },
  {
    name: 'may',
    orders: 3200,
    users: 1328,
    amt: 2220,
  }
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="orders" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="users" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
