//Author: Jakub Grzegorzewski
//to use, open up the browser console on your netflix show and copy and paste one of the following functions

//runs always, to turn off, call:
//clearInterval(netflix_skip_always)
let netflix_skip_always = setInterval(() => {
    let a = document.getElementsByClassName('nf-icon-button')[0], b = document.getElementsByClassName('player-postplay-still-hover-container')[0];
    a ? a.click() : b ?  b.click() : null}, 1000);



//this one runs once, as soon as credits are skipped then the interval is cleared
let netflix_skip_once = setInterval(() => {
    let a = document.getElementsByClassName('nf-icon-button')[0], b = document.getElementsByClassName('player-postplay-still-hover-container')[0];
    a ? a.click() : b ?  (b.click(), clearInterval(netflix_skip_once)) : null}, 1000);
