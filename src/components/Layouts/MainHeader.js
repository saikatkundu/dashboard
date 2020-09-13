import { Grid, Hidden } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PeopleIcon from '@material-ui/icons/People';
import PowerIcon from '@material-ui/icons/Power';
import RedditIcon from '@material-ui/icons/Reddit';
import StarIcon from '@material-ui/icons/Star';
import VideocamIcon from '@material-ui/icons/Videocam';
import React from 'react';

const MainHeader = () => {
    return (

        <div className="header">

            <div className="pageHeading">
                <div className="pageTitle">
                    <h2>Web Design</h2>
                    <IconButton>
                        <StarIcon fontSize="small" />
                    </IconButton>
                </div>
                <p className="pageDescription">Add board description</p>
            </div>

            <div className="headerTools">
                <Hidden mdDown implementation="css">
                    <Grid container spacing={2} justify="flex-end">
                        <Grid item xs={2} container direction="row" className="overlapIconContainer" >
                            <AccountCircleIcon className="headerUserIcon" />
                            <AccountCircleIcon className="headerUserIcon overlapIcon" />
                        </Grid>
                        <Grid item xs={1} className="hexContainer">
                            <PowerIcon className="powerIcon" fontSize="small" /> / 0
                                </Grid>
                        <Grid item xs={1} className="hexContainer">
                            <RedditIcon className="redditIcon" fontSize='small' /> / 1
                                </Grid>
                        <Grid item xs={2} className="zoomMeeting" >
                            <div className="zoomIconContainer">
                                <VideocamIcon fontSize="small" />
                            </div>
                        Start Zoom call
                                </Grid>
                        <Grid item xs={3} className="activity" >
                            <div className="activityPeople">
                                <PeopleIcon /> / 1
                                    </div>
                            <div className="activityList">
                                Activities / 0
                                    </div>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton>
                                <MoreHorizIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden lgUp implementation="css">
                    <Grid container spacing={2} justify="flex-end" item xs={3}>
                        <Grid item xs={1}>
                            <IconButton>
                                <MoreHorizIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Hidden>
            </div>
        </div>
    )
}

export default MainHeader
