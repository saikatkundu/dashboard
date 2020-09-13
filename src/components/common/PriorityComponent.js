import React from 'react';

const PriorityComponent = ({ value }) => {
    const priority = value ? value.toLowerCase() : '';
    const priorityBg = priority === "urgent" ? "#000000" :
        (priority === "high" ? "#b30000" :
            (priority === "medium" ? "#7300e6" :
                (priority === "low" ? "#0066ff" : "#aaa")))
    return (
        <div className="priorityContainer" style={{ backgroundColor: priorityBg }}>
            {value}
        </div>
    )
}

export default PriorityComponent
