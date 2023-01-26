console.log('Hola desde viewCreatePost:..');


const createPostButon = document.querySelector('#viewCreatePost');

if(createPostButon){
  createPostButon.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('nos vamos a viewCreatePost:..');
    window.location.assign('../src/viewCreatePost.html');
  })
}
