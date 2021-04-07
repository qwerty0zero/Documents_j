const button = document.getElementById("button_send");
const inputs = document.querySelectorAll('input, select');
const form = document.getElementById("form");
let frontInfoBlock = document.getElementById("temp__block");
let backInfoBlock = document.getElementById("back_info_block");

let middle_text = document.getElementById("middle_text");

const outputTextNode = document.querySelectorAll(".output-text");
let outputText = [];


let valid;
let tempUser = [];

function User(surname,surname_e , name, name_e, patromyc, sex, date_of_birth, record, date_of_expiry,  document) {
    this.surname = surname;
    this.surname_e = surname_e;
    this.name = name;
    this.name_e = name_e;
    this.patromyc = patromyc;
    this.sex = sex;
    this.date_of_birth = date_of_birth;
    this.record = record;
    this.date_of_expiry = date_of_expiry;

    this.document = document;
  }


function validate() {
  valid = true;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
       valid = false;
    } 
 
  }
  if (valid == true){
    createUser();
} else {
    alert("Try one more time");
}

}

function createUser(){
   tempUser = new User;

let i = 0;

    for (const key in tempUser) {
  
        tempUser[key] = inputs[i].value;
       
        // console.log(inputs[i].value);
        i++;
    }
  
    outputFill();
}


function outputFill(){
let rand_numberImg = Math.floor(Math.random() * 3);

let signature = document.getElementById("signature");
signature.src = "./images/signature/" + rand_numberImg + ".png";
signature.style.display = "block";

for (let index = 0; index < outputTextNode.length; index++) {
        outputText[index] = outputTextNode[index];
    }
let i = 0;
for (const key in tempUser) {
  outputText[i].textContent = tempUser[key];
  i++
}
let birthday_value = inputs[6].value;
let day = Number(birthday_value.slice(8));
let mouth = Number(birthday_value.slice(5,7));
let year = Number(birthday_value.slice(0,4));

let expiry_day = day + 3;
let expiry_mouth = mouth;
let expiry_year = 2023;


let issue_year = expiry_year - 4;
document.getElementById("date_of_issue").textContent = expiry_day + " " +  expiry_mouth + " " + issue_year;

if (expiry_day >= 28){
    expiry_day = 27;
    expiry_mouth++;
}
if (expiry_mouth > 12){
    expiry_mouth = 1;
    expiry_year++;
}

if (day < 10) day = "0" + day;
if (mouth < 10) mouth = "0" + mouth;

if (expiry_day < 10) expiry_day = "0" + expiry_day;
if (expiry_mouth < 10) expiry_mouth = "0" + expiry_mouth;

let temp_birthday_data = day + " " + mouth + " " + year;
outputText[6].textContent = temp_birthday_data;

let temp_expiry_data = expiry_day + " " + expiry_mouth + " " + expiry_year;
outputText[8].textContent = temp_expiry_data;

outputText[7].textContent = year + mouth + day + "-00879";
middle_text.textContent = tempUser.name + " " + tempUser.surname + " " + tempUser.name_e + " " + tempUser.surname_e + " " + outputText[7].textContent;

outputText[9].textContent = '';
for (let i = 0; i < 9; i++) {
    outputText[9].textContent = outputText[9].textContent + Math.floor(Math.random() * 9)
    
}

year = String(year);
mouth = String(mouth);
day = String(day);

expiry_year = String(expiry_year);
expiry_mouth = String(expiry_mouth);
expiry_day = String(expiry_day);



let str_1 = 'IDUKR00' + outputText[9].textContent + "4" + outputText[7].textContent.slice(0,8) + outputText[7].textContent.slice(9);


let str_2 =  year.slice(2) + mouth + day + "2" + outputText[5].textContent.slice(2) + expiry_year.slice(2) + mouth + day + "0" + "UKR";


let str_3 = outputText[1].textContent + "<<" + outputText[3].textContent;

let allInformation = [str_1, str_2, str_3];

for (let i = 0; i < allInformation.length; i++) {
    if (allInformation[i].length < 30){
        while (allInformation[i].length < 30) {
                    allInformation[i]= allInformation[i] + "<" ;
        }

    } 
    
}


str_1 = allInformation[0];
str_2 = allInformation[1].slice(0, 29) + "6";
str_3 = allInformation[2];


document.getElementById("str_1").textContent = str_1;
document.getElementById("str_2").textContent = str_2;
document.getElementById("str_3").textContent = str_3;

frontInfoBlock.style.display = "block"
backInfoBlock.style.display = "block"
}



document.getElementById('photo_send').onchange = function (evt) {
 
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById('profile_photo').style.display = "block";
            document.getElementById("profile_photo").style.backgroundImage = `url(${fr.result})`;
            document.getElementById('profile_photo-back').style.display = "block";
            document.getElementById("profile_photo-back").style.backgroundImage = `url(${fr.result})`;
            // profile_photo-back
        }
        fr.readAsDataURL(files[0]);
    }
    else {
    }
}




button.addEventListener("click", validate);
