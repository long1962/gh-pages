/*********************************************************/
/*** Create an overlay with the large image - Lightbox ***/
/*********************************************************/
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image to overlay
$overlay.append($image);
//A caption to overlay
$overlay.append($caption);

// Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$(".overlay a").click(function(event) {
   /* Stops the default behavior */
  event.preventDefault();                        
    var imageLocation = $(this).attr("href");
    //Update overlay with the image linked in the link
    $image.attr("src", imageLocation);
    //Show the overlay.
    $overlay.show(); 
    
 //Get child's alt attribute and set caption
var captionText = $(this).children("img").attr("alt");
$caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
<<<<<<< HEAD
});
=======
}); 
>>>>>>> a04a7e66735f8a978e86e2148d9f7e7898848e2b
