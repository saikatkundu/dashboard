import { IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import AppleIcon from '@material-ui/icons/Apple';
import React from 'react';
import GooglePlay from '../assets/icons/GooglePlay';
import '../assets/styles/SidebarMenu.scss';
import SidebarMenuItem from './SidebarMenuItem';

const SidebarMenu = () => {
    return (
        <div className="sidebarMenu">
            <h2>Workspaces</h2>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined fontSize="small" />
                    <input placeholder="Filter Boards..." />
                </div>
            </div>
            <div className="sidebarMenu_items">
                <SidebarMenuItem title="Main" />
            </div>
            <div className="sidebarMenu_footer">
                <div className="sidebarMenu_dash">Dashboards</div>
                <div className="sidebarMenu_app">
                    <div className="sidebarMenu_app_button">
                        <span >Get the mobile app</span>
                        <IconButton>
                            <GooglePlay />
                        </IconButton>
                        <IconButton>
                            <AppleIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarMenu;
