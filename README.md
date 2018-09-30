# MovieDB Website
#### This is a Full-Stack web project and finished during my exchange study in UCI.

You Can visit <http://18.237.112.131/MovieDB/mainpage.html> to view the demo.

If you want to login in, you can use this account：

Username: a@email.com  Password: a2

## Description
Users can browse and search movies. They can also add the movies they like to the shopping cart. The following parts will show more details about.

The data in the project is from IMDB database.

Related skills: **Java, Tomcat, Mysql, Javascript, Html, CSS, JSON, Ajax**
## Basic Functions
### 1. Main Page: 
* Access to searching and browsing pages/functionalities

### 2. Searching Page:
* Search by title, year, director, star's name
* Substring Matching
* Autocomplete suggestion
* Fuzzy Searching

### 3. Movie List Page
* Show title(hyperlinked), year, director, list of genres, list of stars(hyperlinked), rating
* Pagination
* Use "Prev/Next" button
* Change number of listings N per page
* Sort on title or title

### 4. Browsing Page
* Browse by movie title first alphanumeric letter - click on the letter jumps to movie list page only consists of movies starting with this letter
* Browse by genres - click on each genre jumps to Movie List Page which only consists of movies of this genre

### 5. Single Movie Page
* Show title, year, director, a list of genres, a list of stars
* Hyperlink each genre - as if clicking on a genre in Browse by genres
* Hyperlink each star to Singer Star Page

### 6. Single Star Page
* Show name, year of birth, a list of movies in which the star performed
* Hyperlink each movie to Single Movie Page

### 7. Shopping Cart Page
* Display information about current shopping cart
* Modify quantity using an input box and only allow valid values (numbers that >= 0)
* Delete an item

### 8. Ask for Customer Information Page
* Ask for basic customer transactional information
* Show error message with incorrect input

### 9. Login Page
* Show error message with incorrect user name or password
* Use HTTP Post
* Use session to acknowledge users after login

## Efficiency
### 1. Load Balancer
A load balancer will be used to redcue each server's burden so that the servers become more fast to response to users' request. We use the master and slave in Mysql to keep the data consistency. 
<img src="https://i.loli.net/2018/09/30/5bb021f67ddc0.png" alt="drawing" width="500"/>

### 2. Database Optimization
* Connection Pooling
* Prepared Statements

### 3. Cache when search
Cache the sugested list in javascript for past queries and reuse it when possible. So the autocomplete suggestion will response more fast and the burden of the server will also be reduced.


## Security
### 1. Use reCAPTCHA
### 2. Encrypted password 
Encrypt Users' password in DB, and login should verify user input with encrypted password
### 3. Encrypted Transmission
* Use Post 
* Use Https (I closed this because there is not valid certificate)

## Innovation
### Crawler for movie poster
I use IMDB's movie database so the movie ID in my database is same with the IMDB. I want to add movie posters to each movies so that users have better experience. But there is no open IMDB API for movie posters. So I write a crawler to get each movies' poster by their IMDB ID.

<img src="https://i.loli.net/2018/09/30/5bb02c7a0ddd0.png" alt="drawing" width="450"/>

More detail: <https://github.com/YujieZhao6/Moive-Database-Website/blob/master/src/servlets/GetMoviePoster.java>



