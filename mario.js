//The first line invokes a function called printPyramid, passing in the number 5 as an argument.
//printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 *      The printPyramid function is supposed to render to the console a "pyramid"
 *      (whatever that means) of the specified height.
 *      Your job is to implement the printPyramid function, using console.log statements to print a half-pyramid,
 *      like the one above, to the console. You can use a "#" symbol for each "brick".
 */
function printPyramid(height, symbol) {


    var row = '';
    for (var rowIndex = 1; rowIndex <= height + 1; rowIndex++) {

        var layer = document.createElement('p');

        for (var whiteSpaceIndex = 0; whiteSpaceIndex  <= (height - rowIndex); whiteSpaceIndex++) {

            layer.textContent += '\u00A0';
        }


        for (var contentIndex = 1; contentIndex <= rowIndex; contentIndex++) {
            layer.textContent += symbol;

        }


        document.getElementById('pyramid').appendChild(layer);


    }

    var cts = document.getElementById("construction");

    cts.parentNode.removeChild(cts);
    cts.textContent = ' ';

    console.log(row);

    //return layer;
}

function clearPyramid() {
    document.getElementById('pyramid').innerHTML = " \
            <div id='construction'> \
                <p id='notice'>Uh oh! the pyramid is still under construction.</p> \
                <p>Check back again soon... our developers are hard at wrk as we speak!</p> \
            </div>";
}

function updateGraph() {
    var level = parseInt(document.getElementById('levels').value) // importante por que inicialmente el valor es un string
    // actualiza el text
    document.getElementById('level_text').value=level;

    clearPyramid();
    printPyramid(level, '@');
}


printPyramid(5, '#');


