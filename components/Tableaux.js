import React, { Component } from 'react'
import HtmlTableToJson from 'html-table-to-json'
import MUIDataTable from "mui-datatables";


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class Tableau extends Component {
    state = {data: null}

    componentDidMount() {
        const rawData = new HtmlTableToJson(this.props.data)
        const refinedData = rawData.results[0].map(row => Object.values(row))
        const header = refinedData.shift()
        const subHeader = refinedData.shift()
        this.setState({header: header, subHeader: subHeader, data: refinedData})
    }

    render() {
        
        const { classes } = this.props;
        if (this.state.data === null) {
            return <div>Chargement des résultats</div>
          } else {
            const header = this.state.header
            const subHeader = this.state.subHeader
            const data = this.state.data
    
            return (
            <div>
                {console.log(header)}
                {console.log(subHeader)}
                {console.log(data)}

                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                        <TableRow>
                            {
                                header.map(cell => (
                                    <TableCell key={cell}>{cell}</TableCell>
                                ))
                            }
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map(row => (
                            <TableRow key={row}>
                            <TableCell>xx</TableCell>
                            <TableCell align="right">xx</TableCell>
                            <TableCell align="right">xx</TableCell>
                            <TableCell align="right">xx</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">xx</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right">xx</TableCell>
                            <TableCell align="right">xx</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">xx</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

            </div>
            )
        }
    }
}

Tableau.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tableau)
