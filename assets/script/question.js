// celebrity choices 
var girls = ['Zendaya','Margot Robbie','Saweetie'];
var boys =['Tom Holland','Zac Efron','Justin Bieber'];
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
    }else{
        chooseCeleb.splice(boys)
    }
    showResult();
};

function chooseGirls(){
    incrementG++;
    if(incrementG%2 !==0){
        chooseCeleb.push(girls);
    }else{
        chooseCeleb.splice(girls);
    }
    showResult();
};

function chooseBoth(){
    incrementBoth++;
    if(incrementBoth%2 !==0){
        chooseCeleb = boys.concat(girls)
        console.log(chooseCeleb)
    }else{
        chooseCeleb.splice(boys);
        chooseCeleb.splice(girls);
    }
     showResult();
};

var celebPick ='';
function showResult(){
    chooseCeleb[
        Math.floor(Math.random()*chooseCeleb.length)
    ];
    celebPick += chooseCeleb[
        Math.floor(Math.random()*chooseCeleb.length)
    ];
    
    localStorage.setItem('celebPick',celebPick)
    console.log(celebPick)
    
}
