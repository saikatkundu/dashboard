import React from 'react'

const DueDateContainer = ({ value }) => {
    return (
        <div className="dueDateContainer">
            <div className="progress"></div>
            <div className="dueDate">{value}</div>
        </div>
    )
}

export default DueDateContainer
