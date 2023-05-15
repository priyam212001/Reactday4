import React from 'react';
import ReactTable from 'react-table';


function ReactTable1(){
    const data=[
        {
            name:'Priyam',
            age:20
        },
        {
            name:'Khushi',
            age:18
        },
        {
            name:'Gautam',
            age:20
        },
        {
            name:'Rashmi',
            age:40
        },
        {
            name:'Akhilesh',
            age:42
        }
    ]
    const columns=[
        {
            Header:'Name',
            accessor:'name'
        },
        {
            Header:'Age',
            accessor:'age'
        }
    ]
    return(
          <div>
            <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={2}
            pageSizeOptions={[2,4,6]}
            />
          </div>
    );
}
export default ReactTable1;