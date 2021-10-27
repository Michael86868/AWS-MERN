import React,{useState} from 'react'

const AddMaterial = () => {
    const [input,setinput] = useState("");
    const insertDB = () => {
        fetch("http://localhost:5000/set-material",{
        method:"post",
        headers:{
            "Accept":"application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify({name:input})
    }).then((data) => {
        return data.json();
    }).then((finalData) => {
        console.log(finalData.msg);
        setinput("");
    })
    }

    return (
        <div>
            <input type="text" value={input} onInput={(e) => {
                setinput(e.target.value);
            }} />
            <div className="btn" onClick={insertDB}>Vložit materiál</div>
        </div>
    )
}

export default AddMaterial
