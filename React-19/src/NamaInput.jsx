import {useState} from "react"

export default function NamaInput(){
    const[nama,setNama]=useState("")
    const HandleReset = () =>{
        setNama("")
    }
    return(
        <>
            <input type="text" placeholder="Masukan Namamu" value={nama} onChange={(e)=>setNama(e.target.value)} />
            <p>Hallo {nama}</p>
            <button onClick={HandleReset}>Reset</button>
        </>
     )
}
