
var ref;
var in_length;
var keys;

var humidty = new Array (10000);
var temp = new Array (10000);
var co2 = new Array (10000);
var voc = new Array (10000);
var pm1 = new Array (10000)
var pm2_5 = new Array (10000);
var pm10 = new Array (10000);
var date = new Array (10000);
var time = new Array (10000)
var benzene = new Array (10000);
var co2 = new Array (10000);
var voc = new Array (10000);
var pm1 = new Array (10000)
var wDirction = new Array (10000);
var stationId = new Array (10000);
var marker = new Array(300);
var service_lon = new Array(300);
var user_pass = new Array(300)
var email = new Array(300);
var userName = new Array(300);

var bg;
var header;
var d;
var arr = [];
var labels = ["לחות","טמפ","co2","voc","pm1","pm2.5","pm10","בנזן","כיוון"]
var menue=[];
var menuePos = 1;
var m_prop= ["בית","מידע","תחנות זמינות","שאלות"]
var xpos = 130;
var ypos = 293;
var lat,lon;
var mmap;
var chooseDate
var mapCreated = false;
var d = new Date();
var output_date;
var limitValues;
var signin = false;
var login = false;
var font = '"Comic Sans MS", cursive, sans-serif';
var Name,Email,Phone,Password;
var signin_prop;
var signinButton;
var loginB, sinupB;
var header;
var holder;
var login_container;
var user_login;
var user_password
var sendreq;
var loginData;
var loginOn = false;
var homeTxt;
var halfScreen = 0;
var pix;




for(let i = 0; i < date.length;i++){
	stationId[i]="";	humidty[i]="";	temp[i]="";	co2[i]="";
	voc[i]="";	pm1[i]="";	pm2_5[i]="";	pm10[i]="";
	date[i]="";	time[i]="";	wDirction[i]="";	benzene[i]="";
	user_pass[i]= "";userName[i] ="";email[i]="";
}
function preload(){
	bg = loadImage('assets/gradeint1.jpg')
	header = loadImage('assets/gradeint9.jpg')
	limitValues = loadTable('assets/pullution_limit.csv','csv','header')
homeTxt = loadStrings("assets/home.txt")
console.log(homeTxt)
}

function setup() {
 pix = displayDensity()+0.015
 console.log(pix)
 createCanvas(displayWidth*pix, displayHeight*3);
 halfScreen = width/2;
	
let month = d.getMonth()
let day = d.getDate();
let year = d.getFullYear();

mmap = select('#mapid')


loginB = createButton('כניסה')
loginB.class('pipe')
sinupB = createButton('הרשמה')
sinupB.class('pipe')
pipPosition=['1.2%','9%']
 b = selectAll('.pipe')
for(let i = 0;i< b.length;i++){
b[i].position((width-190)+(80*i),125);
//b[i].style('left',pipPosition[i])
b[i].style('width','6%');
b[i].style('height','7%');
b[i].style('background-image','linear-gradient(to right,rgb(50,50,150) ,rgb(50,50,255))')
b[i].style('color','yellow')
b[i].style('border-width','1px')
b[i].style('border-radius','2px')
b[i].style('font-size','1.1em')
b[i].mouseOver(changeColor);
b[i].mouseOut(base);
}
sinupB.mouseClicked(signin)
loginB.mouseClicked(login);


chooseDate = createInput('','date')
//chooseDate.position(width/3,160)
chooseDate.size(0,0)
chooseDate.style('background-color','rgba(20,20,20,100)')
chooseDate.style('color','orange')
//chooseDate.style('type','text')




	var firebaseConfig = {
	apiKey: "AIzaSyC3Cr1w2hLANP6HSSo3_J54x5GoUs1g80Q",
authDomain: "airqualtiydata.firebaseapp.com",
databaseURL: "https://airqualtiydata.firebaseio.com",
projectId: "airqualtiydata",
storageBucket: "airqualtiydata.appspot.com",
messagingSenderId: "250681937222",
appId: "1:250681937222:web:30074efbe18c085d03a947",
measurementId: "G-KVMVLMCTWK"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);

  //firebase.analytics();
	auth = firebase.auth();
	database = firebase.database();
let currentDate = day+":"+(month+1)+":"+year
	ref = database.ref('data/1/'+currentDate)
	ref2 = database.ref('data/users')
	ref.on('value',gotData,errData);

	function gotData(data){

		var search = data.val();
			 keys = Object.keys(search);

				in_length= keys.length;
				console.log(in_length)
				for(let i = 0 ; i < keys.length;i++){

					 k = keys[i];
					stationId[i] = search[k].stationId;
					humidty[i] = search[k].humidty;
					temp[i] = search[k].temp;
					co2[i] = search[k].co2;
					voc[i]= search[k].voc;
					pm1[i]= search[k].pm1;
					pm2_5[i]= search[k].pm2_5;
					pm10[i] = search[k].pm10;
					time[i] = search[k].time;
					date[i]= search[k].time1;

			}
//console.log(co2)
for(let i = 0; i< 20;i++){
	arr.push(time[i])
}

		}

		function errData(error){
		console.log(error);
		}

		for(let i= 0; i< m_prop.length;i++){
	menue[i] = createButton(m_prop[i]);
	menue[i].position(width-165,200+(i*50));
	menue[i].size(120,35);
	menue[i].style('background-color','rgba(60,65,60,0.7)')
	menue[i].style('border-width','0px')
	menue[i].style('font-size','20px')
	menue[i].style('color','orange')
//	menue[i].style('box-shadow','2px 2px 1px #888888')
	menue[i].mouseOver(changeColor);
	menue[i].mouseOut(base);
  menue[i].mouseClicked(updateP)
}
function updateP(){
menuePos = this.y/50;

menuePos = int(menuePos-3)
console.log(menuePos)

}
function changeColor(){
this.style('-webkit-transition','0.4s')
//this.style('color','blue')
this.style('border-color','rgb(195,195,195)')
this.style('box-shadow','2px 0px 8px #888888')

}
function base(){
	this.style('transition','0.4s')
this.style('color','black')
//this.style('border-width','2px')
this.style('border-color','rgb(195,195,165)')
this.style('box-shadow','0px 0px 0px #888888')
this.style('color','orange')

}



}

function draw() {
image(bg,0,0,width,height)
image(header,0,0,width,120)
fill(40);rect(0,120,width,50)
textSize(28);fill(200);textAlign(CENTER)
text("דף הבית",width/2,155)
fill(190,40);noStroke(); rect(width-190,170,160,640)
fill(255,165,20)
textSize(45);
text("airZoomIn",width/2,80)

if(menuePos ==1){
	fill(255,220),rect(250,190,700,600)
	textSize(18);noStroke();textAlign(RIGHT);fill(0)
	for(let i = 0;i< homeTxt.length;i++){
		text(homeTxt[i],900,300+(i*30))
	}
}

if(menuePos == 2){info();}

if(menuePos == 3 && mapCreated == false){
search();
}else if(menuePos != 3){
	mmap.style('width','0px')
	mmap.style('height','0px')
	mapCreated = false;
}

if(menuePos ==5){data();}

}
