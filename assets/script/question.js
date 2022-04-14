var girls = ['Zendaya','Margot Robbie','Megan Thee Stalion'];
var boys =['The Rock','Zac Efron','Justin Bieber'];
var chooseCeleb =[];

$('questionOneA').on('click',chooseBoys());
$('questionOneB').on('click',chooseGirls());


function chooseBoys(){
    chooseCeleb.push(boys);

};

function chooseGirls(){
    chooseCeleb.push(girls);
};

console.log(chooseCeleb);

// var girls = ['Zendaya','Margot Robbie','Megan Thee Stalion'];
// console.log(girls);
// var boys = ['The Rock','Zac Efron','Justin Bieber'];
// console.log(boys)

// var chooseCeleb =[];

// console.log(chooseCeleb)