const URL = 'https://desafiojsequipo1-default-rtdb.firebaseio.com/';

const mySearch = window.location.search;

console.log('Hola desde articleJUlio')
console.log(mySearch)
const temp = new URLSearchParams(mySearch)
const id = temp.get('id');
console.log(id)

const getData = async(id) => {
   try {
    const response = await fetch (`${URL}${id}.json`);
    const result = await response.json();
    console.log(result)
    return result
   } catch (error) {
    console.log(error)
    return error
   }
}

const dataPost = await getData(id)

console.log(`Mis datos: ${dataPost}`)