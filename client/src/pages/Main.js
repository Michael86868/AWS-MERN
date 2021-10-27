import React,{useState, useEffect} from 'react'
import Material from './Material';


const Main = () => {
    const [materials, setmaterials] = useState([]);
    const [serverMessage, setserverMessage] = useState("");
    const [clickedByUser, setclickedByUser] = useState("");

    useEffect(() => {
        AddMaterial();
    }, [])

    const AddMaterial = async () => {
        setserverMessage("Načítám data...");
        const data = await fetch("http://localhost:5000/get-materials");
        const finalData = await data.json();
        const {msg, document} = finalData;
        setmaterials(document);
        setserverMessage(msg);
    }

    const clicked = (material) => {
        setclickedByUser(material);
    }

    return (
        <div>
            {
                materials.map((material,index) => {
                    return(
                        <Material eventclick={clicked} key={index} name={material.name} />
                    )
                })
            }
            <div className="msg">{serverMessage}</div>
            {clickedByUser}
        </div>
    )
}

export default Main
