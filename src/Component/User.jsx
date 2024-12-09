import React from "react";
import { useNavigate } from "react-router-dom";
// import { Details } from "./Details";
import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';


function User(){
    const navigate = useNavigate(); 
    const [data,setData] = React.useState([])



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



            <span>Active : 
            <input type = "Radio"
            name = "Status"
            value = "Active"
            onChange={handleChange}   />
             </span>

            <span>InActive : 
            <input type = "radio"
            name = "Status"
            value = "Inactive"
            onChange={handleChange}
             
            />
            </span>
            <br/>

            <button type = "submit" value = "submit"  className="SubmitButton">Submit</button>

            </form>

       
        
       
        </>
    )
}
export { User }