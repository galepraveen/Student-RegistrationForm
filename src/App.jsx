import React, { useState, useRef } from 'react';
import user_img from './user_img.png';

const App = () => {
  const [details, setDetails] = useState([]);
  const [form, setForm] = useState({
    id: details.length == 0 ? 1 : details[details.length - 1].id + 1,
    name: '',
    email: '',
    website: '',
    gender: 'male',
    skills: 'html'
  })

  const resetForm = useRef();

  const handleChange = (name, event)=>{
    setForm({
      ...form,
      [name]: event.target.value
    })
  }

  
  const handleSubmit = (e)=>{
    e.preventDefault();

    setDetails([...details, form]);

    setForm({id: details.length == 0 ? 1 : details[details.length - 1].id + 1, name: '', email: '', website: '', gender: 'male', skills: 'html'});
  }

  return (
    <div>
      <div className="header flex flex-col place-items-center">
        <h1 className='text-[4rem] uppercase font-bold'> Sample </h1>
        <div className='w-full bg-green-400 p-2 text-center text-[1.5rem] text-white font-semibold pb-4'>
          <h4> Student Enrollement Form </h4>
        </div>
      </div>

      <div className="body bg-cyan-400 flex flex-row justify-between">

        <div className="left w-[40%] ml-[2rem] my-[5rem] ">
          <form className='flex flex-col border-4 w-full' ref={resetForm} onSubmit={handleSubmit}>

            <div className='flex my-4 justify-between'>
              <label htmlFor="name" className='pr-5 cursor-pointer'> Name </label>
              <input type="text" name="name" id="name" className='inline-block grow outline-none border-none p-1 max-w-[70%]' autoComplete='off' value={form.name} onChange={(e)=>handleChange('name', e)} required/>
            </div>

            <div className='flex my-4 justify-between'>
              <label htmlFor="email" className='pr-5 cursor-pointer'> Email </label>
              <input type="email" name="email" id="email" className='inline-block grow outline-none border-none p-1 max-w-[70%]' autoComplete='off' value={form.email} onChange={(e)=>handleChange('email', e)} required/>
            </div>

            <div className='flex my-4 justify-between'>
              <label htmlFor="website" className='pr-5  cursor-pointer'> Website </label>
              <input type="text" name="website" id="website" className='inline-block grow outline-none border-none p-1 max-w-[70%]' autoComplete='off' value={form.website} onChange={(e)=>handleChange('website', e)} required/>
            </div>

            <div className="flex my-4 justify-between ">
              <label htmlFor="gender" className='pr-5 cursor-pointer'> Gender </label>
              <select name="gender" id="gender" className='grow max-w-[70%] p-1' value={form.gender} onChange={(e)=>handleChange('gender', e)} required>
                <option value="male"> Male </option>
                <option value="female"> Female </option>
              </select>
            </div>

            <div className="flex my-4 justify-between ">
              <label htmlFor="skills" className='pr-5 cursor-pointer'> Skills </label>
              <select name="skills" id="skills" className='grow max-w-[70%] p-1' value={form.skills} onChange={(e)=>handleChange('skills', e)} required>
                <option value="java"> Java </option>
                <option value="html"> HTML </option>
                <option value="css"> CSS </option>
              </select>
            </div>

            <div className="buttons flex justify-evenly my-5">
              <button type='submit' className='bg-blue-600 p-2 text-white cursor-pointer rounded-[0.25rem] w-[8rem]'> Enroll Student </button>
              
              <button type="reset" className='bg-red-600 p-2 text-white cursor-pointer rounded-[0.25rem] w-[8rem]' 
              onClick={()=>setForm({id: details[details.length - 1].id + 1, name: '', email: '', website: '', gender: 'male', skills: 'html'})}> Clear </button>
            </div>          
          </form>         
        </div>

        <div className="right w-[40%] mr-[2rem] my-[5rem] border-5 bg-green-200 border-1 border-solid border-red-500">
        <h1 className='text-[1.75rem] mb-4 text-center'> Enrolled Students </h1>


        <div className='text-left border-red-500'>
          <div className="flex justify-between px-[3rem] bg-green-500 font-semibold text-white p-2 border-3 border-red-800 min-w-full">
            <h1> Description </h1>
            <h1> Image </h1>
          </div>
          {
            details.map(({id, name, gender, email, website, skills})=>(
              <div className='users flex justify-between px-4 mt-4 w-full mx-auto border-[3px] border-green-900 rounded-md' key={id}>
                <div className="info border-3 w-full mx-auto">
                  <p className='text-[1.4rem] font-semibold'> {name} </p>
                  <p> {gender} </p>
                  <p> {email} </p>
                  <a href='#' className='text-blue-900 underline'> {website} </a>
                  <p className='font-medium'> {skills.toUpperCase()} </p>
                </div>
                <div className="image w-[30%] grid place-items-center mx-auto ml-4  border-2 border-yellow-700 ">
                  <img src={user_img} alt="user-img" className='w-full'/>
                </div>
              </div>
            ))
          }
        </div>

        </div>
      
      </div>
     
    </div>
  )
}

export default App
