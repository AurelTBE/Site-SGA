import React from 'react';
import { Query } from 'react-apollo'
import readResultsQuery from '../queries/readResults'
import ErrorMessage from './ErrorMessage'
import Link from "next/link";
import he from 'he'

// MUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ResultLink = (props) => (
    <div>
      <Link as={`/resultats/${props.id}`} href={`/resultat?id=${props.id}`}>
            <ListItemLink>
                <ListItemText primary={he.decode(props.titre)} />
            </ListItemLink>
      </Link>
    </div>
  )

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
});
  
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
  

function Resultats (props) {
  return (
      <Query query={readResultsQuery}>
      {({ loading, error, data: { results }}) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <div>Loading</div>

          return (
              <Grid item xs={12}>
                  <List component="nav">
                  {results.nodes.map((resultat) => (
                      <ResultLink key={resultat.id} id={resultat.id} titre={resultat.title} />
                  ))}
                  </List>
              </Grid>
          )
      }}
      </Query>
  )
}

Resultats.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Resultats);