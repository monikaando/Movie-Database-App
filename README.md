# Movie-Database-App
 
## Table of contents
* [Setup](#setup)
* [Name](#name)
* [General info](#general-info)
* [Stack](#stack)
* [Content](#content)
* [UX/UI](#uxui)
* [Footer](#footer)
* [Online version](#online-version)
* [Visuals](#visuals)
* [Contact](#contact)

## Setup
To run the application: go to "movie-database-app" folder, 
in terminal type:
npm i
npm start

node: v10.16.0
React: 16.14.0
axios: 0.21.0
bootstrap: 4.5.3

## Name
Movie App
Database of movies

## General info
    1) Application is built in frontend with using Axios for catching data from the API 
    (http://omdbapi.com/).
    2) The application is a single page application.
    3) I used React, Axios, Bootstrap, Sass, BEM.
    4) The whole application is responsive.
    5) I took care to keep the code is clean and readable.
    6) I provided global variables for colours.
    7) For images (like placeholder) I used Cloudinary.
    8) For styling I used Bootstrap and Sass.
    9) I added a favicon and the title for the website.
   
## Stack
    React, Axios, Bootstrap, Sass (with BEM)
## Content    
    The application is divided into two sections.
    First sections is a navigation with logo and the search input field.
    User can type the title of the film


    The second section is showing us a paged we choose.

    - Homepage has a title, gif and instruction.

    - Random Fact button is taking us to the page where we can see one random choosed fact.
    To do it I called: https://cat-fact.herokuapp.com/facts/random?animal_type=dog 
    where we can use endpoints like: random and animal_type=dog

    In HTML part choose to show the text (there is no user part available in random searching)
    together with shuffle button, which is calling the function everytime is clicked.
    
    - All dogs' facts is taking us to the page where we can see all facts about dogs 
    available in this API (around 40 for today)
    To do it I called: https://cat-fact.herokuapp.com/facts/?animal_type=dog
    where we can use endpoint: animal_type=dog

    In HTML part I used {this.state.allDogsFacts..map((item,i)=>(....))} to iterate through
    the all elements in the array and show text, user's name and surname. 

    I also excluded testing message (which is appearing in API by using if statement:
    {!item.text.toLowerCase().includes("testing") ? () :()}

## UX/UI
    User can:
    - click buttons on the left side and:
        * go to the Homepage 
        * see random fact about dogs
            - by clicking on shuffle button, user can see the next random fact
    - in the window with a scrollbar user can see all available in API facts about dogs
    and name and surname of the person who posted this fact
        
## Footer
    An additional element with the link to my portfolio.

## Online version 
<a href="https://mswidzinska.github.io/Movie-Database-App/">https://mswidzinska.github.io/Movie-Database-App/</a>

## Visuals
Click a <a href="https://youtu.be/NLCn2qtxro0"><b>video</b></a> and see how DoGGo App works.

<b>Desktop version:</b>
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1604489652/DoGGoApp/1-DoGGo-App.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1604489652/DoGGoApp/2-DoGGo-App.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1604489655/DoGGoApp/3-DoGGo-App.png" />
<br><br>

<b>Mobile version:</b>
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1604489650/DoGGoApp/1-mob-DoGGo-App.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1604489650/DoGGoApp/2-mob-DoGGo-App.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1604489649/DoGGoApp/3-mob-DoGGo-App.png" />
<br><br>

## Contact
Created by <a href="https://monikaswidzinska.netlify.app">Monika Swidzinska</a>