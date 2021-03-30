import React, {useState} from "react";
import Style from './ModalItem.module.css';
import ModalWindow from "./ModalWindow/ModalWindow";

const ItemOfProduct = (props) =>{
    const [openModal, setStatus] = useState(false);
    const [deleteBox, setStatusOfDeleteBox] = useState(false);

    function deleteItem(){
        let catalog = JSON.parse(JSON.stringify(props.catalog));
        catalog = catalog.filter((el)=> el.name !== props.name || el.count !== props.count).map((el)=>{
            return el
        });
        props.setCatalog(catalog);
        setStatusOfDeleteBox(false);

    }
    return(
       <div className={Style.container}>
           {props.deleteStatus ?  <div className={Style.delete_item_container}>
               <img src="https://img.icons8.com/fluent/48/000000/delete-sign.png"
                    onClick={()=>{setStatusOfDeleteBox(true)}}/>
           </div>
           : null}
           {deleteBox ?
               <div className={Style.container_of_delete}>
                   <div className={Style.delete}>
                       <h2>Delete this product?</h2>
                       <button onClick={()=>{deleteItem()}}>Yes</button>
                       <button onClick={()=>{setStatusOfDeleteBox(false)}}>No</button>
                   </div>
               </div>
               : null
           }

           <h3>{props.name}</h3>
           <div className={Style.main_img}>
               <img src={props.imageUrl}/>
           </div>
           <div className={Style.characters_container}>
               <h4 style={{marginTop:"0px"}}>Charactes:</h4>
               <div style={{paddingLeft:"10px"}}>
                    <p>Amount:<b>{" " +  props.count}</b></p>
                    <p>Width:<b>{" " + props.size.width}</b></p>
                    <p>Height:<b>{" " + props.size.height}</b></p>
                    <p>Weight:<b>{" " + props.weight + 'g'}</b></p>
               </div>
           </div>
           <button className={Style.open} onClick={()=>{setStatus(true)}}>Open</button>
           {openModal ? <ModalWindow close={setStatus} data={props.dataItem} index={props.index}
                                     setCatalog={props.setCatalog} catalog={props.catalog}/> : null}
       </div>
    )
}

export default ItemOfProduct;
