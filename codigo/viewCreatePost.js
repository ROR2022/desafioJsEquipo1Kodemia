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


if(createPostButon){
  createPostButon.addEventListener('click',(e)=>{
   
    e.preventDefault();
    //console.log('nos vamos a viewCreatePost:..');
    window.location.assign('../src/viewCreatePost.html');
  })
}

