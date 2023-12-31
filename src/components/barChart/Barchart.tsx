import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './barchart.scss'

type props = {
  title: string;
  color:string;
  dataKey:string;
  chartData: object[]
}
function Barchart(props) {
  return (
    <div className='barchart'>
      <h1>{props.title}</h1>
      <div className='chart'>
        <ResponsiveContainer width='100%' height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
            contentStyle={{background: '#2a3447', borderRadius:'5px' }}
            labelStyle={{display:'none'}}
            cursor={{fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Barchart