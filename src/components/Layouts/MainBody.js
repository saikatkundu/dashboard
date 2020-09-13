import React from 'react';
import '../../assets/styles/MainBody.scss';
import BodyHeader from '../BodyHeader';
import Table from '../Table';

const MainBody = () => {
    return (
        <div className="mainBody">
            <BodyHeader />
            <Table />
        </div>
    )
}

export default MainBody
