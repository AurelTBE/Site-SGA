import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// Breapkpoints
import withWidth from '@material-ui/core/withWidth';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faImages } from '@fortawesome/free-regular-svg-icons'

// Components
import PostList from '../components/PostList'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme, width } = this.props;
    // Check breakpoint
    const isSmallScreen = /xs|sm/.test(width);
    const labelProps = {
      size: isSmallScreen ? "small" : "large"
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab {...labelProps} label={labelProps.size==="large" ? "Actualités" : <FontAwesomeIcon icon={faDragon} />} />
            <Tab {...labelProps} label={labelProps.size==="large" ? "Agenda" : <FontAwesomeIcon icon={faCalendarAlt} />} />
            <Tab {...labelProps} label={labelProps.size==="large" ? "Médiathèque" : <FontAwesomeIcon icon={faImages} />} />
            <Tab {...labelProps} label={labelProps.size==="large" ? "Résultats" : <FontAwesomeIcon icon={faTrophy} />} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <PostList />
          </TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
          <TabContainer dir={theme.direction}>Item Four</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth() (withStyles(styles, { withTheme: true })(FullWidthTabs));