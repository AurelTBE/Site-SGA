import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Link from "next/link";
import he from 'he'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({
  card: {
    maxWidth: 400,
    height: "100%",
    cursor: 'pointer',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
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
    const { classes, id, titre, exerpt, img } = this.props;

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
                  <FontAwesomeIcon icon={faDragon} />
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