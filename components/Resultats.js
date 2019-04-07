import React from 'react';
import { Query } from 'react-apollo'
import readResultsQuery from '../queries/readResults'
import ErrorMessage from './ErrorMessage'

// MUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import ResultCard from "./CardResult"



const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
});
  

function Resultats () {
  return (
      <Query query={readResultsQuery}>
      {({ loading, error, data: { results }}) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <div>Loading</div>

          return (
              <Grid container spacing={24}>
                  {results.nodes.map((resultat) => (
                    <Grid item xs={12} sm={6} md={4} xl={3} key={resultat.id}>
                      <ResultCard id={resultat.id} titre={resultat.title} img={resultat.featuredImage ? resultat.featuredImage.sourceUrl : null} />
                    </Grid>
                  ))}
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