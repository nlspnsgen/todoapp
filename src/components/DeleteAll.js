import React from 'react';

const style = {
    color: "deepskyblue",
    border: "none",
    background: "white",
    marginTop: "20px",
    cursor: "pointer"
}
const ClearAll = (props) =>  {
    return (
        <button style={ style } onClick={() => props.deleteAll()}> Clear All &#x1f5d1;</button>
    )
}

export default ClearAll;