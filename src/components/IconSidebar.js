import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppleIcon from '@material-ui/icons/Apple';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GetAppIcon from '@material-ui/icons/GetApp';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import '../assets/styles/IconSidebar.scss';
import SidebarIcons from './common/SidebarIcons';
const IconSidebar = () => {
    return (
        <div className="iconSidebar">
            <SidebarIcons iconComponents={[
                { component: <AppleIcon /> },
                { component: <NotificationsNoneIcon /> },
                { component: <GetAppIcon />, withBadge: true, badgeContent: 1 }
            ]} />
            <div className="iconSidebar_upgradeLabelContainer">
                <div className="iconSidebar_upgradeLabel">
                    Upgrade
                </div>
            </div>
            <SidebarIcons iconComponents={[
                { component: <EventAvailableIcon /> },
                { component: <PersonAddIcon /> },
                { component: <SearchIcon /> },
                { component: <HelpOutlineIcon /> },
                { component: <AccountCircleIcon />, withBadge: true, badgeColor: 'secondary', badgeVar: 'dot', badgeOverlap: 'circle' }
            ]} />
        </div>
    )
}

export default IconSidebar;
