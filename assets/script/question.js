// celebrity choices 
var girls = ['Zendaya','Margot Robbie','Saweetie','Camila Cabello', 'Dua Lipa','Ariana Grande','Selena Gomez','Taylor Swift'];
var boys =['Tom Holland','Zac Efron','Justin Bieber','Shawn Mendes','Jack Harlow','Dwayne Johnson','Stephen Curry'];

var concateArray =[];
var chooseCeleb =[];

// event listeners for buttons

$('#questionOneA').on('click',chooseBoys);
$('#questionOneB').on('click',chooseGirls);
$('#questionOneC').on('click',chooseBoth);

var incrementB = 0;
var incrementG = 0;
var incrementBoth = 0;

function chooseBoys(){
    chooseCeleb = concateArray.concat(boys);
    showResult();
};

function chooseGirls(){
    chooseCeleb = concateArray.concat(girls);
    showResult();
};

function chooseBoth(){
    chooseCeleb = boys.concat(girls);
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
    
    localStorage.setItem('celebPick',celebPick);
    
}


function allLetter(inputtxt){ 
    var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
        $('.rq').text('letters only')
      return false;
      }
}

