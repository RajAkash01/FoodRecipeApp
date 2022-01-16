import { create } from "apisauce";

const apiClient=create({
    baseURL:'https://api.spoonacular.com',
    headers:{"Content-Type":'application/json'}
});

// apiClient.get('/recipes/random?apiKey=7eeb845f50414c4aa997f923b0684079&tags=vegetarian,dessert&number=1')
// .then(response =>{
//     if(!response.ok){
//         response.problem
//     }
// })

export default apiClient;