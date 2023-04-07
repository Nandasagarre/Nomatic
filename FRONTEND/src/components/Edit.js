import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function Edit(){
    const stuff = window.history.state.usr.stuff
    const [editdata, setEditData] = useState({
        id : stuff.id,
        title: stuff.title,
        desc: stuff.desc
    });
     
    
    const [formdata, setFormData] = useState({
        id: stuff.id,
        title: '',
        desc: ''
    });
    const handleChange = function (event) {
        setFormData((p) => {
            return {
                ...p,
                [event.target.name]: event.target.value
            }
        })
        console.log(formdata);
    }
    
    const handleSubmit = function(event){
        event.preventDefault();
        //console.log(formdata);
        axios.post('http://localhost:4000/update', formdata)
        .then(result =>{
            console.log(result.data);
            alert('Task created!!');
        }).catch(err =>{
            console.log(err);
            alert('something went wrong, check if DB is running...')
        });
        
        setEditData(()=>{
            return {id: '',
            title: '',
            desc: ''}
        })
        const form = document.forms['edit'];
        form.reset();
    }               

    return(
    <>
    <div className='d-flex justify-content-center mt-3'>
    <div className='card card-color'>
        <form className='m-1' id='edit' onSubmit={(e) => { handleSubmit(e) }}>
           
            <div className="mb-3 p-2">
                <label htmlFor="Email" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name='title' onChange={(e) => handleChange(e)} defaultValue={editdata.title}/>
            </div>

            <div className="mb-3 p-2">
                <label htmlFor="desc" className="form-label">Task Description</label>
                <input type="text" className="form-control" id="desc" name='desc' required onChange={(e) => handleChange(e)} defaultValue={editdata.desc}/>
            </div>
            <div className='text-center'><button type='submit' className='btn btn-color'>Edit Task</button></div>

        </form>
    </div>
    
</div>
<a className='btn btn-light' href='/alltasks'>Go Back To All Tasks</a>
</>
    )
}

export default Edit;