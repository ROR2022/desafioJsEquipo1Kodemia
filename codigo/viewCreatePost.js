console.log('Hola desde viewCreatePost:..');

const today = new Date();
//today.setHours(today.getHours()-6);
//console.log('today:..',today);

let objPost = {
  title: '',
  content: '',
  urlImagePost: '',
  urlImageUser: '',
  nameUser: '',
  createdDate: today,
  likes: 0
}

const createPostButon = document.querySelector('#viewCreatePost');

if(createPostButon){
  createPostButon.addEventListener('click',(e)=>{
    e.preventDefault();
    //console.log('nos vamos a viewCreatePost:..');
    window.location.assign('../src/viewCreatePost.html');
  })
}

const fullObjPost= () =>{
    const nameUser =  document.querySelector('#nameUser');
    const title = document.querySelector('#title');
    const content = document.querySelector('#content');
    const urlImagePost = document.querySelector('#urlImagePost');
    const urlImageUser = document.querySelector('#urlImageUser');
    objPost = {
      ...objPost,
      nameUser: nameUser.value,
      title: title.value,
      content: content.value,
      urlImagePost: urlImagePost.value,
      urlImageUser: urlImageUser.value
    }
}

const publishButton = document.querySelector('#publishButon');

if (publishButton){
  publishButton.addEventListener('click', async()=>{
    fullObjPost();
    console.log('objPost:..',objPost);
    const result = await postObjPost(objPost);
  })
}

const baseUrl = 'https://desafiojsequipo1-default-rtdb.firebaseio.com/';

const postObjPost = async (data)=>{
  const options = {
    method: 'POST',
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(`${baseUrl}.json`,options);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
    return error
  }
}