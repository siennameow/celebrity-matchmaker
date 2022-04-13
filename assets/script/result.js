
// var requestUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=American%20male%20film%20actors"

//retrive the image from wikipedia api
var celeName = "Ariana Grande"

// var requestUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&titles=Ariana%20Grande"
var requestUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&titles=" + celeName.replace(" ", "%20")

fetch(requestUrl + "&origin=*")

.then(function (response) {
 
  return response.json();
})
.then(function (data) {
//   console.log(data);
//   var imageEl= $("<img>")

//   imageEl.attr("src", data.query.pages[0].original.source)
//   imageEl.attr("style", "height:500px")
$(".name").text(data.query.pages[0].title);
//   var celeName = $(".name")
//   celeName.text(data.query.pages[0].title)
$(".img").attr("src", data.query.pages[0].original.source)
$(".img").attr("style", "height:600px")

// console.log(data.query.pages[0].pageimage)
//   $(".card-header").append(imageEl);

});


// https://en.wikipedia.org/wiki/Ariana_Grande
