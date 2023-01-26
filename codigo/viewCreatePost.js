/*console.log('Hola desde viewCreatePost:..');

const objPost = {
  title: '',
  content: '',
  urlImagePost: '',
  urlImageUser: '',
  nameUser: '',
  createdDate: '',
  likes: 0
}
*/


/*if(createPostButon){
  createPostButon.addEventListener('click',(e)=>{
   
    e.preventDefault();
   //console.log('nos vamos a viewCreatePost:..');
    window.location.assign('../src/viewCreatePost.html');
  })
}
*/  



// aqui empieza el código de miguel
import { GET_DATA, EDIT_ITEM } from "./Edit_DelatePostMS.js"


const UserImage = document.querySelector('#UserImage'); //ya
const WritePost = document.querySelector('#WritePost'); //ya
const Img_Post = document.querySelector('#Img_Post'); //ya
const NewPost = document.querySelector('#NewPost'); //ya 
const Publicar = document.querySelector('#Publicar'); 

GET_DATA(Img_Post,UserImage,WritePost,NewPost);
let Object = {
  UserImage: UserImage.value,
  WritePost: WritePost.value,
  Img_Post: Img_Post.value,
  Publicar: Publicar.value,
}  


//const createPostButon = document.querySelector('#viewCreatePost');
Publicar.addEventListener('click',(event) => {
 

  EDIT_ITEM(Object);  
 
  console.log(Object)
 
});



