import { Avatar, Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react';

const OwnerComponent = ({ ownerImgUrl, imgAlt }) => {
    return (
        <Grid container justify="center" alignItems="center" className="ownerContainer">
            {
                ownerImgUrl ?
                    <Avatar alt={imgAlt || "Owner Image"} src={ownerImgUrl} />
                    : <AccountCircleIcon />
            }
        </Grid>
    )
}

export default OwnerComponent
