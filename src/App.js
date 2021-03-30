import React, {useState,useEffect} from "react";
import axios from 'axios';
import './App.css';
import ListOfGoods from "./components/ListOfGoods";
import Menu from "./components/Menu/Menu";

function App() {

    let headers = { "X-API-Key": '6iz6ecUb' }

    const [catalog,setCatalog] = useState([]);
    const [deleteStatus,setStatusDelete] = useState(false);
    useEffect(() => {
        axios.get('https://fakercloud.com/api/v1/schema/Q8q8h5TI',{headers}).then((response) => {
            let resData = JSON.parse(JSON.stringify(response.data));
            console.log(resData.rows);
            const catalogData = resData.rows.map((element)=>{
                return(
                    {
                        id: element.id,
                        imageUrl: element.imageUrl,
                        name: element.name,
                        count: element.count,
                        size: {
                            width: element.width,
                            height: element.height
                        },
                        weight: element.weight,
                        color:element.color,
                        comments: [
                            {
                                id: 0,
                                productId:  element.id,
                                description: 'some text here',
                                date: "14:00 22.08.2021"
                            },
                            {
                                id: 1,
                                productId:  element.id,
                                description: 'some text here',
                                date: "14:00 22.08.2021"
                            }
                        ]
                    }
                )
            });
            setCatalog(catalogData);
        })
            .catch(function (error) {
                console.log(error);
            });
    },[]);

  return (
    <div>
        <Menu catalog={catalog} setCatalog={setCatalog} setStatusDelete={setStatusDelete} deleteStatus={deleteStatus}/>
        <ListOfGoods catalog={catalog} setCatalog={setCatalog} deleteStatus={deleteStatus} setStatusDelete={setStatusDelete}/>
    </div>
  );
}

export default App;
