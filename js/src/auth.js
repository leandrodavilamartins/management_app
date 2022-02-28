// Commented when authentication was ok 

let email = "leandrodavilamartins@gmail.com";
let password = "123456";

auth.signInWithEmailAndPassword(email,password).then(res => {
    console.log(res);
})