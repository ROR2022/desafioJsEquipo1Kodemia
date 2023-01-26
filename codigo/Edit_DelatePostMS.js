
const URL_GLOBAL = 'https://kodemia-1543c-default-rtdb.firebaseio.com/';



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


const EDIT_ITEM = async (Object) => {
    try{
    const response = await fetch(`${URL_GLOBAL}-NMaO5gXVdBVykcxE3_P.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object),
    });
    const data = await response.json();
    return data;
   
}
    catch{
        alert(data);
        return data;
    }
}

const GET_DATA = async (Img_Post,UserImage,WritePost,NewPost) => {
    try{
        const response = await fetch(`${URL_GLOBAL}-NMaO5gXVdBVykcxE3_P.json`)
        const data = await response.json();
        console.log(data);
        Img_Post.value = data.Img_Post;
        UserImage.value = data.UserImage;
        WritePost.value = data.WritePost;
        NewPost.value = data.NewPost;


    }
    catch{
        alert(data);
        return data;
}
}

export { GET_DATA, EDIT_ITEM }
