let color1 = document.getElementsByTagName("input")[0];
let color2 = document.getElementsByTagName("input")[1];
let h3 = document.getElementsByTagName("h3")[0];
let body = document.getElementsByTagName("body")[0];

function set(){
    body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")"
   
    h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", set);

color2.addEventListener("input", set)

// class Player{
//     constructor(name, type ){
//         this.name = name;
//         this.type = type;
//     }
//     introduce(){
//         console.log(`hola soy ${this.name} y soy de tipo ${this.type}`);
//     }
// }

// class Wizard extends Player{
//     constructor(name, type){
//         super(name, type)
//     }
//     play(){
//         console.log(`Siuyuu ssoy un ${this.type}`);
//     }
// }

// const wizard1 = new Wizard("hoal", "tupitoenmicola");
// const wizard2 = new Wizard("hole","tuerr");

// let obj = {a:1,b:2,c:{hola:{gta:"ocho"}}}
// console.log(obj.c.hola.gta);


// let username = prompt("Ingrese su nombre de usuario: ");
// let pass = prompt("Ingrese su contraseña: ");

// const valido = (username,password)=>{
//     if(username.length != 0 && password.length != 0){
//         for(let i=0 ;i<user.length; i++){
//             if(user[i].username === username && user[i].pass === password){
//                 return true;
//             }
//         }
//         return false;
//     }else{
//         alert("Complete todos los campos");
//     }
// }

// const inicio = (username, password)=>{
//     if(valido(username,password)){
//         alert(`Bienvenido ${username}`);
//     }else{
//         alert("Usuario o contraseña invalida");
//     }
// }

// inicio(username,pass);

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// for(letras in obj){
//     console.log(letras.values);
// };