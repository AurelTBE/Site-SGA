import React, { Component } from 'react'
import HtmlTableToJson from 'html-table-to-json'

export default class Tableau extends Component {
    state = {data: null}

    componentDidMount() {
        const data = new HtmlTableToJson(this.props.data)
        this.setState({data: data.results[0]})
    }

    render() {
        return (
        <div>
            {console.log(this.state.data)}
        </div>
        )
    }
}
