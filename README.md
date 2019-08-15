# Formative 3.1 by Matt and John

# A ONE-PAGE APP USING NEWS API

[See News API](https://newsapi.org/)

# INSTALLATION

To install everything needed for this project, you need to have a version of **Node JS** and **npm** installed on your machine.

In Terminal on your computer:
>$ git clone https://github.com/ThisIsMattSaunders/formative3.1.git

>$ cd formative3.1

In Terminal at the level of the project folder, make a dev branch for yourself.
>$ git branch yournameDev

Make sure you're in your dev branch:
>$ git checkout yournameDev

Still in Terminal, but now in your local server (vagrant, localhost, etc.):
>$ npm install

This will install Bootstrap, jQuery, Popper.js, and Grunt (which are listed in the package.json file) when you type **npm install** in the Terminal.

You also need to create a config.json file in your root directory and paste the following into the file. You need to get a News API Key from the News API website (see link above) and then include it in the config.json file.

Here's how it should look:

>{
  "newsAPIkey": "ADD_API_KEY_HERE"
}

# STYLE GUIDE

- We are using object-oriented CSS (**OOCSS**) for this project. We aim to write reusable, modular code while writing style separately for content and containers.

- For JavaScript, we use: single quotes for values; camelcase for variable and function names; spaces around operators; 4-space indentation; and other practices recommended by [W3Schools](https://www.w3schools.com/js/js_conventions.asp). We are starting to use ES6 for variable and function declarations. 

- We opted not to use SASS to compile our CSS, as this was a small, single-page project. We use **Bootstrap** for CSS.

- HTML is written in line with [W3Schools guidelines](https://www.w3schools.com/html/html5_syntax.asp)
