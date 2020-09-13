import { Badge, IconButton } from '@material-ui/core';
import React from 'react';
import '../../assets/styles/SidebarIcons.scss';

const SidebarIcons = ({ iconComponents }) => {
    return (
        <div className="iconSidebar_icons">
            {
                iconComponents && iconComponents.length > 0 &&
                iconComponents.map((iconComp, index) => {
                    const { component, withBadge, badgeContent, badgeColor, badgeVar, badgeOverlap } = iconComp;
                    return !withBadge ? (
                        <IconButton key={index}>
                            {component}
                        </IconButton>
                    ) : (
                            <IconButton key={index}>
                                <Badge
                                    badgeContent={badgeContent || ''}
                                    color={badgeColor || 'default'}
                                    variant={badgeVar}
                                    overlap={badgeOverlap}
                                >
                                    {component}
                                </Badge>
                            </IconButton>
                        )
                })
            }
        </div>
    )
}

export default SidebarIcons
