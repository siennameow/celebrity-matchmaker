
// var requestUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=American%20male%20film%20actors"


// var celeName = "Shawn Mendes"
//retrive the image from wikipedia api
var celeName =localStorage.getItem('celebPick')

var requestUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&titles=" + celeName.replace(" ", "%20")

fetch(requestUrl + "&origin=*")

.then(function (response) {
 
  return response.json();
})
.then(function (data) {
//   console.log(data);

$(".name").text(celeName);

$(".img").attr("src", data.query.pages[0].original.source)
$(".img").attr("style", "height:350px")


$(".intro").text("Oh come on! We all fell in love with  " + celeName + "  right? ");

$(".wiki-link").text("Wikipedia.com");
$(".wiki-link").attr("href", "https://en.wikipedia.org/wiki/  " +celeName.replace(" ", "_"))


$(".people-link").text("People.com")
$(".people-link").attr("href", "https://people.com/tag/"  + celeName.replace(" ", "-") + "/")


$(".forbes-link").text("Forbes.com")
$(".forbes-link").attr("href", "https://www.forbes.com/profile/"  + celeName.toLowerCase().replace(" ", "-")+ "/")


});


//request fetch from kanye quote api
var url = "https://api.kanye.rest";

 
fetch(url)

    .then(function(response){return response.json();})

    .then(function(response) {

       console.log(response.quote)

       $(".quote-content").text('"'+response.quote +' " --  Kanye Quote ' )
    })

    .catch(function(error){console.log(error);});

//confetti
var canvas;

var jsConfetti = new JSConfetti({ canvas })

setTimeout(() => {
  jsConfetti.addConfetti()
}, 1000)

  jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 500,
  })
  jsConfetti.addConfetti({
    emojis: ['🦄'],
    emojiSize: 100,
    confettiNumber: 30,
  })

  // jsConfetti.addConfetti({
//     emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
//  })

//  jsConfetti.addConfetti({
//     confettiColors: [
//       '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
//     ],
//   })


//celebrity ninjia API

$.ajax({
    method: 'GET',
    url: 'https://api.celebrityninjas.com/v1/search?name=' + celeName,
    headers: { 'X-Api-Key': 'Mkhgirf07Z/MG0OcpxClFg==PSUktbrAGqQFznd8'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


$("#retake").on("click",toQuestions)

function toQuestions(){
    window.location="./index.html"
}