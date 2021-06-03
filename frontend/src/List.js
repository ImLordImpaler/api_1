import React, {useEffect , useState} from 'react'
import axios from 'axios'
import {Container , ListGroup, ListGroupItem, Badge} from 'reactstrap'
import { Button } from 'reactstrap';
function List() {
    const [data1 , setData] = useState([]);
    const [deleted , setDelete] = useState([])
    const [task , setTask] = useState()
    useEffect(()=>{
        fetchEverything();
    },[]);
    
    function fetchEverything(){
        axios.get('http://127.0.0.1:8000/api/todos')
        .then(res=>{
            setData(res.data)
    })
}

    const handleDelete= (id)=>{
        axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`, 
        {
            headers:{
                "Content-type":'application/json'
            }
        })
        .then(res => {setDelete(res.data)
                fetchEverything()
        })
        .catch((e)=>{
            console.error(e)
        })

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const currentTask = {task: task}
        axios.post('http://127.0.0.1:8000/api/todos/',{
            name: task
        })
        .then(res=> console.log(res.data))
        .catch((error)=>{
            console.log(error)
        })
        fetchEverything()
        
        
    }
    return (
        <>
            <div className="container mt-5">
                <h3>Welcome Rachit</h3>
            </div>
            <hr/>
            <div className='container'>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6 border">
                        <h1>Tasks</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    
                    <div className="col-sm-6 border">
                    <ListGroup>
                        {data1.map((task)=>{
                               return(
                                <ListGroupItem key={task.id} className="d-flex justify-content-between">{task.name} <Button color='danger' onClick={()=>handleDelete(task.id)}>Delete</Button></ListGroupItem>
                               ) 
                        })}
                    </ListGroup>
                    </div>
                    
                </div>
                <div className="row d-flex justify-content-center">
                    
                    <div className=" col-8 border-top">
                        <form className="" onSubmit={e=>{handleSubmit(e)}} >
                            <input type='text' className="form-control" onChange={e =>{setTask(e.target.value)}} />
                            <button type='submit' className="btn btn-sm btn-primary mt-3" value="submit" >Submit</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default List;