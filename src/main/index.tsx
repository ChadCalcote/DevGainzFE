import React from 'react';
import Table from '../components/Table';
import columns from '../components/Table/const/columns';

function Main() {
    return (
        <>
            <h2>Dev Gainz</h2>
            <Table columns={columns}/>
        </>
    )
}

export default Main;
