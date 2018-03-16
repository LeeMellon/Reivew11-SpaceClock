# _{Space Clock V 0.5}_

#### _{An App that calculates time and lifespan on other planets}, {3/16/2018}_

#### By _**{Ian Goodrich}**_

## Description

_{Space Clock will take a span of time and calculate how many solar cycles ("years") it constitutes on other planets.}_

## Setup/Installation Requirements

* _As this app is mainly designed to demonstrate testing with Karma and Jasmine the installation instructions are designed to that end._

* _Navigate to or create a parent directory for your copy of Space Clock._

* _Clone this GitHub repository by typing:_

  git clone https://github.com/LeeMellon/Reivew11-SpaceClock.git


* _Space Clock is built with Node Webpack Jasmine and Karma. Most of the required dependencies are included in the package.json file. However a few need to be installed after downloading from GitHub. After you have cloned the repository to you computer_

* _Within the SpaceClock directory type 'npm init -y'. Once this process is complete type 'npm install'_

* _Next type 'npm install jasmine-core@2.99.0 --save-dev'_

* _Next type 'npm install jasmine@3.1.0 --save-dev'_

* _Next type './node_modules/.bin/jasmine init'_

* _Next type 'npm install -g karma -cli'_

* _Next type 'npm run build' to make sure everything is installed correctly._

* _You can type 'npm test' to run the testing routine._

* _For versions later than 0.5, or if you add your own front end content type 'npm run start' to launch the app_

## Specs

* _Take in age in years and return the number of seconds this amount of time constitutes._
    input: 20
    output: 630720000
* _Take in two dates and return the time difference in seconds_
    input: (3/9/2018, 3/16/2018)
    output: 604800
* _Take in an amount of time in Earth years and convert it to "years" on other planets._
    input: (1, Mercury)
    output: 4.17
* __
* __
* __


## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details


_To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

* HTML
* Bootstrap
* JavaScript
* Webpack
* Karma
* Jasmine


*MIT License*

Copyright (c) 2018 **_Ian Goodrich_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
s
