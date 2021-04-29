import React, { Component } from 'react'

export default class Keypad extends Component {

    handleKeyEvent = () => {
        console.log("Entering password...")
    }
    render() {
        return (
            <div>
                Password:<br/>
                <input onKeyUp={this.handleKeyEvent} type="password" />
            </div>
        )
    }
}