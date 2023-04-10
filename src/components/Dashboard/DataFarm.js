import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTurnUp, faTurnDown } from '@fortawesome/free-solid-svg-icons'
export default function DataFarm({ data }) {
    return (
        <div className='dashboard-bottom-row-container'>
            <div className='dashboard-bottom-row-container-header'>
                <h2>{data.name}
                </h2>
                {!data.isCondition && (
                    data.curVal > data.prevVal ? (
                        <div className='dashboard-bottom-row-container-header-right'><FontAwesomeIcon icon={faTurnUp} />
                            <p>{data.curVal - data.prevVal}%</p>
                        </div>
                    ) : (
                        <div className='dashboard-bottom-row-container-header-right down'><FontAwesomeIcon icon={faTurnDown} />
                            <p>{data.curVal - data.prevVal}%</p>
                        </div>
                    )
                )
                }
            </div>
            <div className='dashboard-bottom-row-container-body'>
                <div className='icon'>
                    <FontAwesomeIcon icon={data.icon} style={{ color: data.color }} />
                </div>
                <h2>{data.curVal}{data.postfix}</h2>
            </div>
            <div className='dashboard-bottom-row-container-bottom'>
                {/* <div className='icon'>icon</div> */}
                {!data.isCondition && (
                    <>
                        <div className='dashboard-bottom-row-container-bottom-cicle' style={{ backgroundColor: `${data.color}` }}>

                        </div>
                        <div className='dashboard-bottom-row-container-bottom-line'>
                            <div style={{ width: `${data.curVal}% `, backgroundColor: `${data.color}` }}></div>
                        </div>
                    </>

                )}
            </div>
        </div>
    )
}
