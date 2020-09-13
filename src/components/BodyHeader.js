import { Divider, Grid, Hidden, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterListIcon from '@material-ui/icons/FilterList';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import React, { Fragment } from 'react';

const BodyHeader = () => {
    return (
        <Fragment>
            <Hidden smDown implementation="css">
                <Grid container direction="row" spacing={2} className="bodyHeader">
                    <Grid item sm={3} md={4} lg={6} container alignItems="center" direction="row" className="bodyHeaderTitleContainer" >
                        <ListAltIcon className="headerUserIcon" />
                        <span className="bodyHeaderTitle">Main Table</span>
                        <ExpandMoreIcon fontSize="small" />
                    </Grid>
                    <Grid item sm={9} md={8} lg={6} container alignItems="center" justify="space-evenly" direction="row" className="bodyHeaderToolContainer" >
                        <Grid item xs={3} container className="itemButton" direction="row" justify="space-around" alignItems="center">
                            <span className="itemText">New Item</span>
                            <Divider orientation="vertical" flexItem />
                            <ExpandMoreIcon fontSize="small" />
                        </Grid>
                        <Grid item xs={3} container className="searchContainer" justify="center" alignItems="center" >
                            <input placeholder="Search/Filter Board" />
                        </Grid>
                        <Grid item xs={1} className="user">
                            <IconButton>
                                <AccountCircleIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={1} className="visibility">
                            <IconButton>
                                <VisibilityOffIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={1} className="filterList">
                            <IconButton>
                                <FilterListIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden mdUp implementation="css">
                <Grid container direction="row" spacing={2} className="bodyHeader" justify="space-between" alignItems="center">
                    <Grid item xs={9} container alignItems="center" direction="row" className="bodyHeaderTitleContainer" >
                        <ListAltIcon className="headerUserIcon" />
                        <span className="bodyHeaderTitle">Main Table</span>
                        <ExpandMoreIcon fontSize="small" />
                    </Grid>
                    <Grid container item spacing={2} justify="center" xs={3}>
                        <Grid item xs={1}>
                            <IconButton>
                                <MoreHorizIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <Divider className="headerDivider" />
        </Fragment>
    )
}

export default BodyHeader
