import {Fragment} from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'next/router'
import ResultQuery from '../queries/readResult'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import he from 'he'

// Components
import Tableaux from '../components/Tableaux'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    maxWidth: "100%",
  },
  content: {
    textAlign: 'left',
    '& figure': {
      textAlign: 'center',
    },
  },
});

const Content = withRouter((props) => (
  <ResultQuery id={props.router.query.id}>
    {({ loading, error, result }) => {
      if (error) return <ErrorMessage message='Error loading posts.' />
      if (loading) return <div>Loading</div>
        return (
          <Fragment>
            <Grid item xs={12}>
              <Tableaux data={result.content} title={he.decode(result.title)} />
            </Grid>
          </Fragment>
        )
      }
    }
  </ResultQuery>
))

function Resultat(props) {
  const { classes } = props;
    
  return (
      <Content classes={classes}/>
    )
}


Resultat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resultat)