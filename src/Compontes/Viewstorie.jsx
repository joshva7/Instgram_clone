import React, { useEffect, useState } from 'react'
import { Link, useParams ,useNavigate } from 'react-router-dom'
const viewstorie = () => {
  const {id,total}=useParams();
  const [data,setdata]=useState(null);
  const navegate=useNavigate();
  useEffect(()=>{
      const controler=new AbortController()
      const signal=controler.signal;
    fetch(`http://localhost:3000/story/${id}`,{signal})
    .then((res)=>{
      if(!res.ok){throw Error(console.log("The api is not fetch"))}
      return res.json()
  })
    .then((predata)=>setdata(predata))
    .catch((e)=>(
      console.log(e.massage)
    ))
    //cleanup function
  return ()=>{
      controler.abort();
  }
  },[id])
  const storyid=Number(id)
  const storytotal=Number(total)
  if(storyid > storytotal || storyid<=0){
   navegate('/')
   }
  return (
    <div>
      {data?
      (<div>
      <div className='d-flex justify-content-center align-items-center vstory_box'>  
      <div className='vstory_pic'>
        <img className='rounded-circle vstory-pic' src={data.profile_picture} alt='profile' />
        <h5>{data.username}</h5>
      </div>
     <Link to={`http://localhost:5173/story/${Number(id)-1}/${total}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
      <img className='vh-100 vstory-imges' src={data.image} alt='storie' />
     <Link to={`http://localhost:5173/story/${Number(id)+1}/${total}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
    </div>
    </div>)
    :(<div>Loading...</div>)}</div>

  )
}

export default viewstorie