import client from './client';

const endpoint='/recipes/random?apiKey=7eeb845f50414c4aa997f923b0684079&tags=vegetarian,dessert&number=20'
const endpoint22=({find})=>{
 const endpoint1= `/recipes/findByIngredients?apiKey=1fec47ff88724cf2a793100326d512a3&ingredients=${find}&number=20`
 return  getlistings2 = () => client.get(endpoint1);
}
//1fec47ff88724cf2a793100326d512a3
//7eeb845f50414c4aa997f923b0684079
const getlistings = () => client.get(endpoint);


export default{
    getlistings,
    endpoint22
}