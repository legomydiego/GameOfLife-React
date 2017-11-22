import React, { Component } from 'react'

class Box extends Component {
    render()
    {
        if (this.props.isBlue) {
            return <div className="blue"></div>
        }
        else {
            return <div className="red"></div>
        }
    }
}

export default Box;