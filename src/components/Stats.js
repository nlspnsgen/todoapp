import React from 'react';
import "./stats.scss"

const Stats = (props) =>  {
    return (
    <>
        <div className="wrapper">
            <div className="total"> <p>TOTAL: {props.statsAll()}</p> </div>
            <div className="success"> <p>SUCCESS: {props.statsSuccess()}</p> </div>
            <div className="pending"> <p>PENDING: {props.statsAll() - props.statsSuccess()}</p> </div>
        </div>
    </>    
    )
}

export default Stats;