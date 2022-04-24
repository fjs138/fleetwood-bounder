
# Fleetwood Bounder
Gallery of Breaking Bad characters, using React and an API for character data retrieval.
<br>

## Deployment
![demo.gif](demo.gif) <br>
[![Netlify Status](https://api.netlify.com/api/v1/badges/b8aeff05-243f-4c40-b5ca-68d0addae48d/deploy-status)](https://app.netlify.com/sites/fleetwood-bounder/deploys)

[Live deployment here!](https://fleetwood-bounder.netlify.app/)


## The Goal
Create a visually interesting character profile gallery using an api for data retrieval.

## Technology Stack

| Technology    	| Use           	  | Description     	|
| :------------------|:-------------------| :----------------	|
| HTML, CSS, JS 			| Languages     | 				  |
| React	| Front-end			  |	JavaScript library for building user interfaces            |
|axios|http client|A library for server communications; Axios is a Promise-based HTTP client that works in both browsers and Node.|

## Project Specifications
* Search Functionality
* Display character profile components
* Retrieve character information from an api
* Employ a loading spinner

## Anatomy of Project


| File/Folder    	| Purpose           	  |
| :------------------|:-------------------|
| src/		 			| create-react-app standard structure|
| src/components/ui/Search.js		 			| Search component    |
|src/components/ui/Spinner.js|Loading indicator component|
| src/components/characters/CharacterGrid.js	 			| Grid container that contains CharacterItem's     |
| src/components/characters/CharacterItem.js| Individual character profile component     |



## License
MIT License

Copyright (c) 2015 Frank Santaguida

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

