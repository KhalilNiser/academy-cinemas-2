
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

/**                 ---- BUY_TICKETS_FUNCTION ----
 * Finally. I will need to tell the browser that when the "buyTickets"
 * option button is pressed to go ahead and run the 
 * "displaySelectedMovieOptions" function.
 */
function buyTickets()
{
    displaySelectedMovieOptions();
}

/**                 ---- JQUERY_SHRINK-N-SCROLL ----
 * Shrinks the Header's size when the document is scrolled
 * down to 80px
 */
$( document ).on( "scroll", function() 
{

    /**
     * When the webpage is scrolled down from the top to
     * 50px. The "if-statement" below will trigger
     */
    if( $( document ).scrollTop() > 50 )
    {
        /**
         * Once the 50px requirement has been met. Add the
         * "nav-shrink" class selector to the same HTML element
         * that has the "nav" class
         */
        $( "nav" ).addClass( "nav-shrink" );
        /**
         * Adjust the position of the mobile drop menu. To 
         * accomodate the new height decrease.
         */
        $( "div.navbar-collapse" ).css( "margin-top", "-6px" );
    }
    else
    {
        /**
         * If, the webpage has not been scrolled down or, is 
         * back at the top. The "nav-shrink" class selector
         * is removed from the HTML element with the "nav"
         * class selector.
         */
        $( "nav" ).removeClass( "nav-shrink" );

        /**
         * The margin for the drop down menu. Is now returned to 
         * it's original amount. 
         */
        $( "div.navbar-collapse" ).css( "margin-top", "14px" );
    }
});


// Close mobile menu when a navigation link is clicked
$( document ).ready( function() 
{
    /**
     * On click when and element contains just the nav-link
     * class and not the dropdown-toggle. And then, also 
     * close when an element with the class ".dropdown-item"
     * (each movie link) has been clicked.
     */
    $( "navbar-nav" ).on( 'click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function()
    {
        // Collapse the navbar when the link or dropdown item is clicked
        $( ".navbar-collapse" ).collapse( 'hide' ); 
    });
});

