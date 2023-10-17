/*
    Programmer: Chris Heise (crheise@icloud.com)
    Course: BSSD 4350 - Agile Methodologies
    Instructor: Jonathan Lee
    Program: Second Page POC
    Purpose: Test embedding a Hugging Face space in a GitHub hosted page.
*/

// TODO: Add event listener for resize of window to resize iframe

var w = window.innerWidth;
var h = window.innerHeight;

const secondPage = document.createElement('iframe');
secondPage.src = "https://cheisenmhu-secondpagepoc.hf.space";
secondPage.setAttribute('frameborder', '0');
secondPage.setAttribute('width', w + 'px');
secondPage.setAttribute('height', h + 'px');

document.getElementById('root').appendChild(secondPage);
