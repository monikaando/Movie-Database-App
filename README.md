# Movie-Database-App
 
## Table of contents
* [Setup](#setup)
* [Name](#name)
* [General info](#general-info)
* [Stack](#stack)
* [Content](#content)
* [Online version](#online-version)
* [Visuals](#visuals)
* [Contact](#contact)

## Setup
To run the application: go to "movie-database-app" folder, <br>
in terminal type:<br>
npm i<br>
npm start<br>
<br><br>
node: v10.16.0<br>
React: 16.14.0<br>
axios: 0.21.0<br>
bootstrap: 4.5.3<br>

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
    * Navigation
    First sections is the navigation with the logo and the search input field.
    User can type the title of the film and search by pressing Enter or "Search" button.

    * Pagination, counter, movies and movie details
    The second section is showing the result of searching.
    - Before searching user can see a home screen with the alert and short instruction.
    - Buttons "Previous page" and "Next page" allows the user to switch between pages.
    - Buttons are disabled if the user is on the first page (it is not possible to have page 0)
      and the last page (there are no more pages to see)
    - Page 1/10 is showing that the user is on the first page from all 10 pages.
    - Search results show how many movies were found.
    - If no movie was found, there is an alert: "Movie not found"

    - Below user can see 10 movies per page which were found by applying a user searching 
      input and pagination to API call:
      https://www.omdbapi.com/?apikey=9831d2b3&s=${this.state.searchByTitle.toLowerCase()}
      &page=${this.state.page}
    - Every movie has a poster, title, year and details button.

    - Movie details are accessible by clicking the "Details" button and are called
      by the id of the movie which was clicked: https://www.omdbapi.com/?apikey=9831d2b3&i=${id}
    - On big screens details of the clicked movie is expanding to the full width, on medium screens
      details are expanding on the right side of the poster in the next column, 
      for mobile details are expanding under the poster in the same column
    - User can close details using "Close button"

## Online version 
<a href="https://mswidzinska.github.io/Movie-Database-App/">https://mswidzinska.github.io/Movie-Database-App/</a>

## Visuals
Click a <a href="https://youtu.be/7nGHQtX-3Nw"><b>video</b></a> and see how Movie App works.

<b>Desktop version:</b>
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1605030555/MovieApp/Movie-App-Homepage.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1605030557/MovieApp/Movie-App-1.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1605030556/MovieApp/Movie-App-2.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1605030555/MovieApp/Movie-App-Alert.png" />
<br><br>

<b>Tablet version:</b>
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1605031367/MovieApp/Movie-App-1-tablet.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1605031365/MovieApp/Movie-App-2-tablet.png" />
<br><br>

<b>Mobile version:</b>
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1605031364/MovieApp/Movie-App-Homepage-mobile.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1605031365/MovieApp/Movie-App-2-mobile.png" />
<br><br>
<img src="https://res.cloudinary.com/mokaweb/image/upload/v1605031365/MovieApp/Movie-App-3-mobile.png" />
<br><br>

## Contact
Created by <a href="https://monikaswidzinska.netlify.app">Monika Swidzinska</a>