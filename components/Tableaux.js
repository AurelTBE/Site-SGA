import React, { Component } from 'react'
import HtmlTableToJson from 'html-table-to-json'
import MUIDataTable from "mui-datatables";


export default class Tableau extends Component {
    state = {data: null}

    componentDidMount() {
        const rawData = new HtmlTableToJson(this.props.data)
        const refinedData = rawData.results[0].map(row => Object.values(row))
        const header = refinedData.shift()
        const subHeader = refinedData.shift()
        this.setState({header: header, subHeader: subHeader, data: refinedData})
    }

    render() {
        if (this.state.data === null) {
            return <div>Chargement des résultats</div>
          } else {
            const header = this.state.header
            const subHeader = this.state.subHeader
            const data = this.state.data
        
            const options = {
                selectableRows: false,
                pagination: false,
                search: false,
                print: false,
                filter: false,
                responsive: "scroll",
            }
    
            return (
            <div>
                {console.log(header)}
                {console.log(subHeader)}
                {console.log(data)}
            </div>
            )
        }
    }
}

