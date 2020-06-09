// components/tasks/TaskDetails.js

import React, { Component } from 'react';
import tasks from './../../lib/task-services'


class TaskDetails extends Component {
	state = {};

  componentDidMount(){
    this.getTheTask();
  }

  getTheTask = () => {
    const { id: projectId, taskId } = this.props.match.params;

    tasks.getTaskById(projectId, taskId)
    	.then( (theTask) => {
      	this.setState(theTask);
    })
    .catch( (err) => console.log(err))
  }

  render(){
    return(
      <div>
        <h3>TASK DETAILS</h3>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>

        {/* To go back we can use react-router-dom method `history.goBack()` available on `props` object */}
        <button onClick={this.props.history.goBack} >Go Back</button>
      </div>
    )
  }
}

export default TaskDetails;