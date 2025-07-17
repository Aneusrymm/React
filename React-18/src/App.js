import {useState,useEffect} from 'react';
import Profile from './components/Profile';
import Introduction from './components/Introduction'

export default function App(){
  // kiri getter kanan setter
  const[finger,setFinger]=useState(1)
  const[hand,setHand]=useState('')

  useEffect(()=>{
    if(finger>=5){
      setHand('tangan kanan 5 jari')
    }
    else{
      setHand('tangan kiri 5 jari')
    }
  },[finger])
  
  function handleClick(){
    if(finger<1){
        return alert("hei gabisa kurang dari 1") 
    }
    else{
      setFinger(finger-1)
    }
  }
  return (
    <>
    <h2>tangan : {hand}</h2>
      <h1>Saya Memiliki {finger} jari</h1>
      <button onClick={()=>setFinger((dataTerakhir)=> dataTerakhir+1)}>Tambah Jari</button>
      <button onClick={handleClick}>Kurang Jari</button>
      <Profile />
      <Introduction name="Nabil"/>
      <Introduction name="Amel"/>
    </>
  )
}