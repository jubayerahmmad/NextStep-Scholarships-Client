import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const Chart = ({ chartData }) => {
  return (
    <div className="max-w-7xl my-12">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={700}
          height={300}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="appliedDate" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar
            dataKey="totalApplications"
            fill="rebeccapurple"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="feesEarned"
            fill="teal"
            activeBar={<Rectangle fill="cyan" stroke="teal" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
