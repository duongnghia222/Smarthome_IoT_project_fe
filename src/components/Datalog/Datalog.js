import React from 'react'
import DiagData from '../DiagData/DiagData';
import { DiaDatalog } from './DiaDatalog';
import "./style.scss"
import getData from '../../utils/getData';
import { useGlobalContext } from '../../context/index';

const labels = ['Mon', 'Tue', 'Thir', 'Wed', 'Fri', 'Sat', 'Sun'];

export default function Datalog() {
    const [mode, setMode] = React.useState(0);
    const [data,setData] = React.useState([
        {
            name: "Nhiệt độ",
            color: "rgb(15, 136, 249)",
            data: []
        },
        {
            name: "Độ ẩm",
            color: "rgb(16, 213, 248)",
            data: []
        },
        {
            name: "Ánh sáng",
            color: "rgb(252, 163, 61)",
            data: []
        },
        {
            name: "Dự báo",
            color: "rgb(63, 221, 102)",
            data: []
        }
      ])
      React.useEffect(()=>{
        const getAllData = async () => {
          setData([
            {
                name: "Nhiệt độ",
                color: "rgb(15, 136, 249)",
                data: (await getData('temperature-sensor')).map(e=>parseInt(e))
            },
            {
                name: "Độ ẩm",
                color: "rgb(16, 213, 248)",
                data: (await getData('humidity-sensor')).map(e=>parseInt(e))
            },
            {
                name: "Ánh sáng",
                color: "rgb(252, 163, 61)",
                data: (await getData('light-sensor')).map(e=>parseInt(e))
            },
            // {
            //     name: "Dự báo",
            //     color: "rgb(63, 221, 102)",
            //     data: (await getData('weather-status')).map(e=>{
            //       if (e === 'Good'){
            //         return 2
            //       }else if (e === 'Dry'){
            //         return 1
            //       }else{
            //         return 0
            //       }
            //     })
            // }
          ])
        }
        getAllData()
      },[mode])
  return (
    <div className='datalog'>
        <div className='datalog-left'>
            <button style={{ background: mode === 0 && data[mode].color}} onClick={()=>setMode(0)} className={mode === 0 ? "active" : ""}>Nhiệt độ</button>
            <button style={{ background: mode === 1 && data[mode].color}} onClick={()=>setMode(1)} className={mode === 1 ? "active" : ""}>Độ ẩm</button>
            <button  style={{ background: mode === 2 && data[mode].color}} onClick={()=>setMode(2)} className={mode === 2 ? "active" : ""}>Ánh sáng</button>
            <button  style={{ background: mode === 3 && data[mode].color}} onClick={()=>setMode(3)} className={mode === 3 ? "active" : ""}>Tính trạng cây</button>
        </div>
        <div className='datalog-right'>
            <DiagData data1= {data[mode]} labels={labels}/>
            <div className='mode-diag'>
                <button>Ngày</button>
                <button>Tháng</button>
                <button className='active'>Năm</button>
            </div>
        </div>
    </div>
  )
}
