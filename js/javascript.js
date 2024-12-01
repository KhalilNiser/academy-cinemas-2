
// ---- INITIALIZE_POPOVERS ----
const popoverTriggerList = document.querySelectorAll( '[ data-bs-toggle="popover" ]' );

/**
 * The "element" argument represents each item in the popoverTriggerList
 * array.
 */
popoverTriggerList.forEach( function( element )
{
    /**
     * Variable "imgSrc". Gets the image path from the data
     * attribute "'data-bs-img'". And then I pass that data
     * into the "content" variable that holds the "html" image
     * tag to insrt when the "popover" is triggered.
     */
    var imgSrc = element.getAttribute( 'data-bs-img' );
    var content = "<img class='star-rating' src='" + imgSrc + "'>";

    new bootstrap.Popover( element, 
        {
            /**
             * (content: content), sets the content of the "popover"
             * (Inside index.html) to the content variable which 
             * contains the html "String for the image".
             */
            content: content,
            // Indicates the content is HTML
            html: true,
            /**
             * Sets the trigger event for the popover to hover 
             * so it will show when the user hovers over the 
             * element.
             */
            trigger: 'hover'
        });
});


// ---- INITIALIZE_TOAST ----
/*const toastElList = document.querySelectorAll( '.toast' );
const toastList = [...toastElList].map( toastEl => new bootstrap.Toast(toastEl ) );*/



const toastElList = [].slice.call( document.querySelectorAll( '.toast' ) )

const toastList = toastElList.map( function( toastEl )
{
    return new bootstrap.Toast( toastEl )
})



// Function to display toast with selected optionss
function displaySelectedMovieOptions()
{
    var movie = document.getElementById( 'movieSelect' ).options[ document.getElementById( 'movieSelect' ).selectedIndex ].text;
    var time = document.getElementById( 'timeSelect' ).options[ document.getElementById( 'timeSelect' ).selectedIndex ].text;
    var quantity = document.getElementById( 'quantity' ).value;

    var message = "Purchase Confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    /**                 ---- DISPLAY_TOAST ----
     * Here I created a new variable "toastBody" to get the HTML
     * element with the CSS class ".toastBody".
     * The "textCntent" property sets a new value for the toastBody
     * variable, and in this case I assigned it to the "message", 
     * delcared above.
     * "bootstrap.toast", creates a new instance of toast associated
     * with the element identified by the id "toastDisplay", to which
     * I will add to the div element that holds the toast HTML.
     */
    var toastBody = document.getElementById( 'toastBody' );
    toastBody.textContent = message;

    var toast = new bootstrap.Toast( document.getElementById( 'toastDisplay' ) );
    toast.show()
}

/**                 ---- BUYTICKETS_FUNCTION ----
 * Finally. I will need to tell the browser that when the "buyTickets"
 * option button is pressed to go ahead and run the 
 * "displaySelectedMovieOptions" function.
 */
function buyTickets()
{
    displaySelectedMovieOptions();
}