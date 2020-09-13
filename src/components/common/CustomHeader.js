import { Icon } from '@material-ui/core';
import React, { createRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../assets/styles/Table.scss';

const CustomHeader = ({ headerName, fieldId, containerStyle, headerIcon, textContainerStyle, onIconClick,
    iconContainerStyle, iconType, iconStyle, onValueChange, columnDefs }) => {
    const [headerTextValue, setHeaderTextValue] = useState(headerName)
    const [editing, setEditing] = useState(false)
    const headerEditor = createRef()
    const onTextClick = (e) => {
        setEditing(true)
    }
    const onTextBoxBlur = e => {
        setEditing(false)
        onValueChange(e.target.id, e.target.value)
    }

    useEffect(() => {
        const listenKeyPress = (e) => {
            if (e.key === 'Enter' && document.activeElement === ReactDOM.findDOMNode(headerEditor.current)) {
                headerEditor.current.blur();
            }
        }
        window.addEventListener('keydown', listenKeyPress);
        return () => {
            window.removeEventListener('keydown', listenKeyPress);
        }
    }, [headerEditor]);

    return (
        <div className="headerCompContainer" style={containerStyle}>
            {
                headerIcon &&
                <div className="headerIcon" style={iconContainerStyle} onClick={onIconClick}>
                    <Icon className={`fa${iconType || ''} fa-${headerIcon || ''}`} style={iconStyle} />
                </div>

            }
            {
                headerName &&
                <div onClick={onTextClick} className="headerText" style={textContainerStyle} >
                    {!editing ?
                        <span className="title">{headerName}</span>
                        : <input id={fieldId} autoFocus={true} ref={headerEditor} type="text"
                            onBlur={onTextBoxBlur}
                            value={headerTextValue}
                            onChange={e => setHeaderTextValue(e.target.value)}
                        />
                    }
                </div>
            }
        </div>
    )
}

export default CustomHeader
