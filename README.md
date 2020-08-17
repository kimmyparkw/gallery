<h1>Gallery</h1>
<p>This app is meant to be a source of inspiration for those who are a part of it. Users can browse through the daily top picks of images that are take from the Rijksmuseum and add them to their own personal galleries.</p>
<a href="https://curate-my-gallery.herokuapp.com/">Heroku app deployment</a>

<h1>Wireframes, schema, and user stories</h1>
<h3>Wireframes</h3>
<img src="https://github.com/kimmyparkw/gallery/blob/main/project%202%20wireframes.jpg?raw=true" width="300">
<img src="https://github.com/kimmyparkw/gallery/blob/main/IMG_9355%20copy.jpg?raw=true" width="300">
<h3>User story</h3>
Users can log in
users can see what inspiration boards they currently have
Users can click on an indv inspiration board to see what pieces of art they’ve saved to it
Users can go to images and see what’s new
Users can save new pieces of art to their inspiration boards
Users can create new inspiration boards
Users can update any inspiration board information
Users can delete any boards they don’t want anymore.
<h3>Schema diagrams</h3>
<img src="https://github.com/kimmyparkw/gallery/blob/main/Screen%20Shot%202020-08-11%20at%203.44.17%20PM.png?raw=true" width="900">

<h1>Technologies used</h1>
<p>I used an api from the Rijksmuseum to gather all of the image information (urls, title, artists). Authentication is used so that a person is able to log in to the app.</p>
<p>Node.js, express, ejs, HTML, CSS, javascript, and postgres-SQL were all the relevant technologies used in the making of this app</p>
<p>morgan, pg-promise, cookie-parser, body-parser, method-override, passport, passport-local, bcryptjs, and dotenv were all the modules used in this app.</p>

<h1>Code snippet</h1>
  <p>index(req, res, next) { <br/>
    Image.getAll()</br>
      .then((images) => {</br>
        const randomImages = []</br>
        if (randomImages.length < 10) {</br>
          for (let i = 0; i < 10; i++) {</br>
            randomImage = images[Math.floor(Math.random() * 40)]</br>
            randomImages.push(randomImage)</br>
          }</br>
        }</br>
        res.render('images/index', {</br>
          randomImages,</br>
        })</br>
      })</br>
      .catch(next)</br>
  },</p>
  <p>It took me a while to figure out how I would be able to find random images to populate the main image page. I was very proud of myself to getting this!</p>
  
  <h1>Future plans</h1>
  <p>While I was able to get CRUD done on my galleries and have a db for users, I wasn't able to figure out how to connect the images table with the rest of the app. I'd like to be able to tackle that portion the next time I come around to this app.</p>
  
  
  <h1>Instructions</h1>
  
  <h3>From github</h3>
  <p>First fork and clone this repository into your computer by copying the HTTPS link. In your terminal, create a folder that you want this repository to live in. After you've cd'd into the folder, type "git clone" followed by the HTTPS link that was copied from clone popup from github and press enter. The repository should now be local!</p>
  
  <h3>Next in SQL</h3>
  <p>type "psql" into your command line from the directory with the project in it. Next, create a database that has the same name as the one mentioned in the config and/or the .env file. Finally run the migration and seed files.</p>
  
  <h3>Back in CLI</h3>
  <p>Return to the command line, but still in the repository. From there, type in "npm install" and wait for the modules to all install. After the modules have all been installed, type "npm run dev" and make sure there is a line that says "Listening on port 3000!"</p>
  
  <h3>In the browser</h3>
  <p>Open up your browser and type in "localhost:3000" into the url bar. The app should be running locall now!</p>
  
