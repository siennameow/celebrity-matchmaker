// celebrity choices 
var girls = ['Zendaya','Margot Robbie','Saweetie'];
var boys =['The Rock','Zac Efron','Justin Bieber'];
var chooseCeleb =[];

// event listeners for buttons

$('#questionOneA').on('click',chooseBoys);
$('#questionOneB').on('click',chooseGirls);
$('#questionOneC').on('click',chooseBoth);

var incrementB = 0;
var incrementG = 0;
var incrementBoth = 0;

function chooseBoys(){
    incrementB++;
    if(incrementB%2 !==0){
        chooseCeleb.push(boys);
        console.log(chooseCeleb)
    }else{
        chooseCeleb.splice(boys)
        console.log(chooseCeleb)
    }
};

function chooseGirls(){
    incrementG++;
    if(incrementG%2 !==0){
        chooseCeleb.push(girls);
        console.log(chooseCeleb)
    }else{
        chooseCeleb.splice(girls);
        console.log(chooseCeleb)
    }
};

function chooseBoth(){
    incrementBoth++;
    if(incrementBoth%2 !==0){
        chooseCeleb.push(boys, girls)
        console.log(chooseCeleb)
    }else{
        chooseCeleb.splice(boys);
        chooseCeleb.splice(girls);
        console.log(chooseCeleb)
    }

};

   