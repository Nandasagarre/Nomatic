import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function Alltasks(){
    const navigate = useNavigate();
    const [taskArray, setTaskArray] = useState([]);
    const [isEdit, setEdit] = useState(false);
   
    //const [temp, settemp] = useState(false);
    useEffect(() => {
       
        axios.get('http://localhost:4000/alltasks')
            .then(result => {
                setTaskArray(result.data.tasks);
                //console.log(result.data.tasks);
            }).then(()=>{
                console.log(taskArray);
            }).catch(err =>{
                console.log(err);
            })
    }, []);

    //deleting task
    const handleDelete = function(event){
         
        const data = {
            "id": event.target.getAttribute('data-para-id')
        }
        console.log('data',data);
        axios.post('http://localhost:4000/delete', data).then((res)=>{
            //settemp(true);
            if(res){
                alert('Task deleted');
            }
        }).then(()=>{
            axios.get('http://localhost:4000/alltasks')
            .then(result => {
                setTaskArray(result.data.tasks);
                //console.log(result.data.tasks);
            })
        }).catch((err)=>{
            alert('Please try after sometime..')
        })
    }
  
    const handleUpdate = (e)=>{
        setEdit((edit)=>{
            return !edit;
        });
        const stuff = {
            "id": e.target.getAttribute('data-id'),
            "title": e.target.getAttribute('data-title'),
            "desc": e.target.getAttribute('data-desc')
        }
        console.group(stuff)
        navigate("/edit",  { state: { stuff } } );

    }


   


   return(
    <div>
        <a className='btn btn-light' href='/create'>Create Task</a>
   { taskArray.map((p, idx) => (
            <div key={idx} id={p.id} className='card-color rounded'>
                <div className='post-stub' >
                    <div>{p.title}</div>
                    <div className="text-area" > <p  className="desc">{p.desc}</p> </div>
                </div>
                <button  className='btn btn-light ping m-1' data-para-id={`${p._id}`} onClick={(e) => handleDelete(e)}>Delete</button>
                <button  className='btn btn-light ping m-1' data-id={`${p._id}`} data-title={`${p.title}`} data-desc={`${p.desc}`} onClick={(e) => handleUpdate(e)}>Edit</button>
                
            </div>
   ))
   }
    </div>
   )

}


export default Alltasks;