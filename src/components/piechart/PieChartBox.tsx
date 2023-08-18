import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./piechart.scss";
import { PieChartData } from "../../data";


type props = {
    dataKey: string;
    value: string;
    color: string


}
function PieChartBox(props) {
  return (
    <div className='piechart'>
      <h1>Leads by Source</h1>
      <div className='chart'>
        <ResponsiveContainer width='99%' height={300}>
          <PieChart>
            <Tooltip />
            <Pie
              data={PieChartData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey='value'
            >
              {PieChartData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='options'>
        {PieChartData.map((item) => (
          <div className='option' key={item.name}>
            <div className='title'>
              <div className='dot' style={{ backgroundColor: item.color }}>
                <span>{item.name}</span>
              </div>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox