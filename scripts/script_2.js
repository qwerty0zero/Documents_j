window.onload = function () {
    alert("Привет, я разработчик данного проекта! Прошу, прочитай весь этот текст! Для использования сайта вы должны ввести данные и загрузить фото, сайт был создан в целях создания шуточной id-паспорта гражданина Украины. Для лучшего эффекта загружайте фото формата 3/4, и вводите реалистичные данные. Этот сайт не отправляет ваши данные, так как у сайта нет сервера, и это не соответствует политике конфиденциальности.");

    let questionResult = confirm("Используя возможностями сайта вы даёте согласие, что автор/владелец сайта не несёт ответственности за ваше дальнейшие действия. Использование поддельных документов в корыстных целях карается законом. Если вы соглашаетесь, то нажмите кнопку 'Ок', иначе страница обновиться.");

    if (questionResult == false){
            location.reload(); 
    }

const button = document.getElementById("button_send");
const inputs = document.querySelectorAll('input, select');

let form = document.getElementById("form");
let canvasConteiner = document.getElementById("canvasItem");

let navBtn_1 = document.getElementById("nav_item-1");
let navBtn_2 = document.getElementById("nav_item-2")

let allData = [];

let portofolePhotoSrc;

let birthday_value;
let day; 
let mouth; 
let year; 

let expiry_day; 
let expiry_mouth; 
let expiry_year; 
let issue_year; 

let str_1;
let str_2;
let str_3;

let valid;
let tempUser = [];

let compiled = false;

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
    alert("Заполните все данные");
}

}

function createUser(){
   tempUser = new User;

    allData[0] = inputs[0].value;
    allData[1] = translit(allData[0]);
    allData[2] = inputs[1].value;
    allData[3] = translit(allData[2]);
    allData[4] = inputs[2].value;
    allData[5] = inputs[3].value;

     birthday_value = inputs[4].value;
     day = Number(birthday_value.slice(8));
     mouth = Number(birthday_value.slice(5,7));
     year = Number(birthday_value.slice(0,4));
    
     expiry_day = day + 3;
     expiry_mouth = mouth;
     expiry_year = 2023;

     issue_year = expiry_year - 4;

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

    allData[6] =  day + " " + mouth + " " + year;
    allData[7] = year + mouth + day + "-00879";
    allData[8] = expiry_day + " " + expiry_mouth + " " + expiry_year;
    allData[9] = '';
    for (let i = 0; i < 9; i++) {
        allData[9] = allData[9] + Math.floor(Math.random() * 9)
        
    }
    for (let i = 0; i < allData.length; i++) {
        allData[i] = allData[i].toUpperCase();
    }

    let i = 0;

    for (const key in tempUser) {
        tempUser[key] = allData[i];
        i++;
    }

    year = String(year);
    mouth = String(mouth);
    day = String(day);

    expiry_year = String(expiry_year);
    expiry_mouth = String(expiry_mouth);
    expiry_day = String(expiry_day);

    str_1 = 'IDUKR00' + tempUser.document + "4" + tempUser.record.slice(0,8) + tempUser.record.slice(9);
    str_2 =  year.slice(2) + mouth + day + "2" + tempUser.sex.slice(2) + expiry_year.slice(2) + mouth + day + "0" + "UKR";
    str_3 = tempUser.surname_e + "<<" + tempUser.name_e;


    while (str_1.length < 30) {
        str_1 = str_1 + "<" ;
        }
    while (str_2.length < 30) {
        str_2 = str_2 + "<" ;
        }
    str_2 = str_2.slice(0,29) + "6";
    while (str_3.length < 30) {
        str_3 = str_3 + "<" ;

  fillCanvas();
  
}
}

function translit(word){
	var answer = '';
	var converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	};
 
	for (var i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
 
	return answer;
}

