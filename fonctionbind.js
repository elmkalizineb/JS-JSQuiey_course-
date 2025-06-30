function greet(name){
    console.log(`Hello , ${name} my favourite language is ${this.language}`);
}

const developer = { name : "john" , language : "JS"} ;

const boundGreet = greet.bind(developer);

boundGreet("alice");

function introduce(name , role ){
    console.log(` I am , ${name} , a ${role}  i work with  ${this.language}`);
}

const developerIntro =introduce.bind(developer,"Leyla " , "web developer");

developerIntro();
