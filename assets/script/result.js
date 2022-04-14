

// var requestUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=American%20male%20film%20actors"
//retrive the image from wikipedia api
var celeName = celebPick;
console.log(celebPick)

// var requestUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&titles=Ariana%20Grande"
var requestUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&titles=" + celeName.replace(" ", "%20")

fetch(requestUrl + "&origin=*")

.then(function (response) {
 
  return response.json();
})
.then(function (data) {
//   console.log(data);
//   var imageEl= $("<img>")
// console.log(data.query.pages[0].pageimage)
//   imageEl.attr("src", data.query.pages[0].original.source)
//   imageEl.attr("style", "height:500px")
$(".name").text(data.query.pages[0].title);
//   var celeName = $(".name")
//   celeName.text(data.query.pages[0].title)

$(".img").attr("src", data.query.pages[0].original.source)
$(".img").attr("style", "height:600px")


$(".intro").text("Oh come on! We all fell in love with  " + celeName + "  right? ");
// $(".wiki-link").text("Find out more info about  " + celeName + "  in Wikipedia. ");
$(".wiki-link").text("Wikipedia");
$(".wiki-link").attr("href", "https://en.wikipedia.org/wiki/  " +celeName.replace(" ", "_"))

// $(".people-link").text("See the recent news of " + celeName)
$(".people-link").text("People")
$(".people-link").attr("href", "https://people.com/tag/"  + celeName.replace(" ", "-") + "/")

// $(".forbes-link").text("See Forbes of " + celeName)
$(".forbes-link").text("Forbes")
$(".forbes-link").attr("href", "https://www.forbes.com/profile/"  + celeName.toLowerCase().replace(" ", "-")+ "/")


});

// https://www.forbes.com/profile/stephen-curry/
// https://www.forbes.com/profile/rihanna/

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



