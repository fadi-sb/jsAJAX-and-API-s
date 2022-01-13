////////////////////////////////////////////////////////
//--------------------//Making XHR's
// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("ALL DONE WITH REQUEST!!!");
//     const data = JSON.parse(this.response);
//     console.log(data.ticker);
// }

// req.onerror = function (){
//     console.log("ERROR!!!");
//     console.log(this);
// }

// req.open('get','https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();
////////////////////////////////////////////////////////
//--------------------//The Fetch API
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then((res)=>{
//     console.log('RESPONSE',res);
//     return res.json();
// })
// .then((data)=>{
//     console.log('DATA PARSED...');
//     console.log(data.ticker);
// })
// .catch((e)=>{
//     console.log('OH NO! ERROR!',e);
// })
///////////
// const fetchBitcoinPrice =async () =>{
//     try{
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//         const data = await res.json();
//         console.log(data.ticker.price);
//     }catch(e){
//         console.log('SOMETHING WENT WRONG!!!',e);
//     }

// }
////////////////////////////////////////////////////////
//--------------------//Axios
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res=>{
//     console.log(res.data.ticker.price);
// })
// .catch((err)=>{
//     console.log('ERROR!',err);
// })
// ///////////
// const fetchBitcoinPrice = async function (){
//     try{
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//         console.log(res.data.ticker.price);
//     }
//     catch(e){
//         console.log('ERROR!',e);
//     }
    
// }
////////////////////////////////////////////////////////
//--------------------//Setting Headers With Axios
// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');


// const addNewJoke = function () {
//     getDadJoke()
//     .then((jokeText)=>{
//         const newLi = document.createElement('LI');
//         newLi.append(jokeText);
//         jokes.append(newLi);
//     })
// }
// const getDadJoke = async () => {
//     try{
//         const config = {headers: {Accept: 'application/json'}}
//         const res = await axios.get('https://icanhazdadjoke.com/',config);
//         return res.data.joke;
//     }
//     catch(e){
//        return 'NO JOKES AVAILABLE! SORRY :(';
//     }
   
// }

// button.addEventListener('click', addNewJoke);
////////////////////////////////////////////////////////
//--------------------//Axios more practice TV Show Search App

