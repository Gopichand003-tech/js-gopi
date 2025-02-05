// IF STATEMENT = if a condition is true it will be exected ,if not something will be executed.
 
const mytext = document.getElementById("mytext");
const mybtn =  document.getElementById("mybtn");
const result = document.getElementById("result");
let age;
mybtn.onclick = function(){
    age = mytext.value;
    age = Number(age);
    if(age >= 100){
        result.textContent = `you are too old to enter into this site`;
    }
    else if(age == 0){
        result.textContent = `you are new born baby not allowed`;

    }
    else if(age >= 18){
        result.textContent =`you are old enough to enter into this site`;

    }
    else if(age < 0){
        result.textContent =`your age can't be below zero`;
    }
    else{
        result.textContent = `you  must be 18+ to enter in this site`;
    }
}
