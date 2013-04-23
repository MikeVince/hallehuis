// Set up our options for the slideshow...
var myOptions = {
    noImages: 3, // Number of images
    path: "img/", // Relative path with trailing slash.
    
    links: { // Should the images link anywhere? if no links are required at all then this option can be omitted.
        1:"http://www.google.com",
        2:"http://www.yahoo.com",
        3:""
    },
    linksOpen:'newWindow', // How to open links? sameWindow or newWindow.
    timerInterval: 6500, // 6500 = 6.5 seconds
    randomise: false // Start with random image? true=yes/false=no
};

// Initiate the Easy Slides plugin, assigning it to your contaner DIV...
$('#example_1_container').easySlides(myOptions);
