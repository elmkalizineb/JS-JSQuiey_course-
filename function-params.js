function greetDefault(name = "Guest"){
    console.log(`hello , ${name}`);
}

greetDefault();
greetDefault("zineb");

function greetAll(...names){
    for(const name of names ){
        console.log(`Hello , ${name}`);
    }
}

greetAll("Ali","Mohammed");
