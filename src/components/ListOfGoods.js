import React from "react";
import Style from './ListOfGoods.module.css';
import ItemOfProduct from './ItemOfProduct/ItemOfProduct'

const ListOfGoods = (props) =>{

    const listOfItem = props.catalog.map((item,index)=>{
        return(
            <ItemOfProduct
                imageUrl={item.imageUrl}  name={item.name} count={item.count} size={item.size} weight={item.weight}
                dataItem={item} setCatalog={props.setCatalog} catalog={props.catalog} index={index}
                setStatusDelete={props.setStatusDelete} deleteStatus={props.deleteStatus}/>
        )
    });


    return(
        <div className={Style.catalog_container}>
            <div className={Style.catalog}>
                {listOfItem}
            </div>
        </div>
    )
}

export default ListOfGoods;
