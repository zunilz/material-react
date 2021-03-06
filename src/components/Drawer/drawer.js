
/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { drawerStateChange } from '../../action/index'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from '../../data/tileData';

const styles = {
    list: {
        width: 250,
    },
    listFull: {
        width: 'auto',
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
        let drawerState = (open == true) ? 'open' : 'close';
        this.props.drawerStateChange(drawerState);
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );

        const fullList = (
            <div className={classes.listFull}>
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );

        return (
            <div>
                <Drawer open={this.props.drawerState} onRequestClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <Drawer anchor="top" open={this.state.top} onRequestClose={this.toggleDrawer('top', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('top', false)}
                        onKeyDown={this.toggleDrawer('top', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
                <Drawer
                    anchor="bottom"
                    open={this.state.bottom}
                    onRequestClose={this.toggleDrawer('bottom', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('bottom', false)}
                        onKeyDown={this.toggleDrawer('bottom', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
                <Drawer
                    anchor="right"
                    open={this.state.right}
                    onRequestClose={this.toggleDrawer('right', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

function componentWilReceiveProps(nextProps){
    //this.toggleDrawer('left', this.props.drawerState);
}

function mapStateToProps(state) {
    let dState =  state.drawerState == 'open' ? true : false;
    return {
        drawerState: dState
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ drawerStateChange: drawerStateChange }, dispatch);
}



TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

TemporaryDrawer = withStyles(styles)(TemporaryDrawer);
export default connect(mapStateToProps, matchDispatchToProps)(TemporaryDrawer);