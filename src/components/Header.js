import React from 'react';
// import img from "../img/qwe.jpg";

const style = {
    textAlign: "center",
    marginBottom: "20px"
}
const Header = (props) => {
    return (
        <div style={style}>
            {/* <img 
                // src={require("../img/qwe.jpg")}
                src={img}
                style={ {width:"250px", margin:"auto", display:"block"}}
                alt={"alt"}
            /> */}
            <h1 style={{marginBottom:"10px"}}>To Do App</h1>
            <p>Add, Edit or Delete a Todo Item.</p>
        </div>
    )
}

export default Header;