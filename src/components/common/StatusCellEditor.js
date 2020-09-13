import { Button, Divider, Grid, Paper } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import StatusComponent from './StatusComponent';
const StatusCellEditor = forwardRef((props, ref) => {
    const [currentStatus, setCurrentStatus] = useState(props.value);
    const statuses = props.values
    const refContainer = useRef(null);


    const statusClickHandle = (e) => {
        setCurrentStatus(e.target.innerText)
        console.log(e, 'ev', e.target, e.target.innerText);
        props.api.stopEditing();
    }

    const focus = () => {
        window.setTimeout(() => {
            let container = ReactDOM.findDOMNode(refContainer.current);
            if (container) {
                container.focus();
            }
        })
    };

    useEffect(() => {
        focus();
    }, []);

    useImperativeHandle(ref, () => {
        return {
            getValue: () => {
                return currentStatus;
            }
        };
    });

    return (
        <Paper elevation={4} className="cellEditorContainer" ref={refContainer}>
            <Grid container spacing={1} direction="row" justify="space-around">
                {
                    statuses && statuses.map((status, i) => {
                        const { value, backColor, ignoreBorderRight } = status
                        return <Grid container item xs={6} justify="center" key={i}>
                            <StatusComponent onClick={statusClickHandle} ignoreBorderRight={ignoreBorderRight} value={value} backColor={backColor} />
                        </Grid>
                    })
                }
                <Divider />
                <Grid container item xs={12} justify="center" alignItems="center">
                    <Button
                        startIcon={<EditIcon />}
                        className="labelEditButton"
                    >
                        Add/Edit Labels
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
})

export default StatusCellEditor;

