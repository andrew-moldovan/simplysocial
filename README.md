# simplysocial

##Seed
I used the [gulp angular yo generator](https://github.com/Swiip/generator-gulp-angular) to get started. I hadn't used this generator before, so I figured I would give it a try for this project. I found it to be really awesome, giving all the necessary tools right out of the box. 
I also decided to use typescrip as a test to see how quickly a project can be brought up from the ground and found it very easy. Please see below for a more detailed explanation.

##Setup
##### Install required tools `gulp` and `bower`:
```
npm install -g gulp bower
```
##### Clone this repo
##### Run the `bower` and `npm` installs
```
bower install
npm install
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

##Known bugs
* Didn't have time to convert icons to svg to handle them properly
* Clicking an image will open a dialog (modal) with the image showing, however, it doesn't show the whole post, or the ability to reply. I didn't have time to finish this feature.
* IE 9 support focused on functionality as opposed to pixel perfect rendition. There are some extra tweaks that can be done to make it look perfect.
