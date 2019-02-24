import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ListItem from '@material-ui/core/ListItem';
import Link from "next/link";
import he from 'he'

const styles = theme => ({
  card: {
    maxWidth: 400,
    cursor: 'pointer',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  logo: {
      maxWidth: "100%"
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, id, titre, exerpt, img, content } = this.props;

    function ListItemLink(props) {
      return <ListItem button component="a" {...props} />;
    }

    return (
      <Link as={`/p/${id}`} href={`/post?id=${id}`}>
        <Card className={classes.card}>
          <ListItemLink>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  <img src="/static/favicon-sga.svg" alt="Saint Georges d'Argenteuil" className={classes.logo} />
                </Avatar>
              }
              title={he.decode(titre)}
            />
          </ListItemLink>
          <CardMedia
            className={classes.media}
            image={img ? img : "/static/LOGO-CERTIFICATION.jpg"}
            title={he.decode(titre)}
          />
          <CardContent>
            <Typography 
              component="div" 
              dangerouslySetInnerHTML={ {
                __html: exerpt
                } }>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);