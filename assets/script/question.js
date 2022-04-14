var girls = ['Zendaya','Margot Robbie','Megan Thee Stalion'];
var boys =['The Rock','Zac Efron','Justin Bieber'];
var chooseCeleb =[];
$('#questionOneA').on('click',chooseBoys);
$('#questionOneB').on('click',chooseGirls);
$('#questionOneC').on('click',chooseBoth);

function chooseBoys(){
    chooseCeleb.push(boys);
    console.log(chooseCeleb)
};

function chooseGirls(){
    chooseCeleb.push(girls);
    console.log(chooseCeleb)
};

function chooseBoth(){
    chooseCeleb.push(boys, girls)
    console.log(chooseCeleb)
};

