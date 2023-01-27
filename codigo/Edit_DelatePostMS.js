
const URL_GLOBAL = 'https://desafiojsequipo1-default-rtdb.firebaseio.com/';



const DELETE_ITEM = async (id) => {
    try {
        const response = await fetch(`${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(),
        });
        const data = await response.json();
        return data;
       
    }
    catch{
        alert(data);
        return data
    }
                   
}


const EDIT_ITEM = async (obj,id) => {
    try{
    const response = await fetch(`${URL_GLOBAL}${id}.json `, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    });
    const data = await response.json();
    console.log("hola desde aqui",data);
    return data;
   
}
    catch{
        alert(data);
        return data;
    }
}

const GET_DATA = async (id) => {
    try{
        const response = await fetch(`${URL_GLOBAL}${id}.json`)
        const data = await response.json();
        console.log("function get data ",data);
        return data;
        

    }
    catch{
        alert(data);
        return data;
}
}

export { GET_DATA, EDIT_ITEM }
