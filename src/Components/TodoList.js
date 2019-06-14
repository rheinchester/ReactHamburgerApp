import React, { PureComponent } from 'react'

export default class TodoList extends PureComponent {
    render() {
        return (
            <div>
                <div className="todoListMain">
                    <div className="header">
                        <form onSubmit={this.props.addItem}>
                            <input placeholder="Task" />
                            <button type="submit"> Add Task </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
