function data(){
  chooseDate.position(90,130)
  chooseDate.size(150,25)
  chooseDate.style('background-color','rgba(20,20,20,100)')
  chooseDate.style('color','orange')
  chooseDate.input(getInput);

function getInput(){

  let inputDate = splitTokens(this.value(),'-')
  let mi = split(inputDate[1],0)
   output_date = inputDate[2]+":"+mi[1]+":"+inputDate[0]
 console.log(output_date)
   ref = database.ref('data/1/'+output_date)
 	ref.on('value',getData,errData);

 	function getData(data){

 		var search = data.val();
 	let	 keys = Object.keys(search);

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


 		}

 		function errData(error){
 		console.log(error);
 		}

}


  fill(190,20);noStroke(); rect(30,170,900,820)

  for(let x= 0; x< 24;x++){
  for(let y = 0; y< 11;y++){
  	noFill();stroke(255,165,20)
  	rect(xpos+(y*70),240+(x*30),70,30)

  }
  }
//==============labels  =============

  textSize(16)
  stroke(255,165,20);noFill(); rect(xpos,200,770,40)
  noStroke();fill(105,255,0)
  text(stationId[0]+".0 " +": תחנה מספר",xpos+700,190)
  text("מיקום : רח' האלון גבעת עדה",xpos+670,225)
  text(date[0], xpos+ 50,225)
  for(let i = 0; i< labels.length;i++){
  	text(labels[i],(xpos+10)+(i*70)+20,260)
  }

  for(let i = 0;i < 24;i++){
  textSize(16);noStroke();fill(255)
  text(humidty[i],xpos+30,ypos+(i* 30))
  text(temp[i],xpos+110,ypos+(i* 30))
  text(co2[i],xpos+170,ypos+(i* 30))
  text(voc[i],xpos+240,ypos+(i* 30))
  text(pm1[i],xpos+310,ypos+(i* 30))
  text(pm2_5[i],xpos+380,ypos+(i* 30))
  text(pm10[i],xpos+450,ypos+(i* 30))
  text(time[i],xpos+670,ypos+(i* 30))
  }


}
