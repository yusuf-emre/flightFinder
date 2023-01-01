# Flight finder
This project was built inidvidually as one week Post-Graduate-Program project at [Salt: School of Applied Technology](https://www.salt.dev/).

## Table of Contents
* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Prerequisites](#prerequisites)
* [Usage](#usage)

## About the Project
Flight Finder is a fullstack application built to deepen more on typescript on front end.

The intended purpose was to create an app to filter flights for desired location, time and passanger information:
- One-way and roundtrip options
- Creating passanger information in accordance with given query parameters in filter
- Confirmation of booking and passanger information

## Built With

### Back End
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

### Front End
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Auxiliary
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Prerequisites
To get started you will need to have installed
 - .NET 6 or higher
 - Yarn 1.22.19 or higher, or corresponding NPM

## Usage
Start by running the back end. Open a terminal and navigate to `flightFinderApi` folder, start the API by running

```
dotnet run
```

Open the running localhost port in your browser by using this url `https://localhost:7053/swagger`, you should now be able to interact with API using the Swagger interface.

Now move on to running the front end.

Open a new terminal and navigate to the `flight-finder-ui` folder, start the website with the command

```
npm install
```
Let the dependencies be installed, then run
```
npm start
```
And open the running localhost port as displayed in the terminal.

Enjoy!
