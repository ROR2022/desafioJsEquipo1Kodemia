const URL_POST = 'https://desafiojsequipo1-default-rtdb.firebaseio.com/.json';

const primerPost = {
    title:'Segundo Post favor',
    content:'Post de Luis y Julio',
    urlImagePost: 'https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Background-Changer-App-Editing.jpg',
    urlImageUser: 'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
    nameUser: 'primerUser',
    createdDate: '',
    likes: 0,
  }

const postArticle = async () => {
    try {
        const response = await fetch(URL_POST, {
            method: 'POST',
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(primerPost),
        });
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error)
        return error
    }
} 

const pruebaPost = await postArticle()
console.log(pruebaPost)