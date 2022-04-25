// ==UserScript==
// @name         the Man👨who walked the WorlD
// @namespace    http://tampermonkey.net/
// @version      0.420
// @description  mash up somethings to make a thing to show things over things with the other things and who owned them things
// @author       @KaTZWorlD find me on twitter or in the discord
// @match        http*://*.tmwstw.io/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==


let p = jQuery(".plot_id") // plot got tired of typing it P it is !
let globe = 'https://claim.tmwstw.io/data/previews/'

p.on('DOMSubtreeModified', function() { whoOwnsThis(p); })

function whoOwnsThis(p) { //get the p from the other function
    jQuery('.side_notes').html('<h3 class="side_note_txt">This.Plot belongs to: </h3>'); //this dot
    this.plot = p.text().split('#')[1] //just the number
    let xhttp = new XMLHttpRequest();
    let urlWorld = "https://api.tmwstw.io/owner_of_plot="; //API
    xhttp.open("GET", urlWorld + this.plot, true); //make that connection
    xhttp.onload = () => { //still got a bad input ?
        if (this.readyState == 4 && this.status == 200) { //ok 5 x 5

            let data = xhttp.response;
        }
        jQuery('.side_notes').append(data)

    };
    xhttp.send();
    //lets do the globe
    let globeThing = new URL(this.plot + ".jpg", globe); //make the URL
    jQuery('#side_notes').prepend(jQuery('<img>', { id: 'theImg', src: globeThing.href })) //add that into the sides notes spot
    jQuery('#theImg').width(200) //dress it up
    jQuery('#theImg').height(200) //change this ?
}


(function() {
    'use strict';
    // Your code here... dont know code  sorry  ?
})();