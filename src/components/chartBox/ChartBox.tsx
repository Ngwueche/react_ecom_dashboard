import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type props ={
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: string | number;
    percentage: number;
    chartData: object[]
}

function ChartBox(props) {
  return (
    <div className='chartBox'>
      <div className='boxInfo'>
        <div className='title'>
          <img src={props.icon} alt='' />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to='/' style={{color:props.color}} className='viewAll'>
          View All
        </Link>
      </div>
      <div className='chartInfo'>
        <div className='chart'>
          <ResponsiveContainer width='99%' height='100%'>
            <LineChart data={props.chartData}>
              <Tooltip
              contentStyle={{background:"transparent", border:'none'}}
              labelStyle={{display:"none"}}
              position={{x:10, y:60}}
              />
              <Line
                type='monotone'
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='texts'>
          <span className='percentage' style={{color: props.percentage<0? "tomato":"limegreen"}}> {props.percentage}%</span>
          <span className='duration'>This Month</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
