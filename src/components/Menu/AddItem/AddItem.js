import React, {useState} from "react";
import Style from './AddItem.module.css';

const AddItem = (props) =>{
    const [name,setName] = useState('');
    const [photo,setPhoto] = useState('');
    const [amount,setAmount] = useState('');
    const [color,setColor] = useState('');
    const [width,setWidth] = useState('');
    const [height,setHeight] = useState('');
    const [weight,setWeight] = useState('');

    function addItem(){
        const catalog = JSON.parse(JSON.stringify(props.catalog));

        catalog.push(
            {
                id: props.catalog.length,
                imageUrl: photo,
                name: name,
                count: amount,
                size: {
                    width: width,
                    height: height
                },
                weight: weight,
                color:color,
                comments: []
            }
        );

        props.setCatalog(catalog);
        props.setStatusOfNewProduct(false)
    }

    return(
        <div className={Style.container_of_window}>
            <div className={Style.container}>
                <div className={Style.exit}>
                    <b onClick={()=>{props.setStatusOfNewProduct(false)}}>×</b>
                </div>
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
                           <button onClick={()=>addItem()}>Add Item</button>
                </div>
            </div>
        </div>
    )
}

export default AddItem;
