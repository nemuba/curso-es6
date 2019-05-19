/** Classe com método contrutor
 * class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos)
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}
*/
/** Classe com método estático 
class Matematica{
    static soma(a,b){
        return a+b;
    }
}

console.log(Matematica.soma(2,3));
*/

/** 
const usuario = {nome: 'Alef'};

usuario.nome = 'Diego';

console.log(usuario);
*/

/**
function teste(x){
    let y =2;

    if(x > 5){
        console.log(x,y);
    }
}
teste(10);*/
/** 
const arr = [1,3,4,5,8,9];

const newArray = arr.map(function(item,index){
    return item + index ;
});

console.log(arr);
console.log(newArray);

 const sum = arr.reduce(function(total, next){
    return total + next;

 });

 console.log(sum);

 const filter = arr.filter(function(item){
    return item % 2 === 0;
 });

 console.log(filter);
 */

/** 
const arr = [1,2,3,4,5,6,7,8,9,0];

const newArr = arr.map(item => item * 2);

console.log(arr,newArr);

const soma = (a=2,b=3) => a+b;

console.log(soma(2,8));

*/
/** 
const minhaPromise = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 2000);
});
/** 
minhaPromise().then(response => {
    console.log(response);
});

async function executaPromise (){
    const response = await minhaPromise();
    console.log(response);
}

executaPromise();
*/

import axios from 'axios';

class Api{
    static async getUserInfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (error) {
            console.warn("Erro na API");
        }
    }
}

Api.getUserInfo("nemuba");