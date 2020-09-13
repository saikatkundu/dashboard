import { Button, Divider, Grid, Icon, List, ListItem, ListItemIcon, ListItemText, Modal, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DialpadIcon from '@material-ui/icons/Dialpad';
import PeopleIcon from '@material-ui/icons/People';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import TimelineIcon from '@material-ui/icons/Timeline';
import TodayIcon from '@material-ui/icons/Today';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react/lib/agGridReact';
import React, { Fragment, useRef, useState } from 'react';
import '../assets/styles/Table.scss';
import CustomHeader from './common/CustomHeader';
import DueDateContainer from './common/DueDateContainer';
import OwnerComponent from './common/OwnerComponent';
import PriorityComponent from './common/PriorityComponent';
import StatusCellEditor from './common/StatusCellEditor';
import StatusComponent from './common/StatusComponent';
import TaskTitleComponent from './common/TaskTitleComponent';

const frameworkComponents = {
    owner: OwnerComponent,
    task: TaskTitleComponent,
    status: StatusComponent,
    dueDate: DueDateContainer,
    priority: PriorityComponent,
    agColumnHeader: CustomHeader,
    statusCellEditor: StatusCellEditor
}

const Table = () => {
    const [name, setName] = useState('');
    const [dataType, setDataType] = useState('');
    const [error, setError] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [showColForm, setShowColForm] = useState(false)
    const [rowData, setRowData] = useState(tableRowData);
    const [columnDefs, setColumnDefs] = useState(tableColDef)

    const gridApi = useRef();
    const columnApi = useRef();

    const handleClose = () => {
        setOpenModal(false)
        setShowColForm(false)
        setError('')
        setName('')
        setDataType('')
    }

    const addNewColumn = () => {
        if (name === '' || dataType === '') {
            setError('Name && DataType both are required.')
        } else {
            const newCol = {
                headerName: name, field: dataType,
                colId: `newCol_${columnDefs.length}`,
                headerComponentParams: {
                    headerName: name,
                    fieldId: `newCol_${columnDefs.length}`,
                }
            }
            setColumnDefs([...columnDefs, newCol])
            handleClose()
        }
    }

    const onValueChange = (id, val) => {
        let updatedCol = columnDefs.map(col => { return { ...col } })
        updatedCol.find(col => col.headerComponentParams.fieldId === id).headerName = val;
        updatedCol.find(col => col.headerComponentParams.fieldId === id).headerComponentParams.headerName = val;
        setColumnDefs(updatedCol)
    }

    const addNewRow = () => {
        setRowData([...rowData, {}])
    }
    return (
        <Fragment>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className="addColModal"
            >
                <div className="modalBody">
                    {
                        !showColForm &&
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon className="fas fa-grip-lines" />
                                </ListItemIcon>
                                <ListItemText primary="Status" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <TextFieldsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Text" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="People" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <TimelineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Timeline" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <TodayIcon />
                                </ListItemIcon>
                                <ListItemText primary="Date" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon className="fas fa-hashtag" />
                                </ListItemIcon>
                                <ListItemText primary="Tags" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <DialpadIcon />
                                </ListItemIcon>
                                <ListItemText primary="Numbers" />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText color="#1aa3ff" primary="More Columns" onClick={() => setShowColForm(true)} />
                            </ListItem>
                        </List>
                    }
                    {
                        showColForm &&
                        <form className="modalForm" autoComplete="off">
                            <h3>Add New Column</h3>
                            <TextField id="name" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                            <TextField id="dataType" label="Data Type" variant="outlined" value={dataType} onChange={(e) => setDataType(e.target.value)} />
                            {
                                error && error !== '' &&
                                <span className="error">{error}</span>
                            }
                            <Button variant="contained" color="primary" onClick={addNewColumn}>Add Column</Button>
                        </form>
                    }
                </div>

            </Modal>

            <div className="bodyContainer">
                <div className="ag-theme-alpine todoTable">
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={rowData}
                        rowDragManaged={true}
                        animateRows={true}
                        defaultColDef={{
                            editable: true,
                            resizable: true,
                            headerComponentParams: {
                                columnDefs: columnDefs,
                                onValueChange: (id, val) => {
                                    onValueChange(id, val)
                                },
                                onIconClick: () => { setOpenModal(true) }
                            }
                        }}
                        frameworkComponents={frameworkComponents}
                        onGridReady={params => {
                            console.log("AgGridWithUseRef Grid Ready", params);
                            gridApi.current = params.api;
                            columnApi.current = params.columnApi;
                        }}
                    />
                    <Grid container direction="row" alignItems="center" onClick={addNewRow} className="addMore">
                        <AddIcon />
                        <span>Add Row</span>
                    </Grid>
                </div>
            </div>
        </Fragment>
    )

}

const statuses = [
    { value: "Working on it", ignoreBorderRight: true },
    { value: "Critical", ignoreBorderRight: true, backColor: "#7300e6" },
    { value: "Stuck", ignoreBorderRight: true },
    { value: "Done", ignoreBorderRight: true },
    { value: " ", ignoreBorderRight: true, backColor: "#dddddd" },
    { value: " ", ignoreBorderRight: true }
]
const tableRowData = [
    { todo: "New Item", owner: "Celica", status: "Working on it", dueDate: "Apr 9", priority: "Urgent" },
    { todo: "New Item", owner: "Celica", status: "Stuck", dueDate: "Apr 10", priority: "High" },
    { todo: "New Item", owner: "Celica", status: "Waiting for review", dueDate: "Apr 11", priority: "Medium" },
    { todo: "New Item", owner: "Celica", status: "Done", dueDate: "Apr 12", priority: "Low" },
    { todo: "New Item", owner: "Celica", status: "Stuck", dueDate: "Apr 13", priority: "" },
    { todo: "New Item", owner: "Celica", status: "Done", dueDate: "Apr 14", priority: "" },

]
const tableColDef = [
    {
        headerName: "Thinks To Do", field: 'todo', rowDrag: true, cellRenderer: 'task',
        cellRendererParams: {
            iconType: 'r',
            field: 'todo'
        },
        headerComponentParams: {
            headerName: "Thinks To Do", headerIcon: 'caret-down', iconType: 's',
            containerStyle: { justifyContent: 'flex-start' },
            textContainerStyle: { color: "#1aa3ff" },
            iconContainerStyle: {
                backgroundColor: "#1aa3ff", height: 18, width: 18,
                borderRadius: 9, marginRight: 10, padding: 2, justifyContent: 'center',
                alignItems: 'center'
            },
            iconStyle: { color: "#fff", fontSize: 15, paddingLeft: 2 },
            fieldId: 'todo',
        },
        colId: 'todo',
        width: 385,

    },
    {
        headerName: "Owner", field: 'owner', width: 100, cellRenderer: 'owner',
        headerComponentParams: {
            headerName: "Owner",
            fieldId: 'owner',
        },
    },
    {
        headerName: "Status", field: 'status', width: 160, cellRenderer: 'status', colId: 'status',
        headerComponentParams: {
            headerName: "Status",
            fieldId: 'status',
        },
        cellEditor: 'statusCellEditor',
        cellEditorParams: {
            values: statuses
        }
    },
    {
        headerName: "Due Date", field: 'dueDate', width: 160, cellRenderer: 'dueDate', colId: 'dueDate',
        headerComponentParams: {
            headerName: "Due Date",
            fieldId: 'dueDate',
        }
    },
    {
        headerName: "Priority", field: 'priority', width: 160, cellRenderer: 'priority', colId: 'priority',
        headerComponentParams: {
            headerName: "Priority",
            fieldId: 'priority',
        }
    },
    {
        headerComponentParams: {
            headerIcon: 'plus-circle', iconType: 's',

        }, field: '', width: 50
    },
]

export default Table
