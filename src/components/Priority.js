import React from 'react';
import "./Priority.scss"
class Priority extends React.Component  {
    
    render(){
    return(
    <select onChange={this.props.onChangeHandler} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
    </select>
    )}
}

export default Priority;