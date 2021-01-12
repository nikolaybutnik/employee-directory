# Employee Directory

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A web application that allows the user to view, filter and sort a list of employees.

[Link to application](https://nikolaybutnik.github.io/employee-directory/)

![Employee Directory Screenshot](https://github.com/nikolaybutnik/employee-directory/blob/main/public/assets/img/employee-directory-screenshot.png?raw=true)

## Table of Contents

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Issues](#Issues)
6. [Questions](#Questions)

## Installation

To install the application locally, run `npm install` to install all dependencies required to run it.

## Usage

Start the app by running `npm start` from CLI. [The app is also hosted on GitHub Pages.](https://nikolaybutnik.github.io/employee-directory/)
This application makes an API call to randomuser.me to obtain dummy data to populate the employee table.

At the top of the screen there are five filter conditions avaiable. By default all five are selected. Unchecking the boxes will hide employees that correspond to the selected roles.

It is also possible to sort the table by information in alphabetical order. To sort by first name, click the 'First Name' table heading. To sort by last name, click the 'Last Name' table heading. To sort by role, click the 'Role' table heading. Clicking the heading once will sort the data in ascending order, and clicking it again will sort in descending order. For visual aid, sortable headings have an icon next to their name.

## License

This project is covered under the MIT license. To find out what is permitted under this license, click the license badge at the top of the README.

## Contributing

Feel free to submit any pull requests. All pull requests will be considered.

## Issues

There is a known issue that on page load occassionally the employee data will not load. That seems to be a limitation of the API used. Refresh the page to make the API call again. There is currently no known solution to this problem.

## Questions

You may directly send any questions related to this project or any of my other projects to [my email adress](mailto:btnk.nik@gmail.com). To find all my projects visit [my GitHub profile](https://github.com/nikolaybutnik).
