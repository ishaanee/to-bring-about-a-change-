var database;
var position;
var gamestate=0;
var count=0;
var form,people;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  if (count<=4){
    people=new People();
    form=new Form ();
    people.getcount();
    
    }
    

  

}


function draw(){
//  background("white");

}

