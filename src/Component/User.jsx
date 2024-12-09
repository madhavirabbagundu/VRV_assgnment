import React from "react";
import { useNavigate } from "react-router-dom";
// import { Details } from "./Details";
import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';


function User(){
    const navigate = useNavigate(); 
    const [data,setData] = React.useState([])

const [Active,setActive] = React.useState()
const [Inactive,setInactive] = React.useState('')
const [id,setId] = React.useState('')
const [status,setStatus] = React.useState()
const [editingData,setEditingData] = React.useState([]);
const [update,setUpdate] = React.useState(false);

const [dataStore,setDataStore] = React.useState({
    name:"",
    role:"",
    // status:""
   
})
// const [data,setData] = React.useState([]);

const handleChange = (e)=>{
    const {name,value} = e.target;
    setDataStore({...dataStore,[name]:value})
}




const handleSubmit =(e)=>{
e.preventDefault()
console.log(data)
fetch(`http://localhost:3000/userData`,{
    method:"POST",
    body:JSON.stringify(dataStore),
    headers:{
        "Content-type":"application/json"
    }

})
.then((res)=>res.json())
.then((json)=>console.log(json))
alert("Data is post")
navigate("/Details")
}



React.useEffect(()=>{
fetch(`http://localhost:3000/userData`)
.then((res)=>res.json())
.then((json)=>setData(json))

},[])
// const handleDelete=(id)=>{
// if(id > 0){
//     if(window.confirm("Are you Delete this item?!")){
//         const filterData = data.filter(item=>item.id!==id);
//         setData(filterData)

//     }
// }
// }
// var {name,role} = data

// const handleEdit=(id)=>{
// const editData = data.filter(item => item.id === id);
// const {name,role,status} = editData

// if(editData !== undefined){
// // Navigate("/InputUser")
// setId(id)
// setEditingData(editData[0])
// setUpdate(true);
// setData(editData[0])
// }
// }


const {name,role} = dataStore;

    return(
        <>
         {/* <div> */}
            <form onSubmit = {handleSubmit}  className="container" >
            <span>Enter the user : 
            <input type ="text"
             className="inputData"
            placeholder="Enter your name"
            onChange={handleChange}
            name = "name"
            value = {name}

            />
            </span><br/>

            <span>Enter the Role :
            <input type = "text" 
            className="inputData"
            placeholder="Enter your role"
            onChange={handleChange}
            name = "role"
            value = {role}
            />
             </span><br/>
{/* 
           { editingData.status === "Active" ? 

             <span>Active 
            <input type = "Radio"
            name = "Status"
            value = {Active}
            onChange={handleChange}
            checked
            />
            </span> 
            : */}


            <span>Active : 
            <input type = "Radio"
            name = "Status"
            value = "Active"
            onChange={handleChange}   />
             </span>
{/* } */}

{/* { editingData.status === "Inactive" ? 
            <span>InActive : 
            <input type = "radio"
            name = "Status"
            value = {Inactive}
            onChange={handleChange}
             checked
            />
            </span>
            

            : */}
            <span>InActive : 
            <input type = "radio"
            name = "Status"
            value = "Inactive"
            onChange={handleChange}
             
            />
            </span>
            <br/>

{/* } */}
            <button type = "submit" value = "submit"  className="SubmitButton">Submit</button>
            {/* <button type = "submit" value = "update" onClick={()=>handleSave()}  className="SubmitButton">Update</button> */}

            </form>
         {/* </div> */}

       
        
       
        </>
    )
}
export { User }