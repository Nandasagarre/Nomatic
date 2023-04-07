import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Forms(){
    const [formdata, setFormData] = useState({
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
        axios.post('http://localhost:4000/create', formdata)
        .then(result =>{
            console.log(result.data);
            alert('Task created!!');
        }).catch(err =>{
            console.log(err);
            alert('something went wrong, check if DB is running...')
        })
        const form = document.forms['create'];
        form.reset();
    }               
                           
    return(
        <>
        <div className='d-flex justify-content-center mt-3'>
        <div className='card card-color'>
            <form className='m-1' id='create' onSubmit={(e) => { handleSubmit(e) }}>
               
                <div className="mb-3 p-2">
                    <label htmlFor="Email" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' onChange={(e) => handleChange(e)} />
                </div>

                <div className="mb-3 p-2">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <input type="text" className="form-control" id="desc" name='desc' required onChange={(e) => handleChange(e)} />
                </div>
                <div className='text-center'><button type='submit' className='btn btn-color'>Create Task</button></div>

            </form>
        </div>
        
    </div>
    <a className='btn btn-light' href='/alltasks'>Go Back To All Tasks</a>
    </>
    )
}

export default Forms