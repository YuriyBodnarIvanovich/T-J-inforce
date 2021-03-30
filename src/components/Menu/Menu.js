import React, {useState} from "react";
import Style from './Menu.module.css';
import AddItem from './AddItem/AddItem';
const Menu = (props) =>{

    const [addNewProduct, setStatusOfNewProduct] = useState(false);

    function sortByName(){
        const catalog = JSON.parse(JSON.stringify(props.catalog));
        props.setCatalog(catalog.sort((a, b) => a.name > b.name ? 1 : -1))
    }

    function sortByAmount(){
        const catalog = JSON.parse(JSON.stringify(props.catalog));
        props.setCatalog(catalog.sort((a, b) => a.count > b.count ? 1 : -1))
    }

    return(
        <div className={Style.container}>
            <button onClick={()=>sortByName()}>Sort by Name</button>
            <button onClick={()=>{sortByAmount()}}>Sort by Amount</button>
            <button onClick={()=>{setStatusOfNewProduct(true)}}>Add new product</button>
            <button onClick={()=>{props.setStatusDelete(!props.deleteStatus)}}>Delete Item</button>
            {addNewProduct ?
                <AddItem setStatusOfNewProduct={setStatusOfNewProduct}
                         catalog={props.catalog} setCatalog={props.setCatalog}/> : null}
        </div>
    )
}

export default Menu;
