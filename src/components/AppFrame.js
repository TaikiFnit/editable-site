import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 200;

const styles = theme => ({
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100vh'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    background: 'rgb(31,39,52)',
    color: '#ECEFF4'
  },
  'appBar-left': {
    marginLeft: drawerWidth
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    background: 'rgb(42,50,63)'
  },
  drawerColor: {
    color: '#ABB2BF'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'rgb(44,52,65)',
    color: '#DCDCDC',
    padding: theme.spacing.unit * 3
  }
});

function AppFrame(props) {
  return (
    <div className={props.classes.appFrame}>
      <AppBar
        position="absolute"
        className={classNames(
          props.classes.appBar,
          props.classes[`appBar-left`]
        )}
      >
        {
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Fnit.Tech
            </Typography>
          </Toolbar>
        }
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: props.classes.drawerPaper
        }}
      >
        <div className={props.classes.toolbar} />
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemText
              className={props.classes.drawerColor}
              disableTypography
            >
              <Typography className={props.classes.drawerColor}>
                TextSharing
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={props.classes.content}>
        <div className={props.classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

AppFrame.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppFrame);
