import { Icon } from '@material-ui/core';
import React from 'react';

const TaskTitleComponent = ({ value, taskIcon, iconType }) => {

    return (
        <div className="titleContainer">
            <div className="title">{value}</div>
            <div className="icon">
                <Icon className={`fa${iconType || ''} fa-${taskIcon || 'comment'}`} />
            </div>
        </div>
    )
}

export default TaskTitleComponent
