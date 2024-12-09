import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SearchFunction } from './Search';

function Details(){
    const Navigate = useNavigate();
    const [data,setData] = React.useState([])
    
    const [id,setId] = React.useState('')


    React.useEffect(()=>{
    fetch(`http://localhost:3000/userData`)
    .then((res)=>res.json())
    .then((json)=>setData(json))

},[])
const handleDelete=(id)=>{
    if(id > 0){
        if(window.confirm("Are you Delete this item?!")){
            const filterData = data.filter(item=>item.id!==id);
            setData(filterData)
        }
    }
}
// const handleEdit=(id)=>{
// const editData = data.filter(item => item.id === id);
// if(editData !== undefined){
//     Navigate("/InputUser")
//     setName(editData.name)
//     setRole(editData[0].role)
//     setStatus(editData[0].status)
//     setId(editData[0].id)
//     console.log(editData)


// }
// }
   
    return(
        <>
        {/* <h1>This is the details page</h1> */}
        <div>
        <SearchFunction search = {data}/>

        </div>

        <table className='Details'>
        <h1>UserDetails</h1>

                <tr>
                    <th>ID</th>
                    <th >USERS</th>
                    <th >ROLES</th>
                    <th >STATUS</th>
                    <th >PERMISSION</th>
                </tr>
                <tbody>
    {
    data.map((item)=>(
        <tr key = {item.id}>
            <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.role}</td>
        <td>{item.Status}</td>
        <td>
        {/* <Button variant="primary" onClick={()=>handleEdit(item.id)}>Edit</Button>&nbsp; */}
            <Button variant="danger" onClick={()=>handleDelete(item.id)}>Delete</Button>

            </td>
    </tr>
    ))
}
                    
                </tbody>
        </table>
        </>
    )
}
export { Details }