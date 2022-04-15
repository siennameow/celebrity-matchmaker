# Celebrity Matchmaker

## Description 📝 

We built a fun, cheesy, cliche celebrity matchmaker application that uses a series of questions to find your celebrity match.

Users will see a welcomepage poping when they enter the app. By clicking the start button, they will be asked to answer a series of questions that will obtain information about the their dating preferences/interests. This information will help narrow down to one celebrity for their perfect match. They will then asked to input a name to check the reult. After complete the user input, they'll be able to see the final result of their match, a quote from Kanye, together with links to check more information at [Wikipedia Page](https://en.wikipedia.org/wiki/Main_Page), [people.com](https://people.com/) and [Forbes](https://www.forbes.com/?sh=11854e802254). 

The application leverages [Wikipedia REST API](https://wikimedia.org/api/rest_v1/) ,[CelebrityNinjas API](https://celebrityninjas.com/api) and [Kanye Rest API](https://kanye.rest/) to retrive the data and build user interface. It is easy for you to access through one link : https://mayaimorales.github.io/celebrity-matchmaker/ and is designed to work with different screen sizes as you need.

Find your perfect celebrity match now!


## Table of Contents 📖

* [Webpage Preview ⭐](#webpage-preview-)
* [Code-Snippet 💻](#code-snippet-)
* [Features 📋](#features-)
* [Usage 💡](#usage-)
* [Skill-Improved 📚](#skill-improved-)
* [Technologies 🔧](#technologies-)
* [Authors 👩](#authors-)
* [Credits 🙌](#credits-)

## Webpage Preview ⭐
 
 




## Features 📋

⚡️ Quiz with multiple choice questions\
⚡️ Buttons to start, go to next/previous page, and restart\
⚡️ Pink cheesy theme \
⚡️ Celebrity name and image\
⚡️ Link to see more info\
⚡️ Kanye Quote\
⚡️ Local Storage

## Code-Snippet 💻

HTML

Each Question page has a <h1>question, three button styled choices, and two button to go to next or previous question page. Also there's a progress bar indicating the user progress.
```HTML
    <header>
        <h1>Please answer the question below</h1>
        <p>Question 4 of 6</p>
    </header>
    <div class="content question">
        <h3>What feature do you like the most in your partner?</h3>
    </div>

    <div class="buttons is-centered">
        <button class="button is-outlined is-large is-danger">eyes</button>
        <button class="button is-outlined is-large is-danger">smile</button>
        <button class="button is-outlined is-large is-danger">body</button>
    </div>
    <progress class="progress is-danger" value="64" max="100">64%</progress>
            <br>
        <div class="buttons is is-centered">
            <a href="questionthree.html"><button id="start-button" class="button is-danger is-outlined">Previous Question</button></a>
            <a href="questionfive.html"><button id="start-button" class="button is-danger is-outlined">Next Question</button></a>
        </div>
```

CSS

Fonts family as "lobster" and theme color as pink.
```CSS
.body{
    background-color: #f699cd;
    height: 100vh;
}

p {
    font-family: "Lobster", "cursive";
    color: deeppink;
    padding-bottom: 3px;
    -webkit-text-stroke: 0.5px;
    -webkit-text-stroke-color: red;
}

.box {
    width: 500px;
    height: 300px;
    margin: auto;
    bottom: 0;
    
}

button {
    font-family: "Lobster", "cursive";
    margin: 0;
    position: absolute;
    top: 50%;
    left: 47%;
    
}
```

JavaScript

Funtion to retrive data from Wikipedia API using fetch() method and render the name and picture to the page. 
Use jQuery set attributes to add link to different info page.

```JavaScript
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
```


## Usage 💡

The link of the webpage is: https://mayaimorales.github.io/celebrity-matchmaker/

- Step 1: Load the webpage. You'll see a welcome page and start button.
- Step 2 :Start your quiz and answer all the questions,
- Step 3 :Write down your name and click the result button to check the result.
- Step 4 :See your result and check more info through the link.
- Step 5 :You can restart quiz with a button.


## Skill Improved 📚
✔️ Server side APIs\
✔️ Third party APIs\
✔️ Bulma\
✔️ JS Confetti\
✔️ jQuery\
✔️ Google Fonts\
✔️ HTML\
✔️ CSS\
✔️ JavaScript\


## Technologies 🔧

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://jquery.com/)
* [Bulma](https://bulma.io/)
* [Google Fonts](https://fonts.google.com//)

## Authors 👩

* **Maya Morales** - [LinkedIn](https://www.linkedin.com/in/maya-morales-1191351bb/)
* **Sienna Li** - [LinkedIn](https://www.linkedin.com/in/hexuanli/)
* **Alex Hernandez** - [LinkedIn](www.linkedin.com/in/alex-hernandez-438743233)
* **Callan Hunter** - [LinkedIn](https://www.linkedin.com/in/callan-hunter-195816196/)

## Credits 🙌

Thanks to the following people who helped me in this project:
- Jerome Chenette
- Ben Wright
- Manuel Nunes
- Vince Lee
- Kevin Hernandez
