window.onload = function() {

    var form = document.getElementById("form");
    var name = document.getElementById("name");
    var type = document.getElementById("type");
    var email = document.getElementById("email")
    var password = document.getElementById("password");
    var desc = document.getElementById("desc");
    var legs = document.getElementsByClassName("legs");
    var abilities = document.getElementsByClassName("abilities");
    var abilArray = [];
    var Pet = {};
    var result = document.getElementById("result");
     form.addEventListener("submit", function (event) {
        event.preventDefault();
        Pet.name = name.value;
        Pet.type = type.value;
        for (let i = 0; i < legs.length ; i++){
            if(legs[i].checked === true){
                Pet.legs = legs[i].value;
            }
        }
        for (let i = 0; i < abilities.length ; i++){
            if(abilities[i].checked === true){
                abilArray[i] = abilities[i].value;
                Pet.abilities = abilArray;
            }
        }  
        Pet.email = email.value;
        Pet.password = password.value
        Pet.desc = desc.value;
        console.log(Pet.name);
        var ul = document.createElement("ul");
        result.appendChild(ul);
       for (let prop in Pet) {
           console.log(Pet[prop]);
           var li = document.createElement("li");
           li.innerHTML =  prop +":"+ Pet[prop];
           ul.appendChild(li);
       }
       
     })
    
    }