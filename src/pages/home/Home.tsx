import ChartBox from '../../components/chartBox/ChartBox'
import TopBox from '../../components/topBox/TopBox'
import './home.scss'
import { AreaChartData, PieChartData, barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser,  } from '../../data'
import Barchart from '../../components/barChart/Barchart'
import PieChartBox from '../../components/piechart/PieChartBox'
import AreaChartBox from '../../components/areachart/AreaChartBox'

function Home() {
  return (
    <div className='home'>
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox {...PieChartData}/></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box7"><AreaChartBox {... AreaChartData}/></div>
      <div className="box box8"><Barchart {...barChartBoxRevenue}/></div>
      <div className="box box9"><Barchart {...barChartBoxVisit}/></div>
    </div>
  )
}

export default Home
