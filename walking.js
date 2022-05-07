// ==UserScript==
// @name         the Man👨who walked the WorlD
// @namespace    http://tampermonkey.net/
// @version      0.422 
// @description  mash up somethings to make a thing to show things over things with the other things and who owned them things
// @author       @KaTZWorlD find me on twitter or in the discord
// @match        http*://play.tmwstw.io/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @icon         https://avatars.githubusercontent.com/u/3157472
// @grant        none
// ==/UserScript==

// Your code here... dont know code  sorry  ?
jQuery(document).ready(function() {  /// changesit from green to black on a fade 
    jQuery('*:contains("SIGN"):not(:has(*))').css('background-color', 'green').click(function() {
        jQuery("#sign_but").fadeToggle(2500).css('background-color', 'black');
    });
});

(function() {
    jQuery('#resource_sound').prop('muted', true) ///shhhhhhhh during cliams router usage now 
    let p = jQuery(".plot_id") // plot got tired of typing it P it is !
    let globe = 'https://claim.tmwstw.io/data/previews/'
    let apiUrl = 'https://api.tmwstw.io/'

    p.bind('DOMSubtreeModified', function() { callsToApi(p); }) //when the plot change run the changes 

    function callsToApi(p) {
        jQuery('#plot_id').hide() // we display it on the img in the katbox now
        jQuery('#theImg').hide() //hide the globe before update just like houdini
        whoOwnThis(p) //who owns this ?
        makeTheGlobe(p) //where are we

    }

    function whoOwnThis(p) {
        jQuery('#katbox').remove(); //clean the liter box
        this.plot = p.text().split('#')[1] //just the number
            //grab that put a new elem with the owner info above the globe
        let whoFromApi = new URL('/owner_of_plot=' + this.plot, apiUrl)
        fetch(whoFromApi)
            .then(response => response.text())
            .then(data => jQuery('#theImg').before('<h3 class="side_note_txt" id="katbox">' + data))
            //jQuery('#katbox').empty();  //clean the liter box
    }

    function makeTheGlobe(p) { //get the p from the other function
        this.plot = p.text().split('#')[1] //just the number
        let globeThing = new URL(this.plot + ".jpg", globe); //make the URL
        jQuery('#side_notes').prepend(jQuery('<img>', { id: 'theImg', src: globeThing.href })) //add that into the sides notes spot
        jQuery('#theImg').width(222) //dress it up
        jQuery('#theImg').height(222) //change this ?
    }

    //'use strict';
    //still nothing here WTF?!
})();
