import React, { useState } from 'react'

function DemoForm() {
    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
    const submit=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(pass);
        
    }
  return (
    <>
        <form>
            <input type='text' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type='password' placeholder='enter your password' value={pass} onChange={(e)=>setPass(e.target.value)} />
            <button type='submit' onClick={submit} >submit</button>
        </form>
    </>
  )
}

export default DemoForm