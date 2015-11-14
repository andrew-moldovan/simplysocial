# simplysocial -- No Bootstrap Demo Project

I wanted to play wtih building a fully responsive front-end without using Bootstrap and to see how difficult it would be. This is just a simple demo project of me doing just that.

##Seed
I used the [gulp angular yo generator](https://github.com/Swiip/generator-gulp-angular) to get started. I hadn't used this generator before, so I figured I would give it a try for this project. I found it to be really awesome, giving all the necessary tools right out of the box. 

##Setup
##### Install required tools `gulp` and `bower`:
```
npm install -g gulp bower
```
##### Clone this repo
##### Run the `bower` and `npm` installs
```
npm install
bower install
```
##### To start the application 
```
gulp serve
```
##### Then navigate to `localhost:3000`

##### To run unit tests
```
karma start
```

##Features
* Create new post on the home page
* Create new post from the modal from the navbar on any page
* Reply to any post
* Ability to edit users account, notifiation, privacy settings
* Post data is fetched from json file using $http, easy to migrate to an actual service call
* Can filter posts based on whether or not they have an image
* Animations for when a new post is created
* Grid layout or list layout
* Responsive
* Unit tests for the logic in the app
* Tested in IE9, Chrome, Firefox

##Responsiveness tested on chrome device emulator
* iPad
* iPad Mini
* iPhone 4
* iPhone 5
* iPhone 6
* iPhone 6 Plus
* Nexus 4
* Nexus 5
* Nexus 6
* Nexus 7
* Nokia Lumia 520

##Why typescript
I chose to use typescript for a number of reasons, first and foremost that angular 2.0 is being written in typescript and looking at a lot of what has come out of the latest ng-conf conferences, a lot of people are using typescript to write their angular apps to ease migration. The syntax is very similar (it's just a superset of javascript), and offers a few syntactic goodies (types, lambda syntax for functions, etc...) that may be used if it helps.