function fillCanvas() {
    let cvs_1 = document.getElementById("canvas_1");
    let ctx_1 = cvs_1.getContext('2d');
    let cvs_2 = document.getElementById("canvas_2");
    let ctx_2 = cvs_2.getContext('2d');

    let frontImg = new Image();
    let backImg = new Image();
    let signaturePhoto = new Image();
    let portofolePhoto = new Image();
   

    portofolePhoto.src = portofolePhotoSrc;
    signaturePhoto.src = `./images/signature/current.png`;
    frontImg.src = "./images/front.png";
    backImg.src = "./images/back.png";
    

    backImg.onload = drawImage;

    function reColor(imgObj, cvs, ctx , im_x, im_y, im_w, im_h){
        
     
            var imgW = imgObj.width;  
            var imgH = imgObj.height;  
            cvs.width = 500;  
            cvs.height = 316;  
     
            ctx.drawImage(imgObj, im_x, im_y,im_w,im_h);  
            var imgPixels = ctx.getImageData(0, 0, imgW, imgH);  

                
            for(var y = 0; y < imgPixels.height; y++){  
                for(var x = 0; x < imgPixels.width; x++){  
                    var i = (y * 4) * imgPixels.width + x * 4;  
                    var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;  
                    imgPixels.data[i] = avg;   
                    imgPixels.data[i + 1] = avg;   
                    imgPixels.data[i + 2] = avg;  
                }  
            }  
            ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);  
            return cvs.toDataURL();  
            
            
            
    }

    function drawImage(){   

        reColor(portofolePhoto, cvs_1, ctx_1 ,25 , 75, 162, 232);
   
        ctx_1.drawImage(frontImg, 0, 0 , 500, 316);
  
        ctx_1.drawImage(signaturePhoto, 250, 275 , 50, 36);

        reColor(portofolePhoto, cvs_2, ctx_2, 405, 38 , 59, 90);
        ctx_2.drawImage(backImg, 0, 0 , 500, 316);

        fillText();
    } 
    function fillText(){
        ctx_1.font = " 16px Arial";
        ctx_1.fillStyle = "#000000b3";
        ctx_1.fillText(allData[0], 217,85);
        ctx_1.fillText(allData[1], 217,102);
        ctx_1.fillText(allData[2], 217,131);
        ctx_1.fillText(allData[3], 217,148);
        ctx_1.fillText(allData[4], 217,177);
        ctx_1.fillText(allData[5], 217,209);
        ctx_1.fillText("УКРАЇНА/UKR", 348,209);
        ctx_1.fillText(allData[6], 217,240);
        ctx_1.fillText(allData[7], 348,240);
        ctx_1.fillText(allData[8], 217,271);
        ctx_1.font = '900 16px Arial';
        ctx_1.fillText(allData[9], 348,271);

        ctx_2.font = " 16px Arial";
        ctx_2.fillStyle = "#000000b3";
        ctx_2.fillText(day + " " + mouth + " " + issue_year, 34, 59);
        ctx_2.fillText("23497812690", 34, 92);
        ctx_2.font = '900 16px Arial';
        ctx_2.fillText("1444", 257, 59);
        ctx_2.font = '300 16px Arial';
        ctx_2.font = " 11px Arial";
        ctx_2.fillText("М ДОНЕЦЬК ДОНЕЦЬКА ОБЛАСТЬ УКРАИНА/M DONETSK", 34, 122);
        ctx_2.fillText("DONETTSKA OBLAST UKRAINA/UKR", 34, 135);
        ctx_2.font = " 8px Arial";
        ctx_2.textAlign = 'center';
        ctx_2.fillText(allData[0] + " " + allData[2] + " " + allData[1] + " " + allData[3] + " " + allData[7], 250, 185);

        ctx_2.font = "100 20px Arial";
        ctx_2.textAlign = 'center';
        ctx_2.scale(1.3, 1)
        ctx_2.fillText(str_1, 192,235, 340);
        ctx_2.fillText(str_2, 192,255, 340);
        ctx_2.fillText(str_3, 192,275, 340);

        cvs_1.style.display = "block";
        cvs_2.style.display = "block";

        compiled = true;

        showItem();
    }

}
function showItem(){

    form.classList.remove("active");
    canvasConteiner.classList.add("active");
    navBtn_1.classList.remove("active");
    navBtn_2.classList.add("active");


}

navBtn_1.addEventListener("click", changeItem1);



navBtn_2.addEventListener("click",changeItem2);


function changeItem1(){
   
    navBtn_1.classList.add("active");
    navBtn_2.classList.remove("active");

    form.classList.add("active");
    canvasConteiner.classList.remove("active");
}


function changeItem2(){
    if (compiled == true){
        navBtn_2.classList.add("active");
        navBtn_1.classList.remove("active");
    
        form.classList.remove("active");
        canvasConteiner.classList.add("active"); 
    } else {
         alert("Сначала введите данные.");
    }
    
}


document.getElementById('photo_send').onchange = function (evt) {
 
    let tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    if (FileReader && files && files.length) {
        let fr = new FileReader();
        fr.onload = function () {

            portofolePhotoSrc = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
    else {
    }
}

button.addEventListener("click", validate);
}
