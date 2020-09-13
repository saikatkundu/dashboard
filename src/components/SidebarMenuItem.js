import { Collapse, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';

const SidebarMenuItem = ({ expandedItem, onChange, itemId, title }) => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItem button onClick={handleClick}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item container xs={1} justify="flex-start">
                            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </Grid>
                        <Grid item container xs={2} justify="center">
                            <div className="homeIcon">
                                <HomeIcon fontSize="small" />
                            </div>
                        </Grid>
                        <Grid item container xs={6} justify="flex-start">
                            <Typography>{title}</Typography>
                        </Grid>
                        <Grid item container xs={2}>
                            <div className="addIcon">
                                <ControlPointIcon />
                            </div>
                        </Grid>
                    </Grid>

                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem  >
                            <ListItemText primary="Web Design" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}

export default SidebarMenuItem
