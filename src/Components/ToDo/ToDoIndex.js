import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';

class ToDoIndex extends Component {
    constructor() {
        super();
        this.state = {
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        e.preventDefault();
        let taskInput = document.getElementById('input').value;
        this.setState({
            tasks: taskInput
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.addTask}>
                    <Input id='input' placeholder='Enter Your Task Here' />
                    <br />
                    <Button type='submit'>Add</Button>
                    <br />
                    <br />
                    <h3>To Do List:</h3>
                    {this.state.tasks}
                </Form>
            </div>
        )
    }
}

export default ToDoIndex;