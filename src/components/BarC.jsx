import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const defaultData = [
  { name: "Entertainment", value: 0 },
  { name: "Food", value: 0 },
  { name: "Travel", value: 0 },
];

export default class CustomBarChart extends PureComponent {
  render() {
    const { data = defaultData } = this.props;

    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 40, left: 70, bottom: 5 }}
          layout="vertical"
        >
          <XAxis type="number" hide />
          <YAxis
            axisLine={false}
            tickLine={false}
            type="category"
            dataKey="name"
          />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#8784d2"
            radius={[0, 20, 20, 0]}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
