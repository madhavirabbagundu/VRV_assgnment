import React from "react";
// import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect } from "react";


function SearchFunction(data1){
    console.log(data1.search,typeof(data1),"search")
    const [data,setData] = React.useState([])
    const [filterData,setFilterData] = React.useState([])

    const handleFilter=(value)=>{
        const filter = filterData.filter(e => e.name.toLowerCase().includes(value))
        setData(filter);
    }

    React.useEffect(() => {
    fetch(`http://localhost:3000/userData`)
    .then((res)=>res.json())
    .then((data)=>{
        // setData(data)
        setFilterData(data)
        console.log(data)
    })
    },[])

   

  

    return(
        <>
       <form>
        <InputGroup className='my-2' onChange={e => handleFilter(e.target.value)}>
        <Form.Control placeholder = 'Search name'/>
        </InputGroup>
           </form>
           <table striped bordered hover>
           <h1>SearchDetails</h1>

                <tr>
                    <th>ID</th>
                    <th >USERS</th>
                    <th >ROLES</th>
                    <th >STATUS</th>
                </tr>
                <tbody>
    
     {data.map((item)=>(
        <tr key = {item.id}>
            <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.role}</td>
        <td>{item.Status}</td>
       
    </tr>
    ))
}
                    
                </tbody>
        </table>
           
        </>
    )
}
export {SearchFunction }