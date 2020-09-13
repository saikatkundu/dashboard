import React, { forwardRef, useImperativeHandle, useState } from 'react';

const StatusComponent = forwardRef((props, ref) => {
    const { value, ignoreBorderRight, backColor, onClick } = props
    const [currentStatus, setCurrentStatus] = useState(value);
    const status = currentStatus ? currentStatus.toLowerCase() : '';
    const bgCol = backColor ? backColor : (status === "working on it" ?
        "#ff8c1a" : (status === "stuck" ? "#b30000" :
            (status === "done" ? "#39ac39" : "#0066ff")));

    useImperativeHandle(ref, () => {
        return {
            refresh(params) {
                setCurrentStatus(params.value);
            }
        }
    });
    return (
        <div className="statusContainer" style={{ backgroundColor: bgCol }} onClick={onClick}>
            <div className="status">{currentStatus}</div>
            {!ignoreBorderRight &&
                <div className="statusRightBorder"></div>
            }
        </div>
    )
})

export default StatusComponent
