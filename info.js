function info(){
 console.log("info");
let ypos = 240;
//  https://www.nevo.co.il/law_html/Law01/500_490.htm     maxValues
//  https://www.sviva.gov.il/subjectsEnv/SvivaAir/Documents/air_np_add.pdf    natinal program
fill(40);rect(0,120,width,50)
textSize(26);fill(200)
text("מידע חשוב",width/2,150)
textSize(18)
text("ערכי מקסימום של מזהמים תקנות המשרד לאיכות הסביבה",830,ypos+240)

let name = limitValues.getColumn(0);
let formula = limitValues.getColumn(1);
let limit1 =limitValues.getColumn(2);
let time1 = limitValues.getColumn(3);
let limit2 = limitValues.getColumn(4);
let time2 = limitValues.getColumn(5);
let override = limitValues.getColumn(6);
let headers =["שם","פורמולה","מק'/3","ערך זמן","היתר חריגות"]
textSize(18);fill(255,180,20);
text(headers[0],960,ypos+285)
text(headers[1],700,ypos+285)
 text(headers[2],610,ypos+285)
 text(headers[3],525,ypos+285)
 text(headers[4],425,ypos+285)



textSize(16);textAlign(RIGHT)
for(let i = 0; i< name.length;i++){
  noStroke();fill(255,180,20)
  text(name[i],xpos + 680,ypos+350+(i*70))
  text(formula[i],xpos +420,ypos+350+(i*70))
   text(limit1[i],xpos +330,ypos+330+(i*70))
   text(limit2[i],xpos +330,ypos+360+(i*70))
    text(time1[i],xpos +245,ypos+330+(i*70))
   text(time2[i],xpos +245,ypos+360+(i*70))
   text(override[i],xpos +150,ypos+350+(i*70))

  noFill();stroke(255,180,20);
  rect(xpos +450,ypos+300,280,70+(i*70))
  rect(xpos +350,ypos+300,100,70+(i*70))
  rect(xpos +270,ypos+300,80,70+(i*70))
  rect(xpos +170,ypos+300,100,70+(i*70))
  rect(xpos +70,ypos+300,100,70+(i*70))
}

  rect(xpos +450,ypos+260,280,40)
  rect(xpos +350,ypos+260,100,40)
  rect(xpos +270,ypos+260,80,40)
  rect(xpos +170,ypos+260,100,40)
  rect(xpos +70,ypos+260,100,40)

}
