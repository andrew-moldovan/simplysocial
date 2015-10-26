# simplysocial

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

responsivness tested on (chrome device emulator)

iPad
iPad Mini
iPhone 4
iPhone 5
iPhone 6
iPhone 6 Plus
Nexus 4
Nexus 5
Nexus 6
Nexus 7
Nokia Lumia 520

why typescript

features

known bugs
didn't have time to convert things to svg to handle the icons properly

