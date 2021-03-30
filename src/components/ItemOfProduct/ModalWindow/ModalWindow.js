import React, {useState} from "react";
import Style from './ModalWindow.module.css';
import EditWindow from "./EditWindow/EditWindow";

const ModalWindow = (props) =>{

    const [editItem, setStatusOfEdit] = useState(false);

    const comment = props.data.comments.map((item,index)=>{
        function deleteComment(){
            let catalog = JSON.parse(JSON.stringify(props.catalog));
            catalog[props.index].comments = catalog[props.index].comments
                .filter((el)=> el.description !== item.description || el.id !== item.id).map((el)=>{
                return el
            });

            props.setCatalog(catalog);
        }

        return(
            <div className={Style.comment}>
                <div className={Style.delete_comment}>
                    <b onClick={()=>{deleteComment()}}>×</b>
                </div>
                <div className={Style.comment_message}>
                    <p>{item.description}</p>
                    <div className={Style.date}>
                        <p>{item.date}</p>
                    </div>
                </div>

            </div>
        )
    });

    function formattedDate(d = new Date) {
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());
        let hour = d.getHours();
        let sec = d.getMinutes();
        const year = String(d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        if(hour < 9) hour = '0' + d.getHours();
        if(sec < 9) sec = '0' + d.getMinutes();

        return `${hour + ":"  + sec} ${month}.${day}.${year}`;
    }

    const ShowItem = () =>{

        const [commentValue, setCommentValue] = useState('');

        function SendComment(){
            const catalog = JSON.parse(JSON.stringify(props.catalog));

            catalog[props.index].comments.push(
                {
                    id: catalog[props.index].comments.length,
                    productId: props.index,
                    description: commentValue,
                    date: formattedDate()
                },
            );

            props.setCatalog(catalog);
            setCommentValue('');

        }


        return(
            <div className={Style.container_of_window}>
                <div className={Style.container}>
                    <div className={Style.exit}>
                        <b onClick={()=>{props.close(false)}}>×</b>
                    </div>
                    <div className={Style.content}>
                        <div className={Style.container_of_info}>
                            <div className={Style.container_of_color}>
                                <h3>{props.data.name}</h3>
                                <div  className={Style.color}  style={{backgroundColor:`${props.data.color}`}}> </div>
                            </div>
                            <div className={Style.main_img}>
                                <img src={props.data.imageUrl}/>
                            </div>
                            <div className={Style.description}>
                                <h4>Description:</h4>
                                <p>Amount: {" " + props.data.count}</p>
                                <p>Width: {" " + props.data.size.width}</p>
                                <p>Height: {" " + props.data.size.height}</p>
                                <p>Weight: {" " + props.data.weight + 'g'}</p>
                            </div>
                            <button className={Style.edit} onClick={()=>setStatusOfEdit(true)}>Edit</button>
                        </div>
                        <div className={Style.container_of_comments}>
                            <div className={Style.comments_content}>
                                {comment}
                            </div>
                            <div className={Style.input_comment_container}>
                                <input value={commentValue} onChange={(event)=>{
                                    setCommentValue(event.target.value)}}/>
                                <button className={Style.Send} onClick={()=>SendComment()}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={Style.container_of_window}>
            <div className={Style.container}>
                <div className={Style.exit}>
                    <b onClick={()=>{props.close(false)}}>×</b>
                </div>
                {editItem ?
                    <EditWindow catalog={props.catalog} setCatalog={props.setCatalog} index={props.index}
                                data={props.catalog[props.index]}/>
                    :
                    <ShowItem/>
                }
            </div>
        </div>
    )
}

export default ModalWindow;
