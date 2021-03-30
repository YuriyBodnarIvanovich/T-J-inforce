import React, {useState} from "react";
import Style from './EditWindow.module.css';

const EditWindow = (props) =>{

    const [name,setName] = useState(props.data.name);
    const [photo,setPhoto] = useState(props.data.imageUrl);
    const [amount,setAmount] = useState(props.data.count);
    const [color,setColor] = useState(props.data.color);
    const [width,setWidth] = useState(props.data.size.width);
    const [height,setHeight] = useState(props.data.size.height);
    const [weight,setWeight] = useState(props.data.weight);

    const [lastCatalog, setLastCatalog] = useState([]);

    function cancelChange(){
        setName(lastCatalog[props.index].name)
        setPhoto(lastCatalog[props.index].imageUrl)
        setAmount(lastCatalog[props.index].count)
        setColor(lastCatalog[props.index].color)
        setWidth(lastCatalog[props.index].size.width)
        setHeight(lastCatalog[props.index].size.height)
        setWeight(lastCatalog[props.index].weight)
        props.setCatalog(lastCatalog);

    }

    function editItem(){
        setLastCatalog(JSON.parse(JSON.stringify(props.catalog)));
        const catalog = JSON.parse(JSON.stringify(props.catalog));

        catalog[props.index].id = props.index;
        catalog[props.index].imageUrl = photo;
        catalog[props.index].name = name;
        catalog[props.index].count = amount;
        catalog[props.index].size.width = width;
        catalog[props.index].size.height = height;
        catalog[props.index].weight = weight;
        catalog[props.index].color = color;
        props.setCatalog(catalog);
    }

    return(
        <div className={Style.input_container}>
            <input placeholder={"Name"} value={name}
                   onChange={(event => setName(event.target.value))}/>
            <input placeholder={"Photo (url)"} value={photo}
                   onChange={(event => setPhoto(event.target.value))}/>
            <input placeholder={"Amount"} value={amount}
                   onChange={(event => setAmount(event.target.value))}/>
            <input placeholder={"Color (#ffffff or red)"} value={color}
                   onChange={(event => setColor(event.target.value))}/>
            <input placeholder={"Width"} value={width}
                   onChange={(event => setWidth(event.target.value))}/>
            <input placeholder={"Height"} value={height}
                   onChange={(event => setHeight(event.target.value))}/>
            <input placeholder={"Weight"} value={weight}
                   onChange={(event => setWeight(event.target.value))}/>
            <div className={Style.for_button}>
                <button onClick={()=>editItem()}>Edit Item</button>
                <button onClick={()=>cancelChange()}>Cancel</button>
            </div>
        </div>
    )
}

export default EditWindow;
