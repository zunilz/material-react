import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { drawerStateChange } from '../../action/index'

const styles = theme => ({
  root: {
    marginTop: 0,//theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class ButtonAppBar extends Component {


  renderButtonAppBar() {
    //const { classes } = props;
    return (
      <div className={this.props.classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={this.props.classes.menuButton} color="contrast" aria-label="Menu"
              onClick={() => this.props.drawerStateChange('open')}
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={this.props.classes.flex}>
              React MUI
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderButtonAppBar()}
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    drawerState: state.drawerState
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ drawerStateChange: drawerStateChange }, dispatch);
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

ButtonAppBar = withStyles(styles)(ButtonAppBar);
export default connect(mapStateToProps, matchDispatchToProps)(ButtonAppBar);
//export default connect(mapStateToProps, matchDispatchToProps)(withStyles(styles)(ButtonAppBar));
//export default connect(mapStateToProps, matchDispatchToProps)(UserList);

