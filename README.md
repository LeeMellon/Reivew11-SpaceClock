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

* _Setup Webpack and other dependencies by typing 'npm install' into the console_

* _Next type 'npm install -g karma -cli'_

* _Next type 'npm run build' to make sure everything is installed correctly._

* _You can type 'npm test' to run the testing routine._

* _Run the program by typing 'npm run start_

* _Inside the clock.js file, on line 105 change
    let coarseSecs = this.fineLifeSpanLeftFromBdayTEST()
 to let coarseSecs = this.fineLifeSpanLeftFromBday()
    This is an artifact that was necessary for testing purposes. Without the TEST, the proper method is called and gives a much more accurate to the current second result._

* _For versions later than 0.5, or if you add your own front end content type 'npm run start' to launch the app_

## Specs

* _Take in a set of numbers and return a SpaceClock formatted to create Date objects_
    input: let test = new SpaceClock(1976, 12, 17);
    output: test.month = 11;

* _Take a SpaceClock and return a rounded year from now._
    input: bday = new SpaceClock(1976, 12, 17);
    input: let outcome = bday.roughYearsFromNow();
    output: 41

* _Take a SpaceClock object and return a JS Date object_
    input: bday = new SpaceClock(1976, 12, 17);
    input: let outcome = bday.makeDate();
    input: let result = outcome.toString();
    output: "Fri Dec 17 1976 00:00:00 GMT-0800 (Pacific Standard Time)"

* _Take in two dates and return the time difference in rounded years_
    input: let bday = new SpaceClock(1976, 12, 17);
    input: let now = new SpaceClock(2018, 3, 17);
    input: let result = bday.roughYearsDiff(now);
    output: 41

* _Take in a 2 SpaceClock instances and return the differecn in time in Years, Weeks, Days, Hours, Minuets, and Seconds_
    input: let bday = new SpaceClock(1976, 12, 17);
    input: let newer = new SpaceClock(2018, 3, 16, 15, 26, 30, 0);
    input: let result = newer.closeDiff(bday);
    output: "41 years ,14  weeks, 2 days, 1 hours, 30 minuets, 0 seconds."


* _Take a date from the past and and convert it to "years" on other planets._
    input: let bday = new SpaceClock(1976, 12, 17);
    input: let newer = new SpaceClock(2018, 3, 16, 15, 26, 30, 0);
    input: let result = newer.planetDiff(bday, "Merc");
    output: "171 years ,51  weeks, 2 days, 19 hours, 50 minuets, 0 seconds."

* _Take a SpaceClock instance of the users Birthday and return an estimated ammount of time left based on an average 79 year lifespan._
    input: let rando = new SpaceClock(1950, 1, 1, 0, 0, 0, 0);
    input: let result = rando.coarseLifeSpanLeftFromBday();
    output: 10.87934576543.

* _SpaceClock instance of the users Birthday and a planet and return the expected life span left in that planets solar cycle._
      input: let rando = new SpaceClock(1950, 1, 1, 0, 0, 0, 0);
      input: let result = rando.planetEcpectencyFromBday("Merc");
      output: "45 years ,1  weeks, 1 days, 12 hours, 10 minuets, 0 seconds.".
## Known Bugs

_{No known bugs. Currently only works with Mars ("Mar"), Venus ("Ven"), Mercury ("Merc") and Jupiter ("Jup") other planets solar cycles may be added in the future.}_

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
