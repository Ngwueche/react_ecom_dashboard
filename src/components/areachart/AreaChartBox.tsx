import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./areaChart.scss";
import { AreaChartData } from "../../data";

type props = {
  name: string;
  dataKey: string

}
function AreaChartBox(props) {
  return (
    <div className='areachart'>
      <h1>Revenue Analysis</h1>
        <div className='chart'>
          <ResponsiveContainer width='90%' height='100%'>
            <AreaChart
              data={AreaChartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='books'
                stackId='1'
                stroke='#8884d8'
                fill='#8884d8'
              />
              <Area
                type='monotone'
                dataKey='clothes'
                stackId='1'
                stroke='#82ca9d'
                fill='#82ca9d'
              />
              <Area
                type='monotone'
                dataKey='electronics'
                stackId='1'
                stroke='#ffc658'
                fill='#ffc658'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

    </div>
  );
}

export default AreaChartBox;
