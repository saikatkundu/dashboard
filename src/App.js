// import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './assets/styles/App.scss';
// import IconSidebar from './components/IconSidebar';
// import SidebarMenu from './components/SidebarMenu';
import Layouts from './components/Layouts';

function App() {
  return (
    <Layouts />
    // <Container maxWidth={false}>
    //   <Grid container direction="row">
    //     <Grid
    //       item
    //       container
    //       justify="space-between"
    //       alignItems="center"
    //       sm={1}
    //     >
    //       <IconSidebar />
    //     </Grid>
    //     <Grid
    //       item
    //       container
    //       justify="space-between"
    //       alignItems="center"
    //       sm={3}
    //     >
    //       <SidebarMenu />
    //     </Grid>
    //   </Grid>
    //   {/* <div className="appBody">
    //     <IconSidebar />
    //     <SidebarMenu />
    //     <div className="dashboard"></div>
    //   </div> */}
    // </Container>
  );
}

export default App;
