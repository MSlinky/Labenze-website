import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import Hidden from '@material-ui/core/Hidden';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#df647c',
      main: '#a93350',
      dark: '#750028',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#a7a7a7',
      contrastText: '#000',
    },
  },
});

const styles = {
  button: {

  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const fullListMenu = (
      <div>
        <Link to="/Lineas">
          <div className="listMenu">
            Lineas
          </div>
        </Link>
        <Link to="/Catalogos">
          <div className="listMenu">
            Catálogos
          </div>
        </Link>
        <Link to="/Contacto">
          <div className="listMenu">
            Contacto
          </div>
        </Link>
      </div>
    );

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="fixed" color="secondary">
            <div className="container">
              <Toolbar>
                <Hidden smUp>
                  <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                  <div className="logoMenu">
                    <Link to="/">
                      <img src="/public/img/main/logoLabenze-min.png"/>
                    </Link>
                  </div>
                </Hidden>

                <Hidden xsDown>
                  <Typography variant="title" className={classes.flex}>
                    <div className="logoScreen">
                      <Link to="/">
                        <img src="/public/img/main/logoLabenze-min.png"/>
                      </Link>
                    </div>
                    <div className="menuScreen">
                      {fullListMenu}
                    </div>
                  </Typography>
                </Hidden>
              </Toolbar>
            </div>

            <Hidden smUp>
              <SwipeableDrawer
                open={this.state.left}
                onClose={this.toggleDrawer('left', false)}
                onOpen={this.toggleDrawer('left', true)}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                > 
                  <div className="menuMovile">
                    {fullListMenu}
                  </div>
                </div>
              </SwipeableDrawer>
            </Hidden>
            
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);