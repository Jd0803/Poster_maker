
var borders = ["None","Default", "Grove", "Flower"];
var elements = ["None","Fish","Elephant","Namsate"];
var insides = ["None","OrangeGrove","YellowFlower","PinkPaw","RedLeaves","Bluecarving"];
var sidedesigns = ["None","Groved","Traditional","Flower"];
var backgrounds = ["Lightblue","Red","Yellow","Purple"];
var centershapes = ["Magnum","Fancy"];
var corners = ["None","Flower","Leaves","Rose","carving",];
var topandbottoms = ["None","Leafs","Flower","Lotus"];
var glasses = ["None","Check","wood"];


var current_skincolor = "edb98a";
var currentBorder = "close";
var currentElement = "Fish";
var currentInside = "twinkle";
var currentCorner = "Flower";
var currentBackground = "longhaircurly";
var currentCentershape = "magnum";
var currentSidedesign = "harry";
var currentTopandbottom = "harry";
var currentGlasses = "wood";


$(document).ready(function() {
    $("body").delegate("#menu_list button","click",function() {
        var id = $(this).attr("id");
        if (id=="poster") {
            var current_border;
            $("#border g").each(function() {
                if ($(this).css("display") == "inline") {
                    id = $(this).attr("id");
                    current_border = id.substr(2);
                }
            });
            var current_element;
            $("#element g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_element = id.substr(2);
                }
            });
            var current_inside;
            $("#inside g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_inside = id.substr(2);
                }
            });
            var current_background;
            $("#background g").each(function() {
                if ($(this).css("display") == "inline") {
                    id = $(this).attr("id");
                    current_background = id.substr(3);
                }
            });
            var current_centershape = "none";
            $("#centershape g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_centershape = id.substr(2);
                }
            });
            var current_corner;
            $("#corner g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_corner = id.substr(2);
                }
            });
            var current_glasses = "none";
            $("#glasses g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_glasses = id.substr(2);
                }
            });
            var current_sidedesign = "none";
            $("#sidedesign g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_sidedesign = id.substr(2);
                }
            });
            var current_topandbottom = "none";
            $("#topandbottom g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_topandbottom = id.substr(2);
                }
            });
        
        } else {
            var selected = $(this).html();
            $("#options_title").html("SELECT "+selected);
            $("#options_div").html("");
            var html = "";
            switch (id) {
                case "border":
                    for (i = 0; i < borders.length; i++) {
                        border = borders[i];
                        html += "<div class='border' id='b_" + border + "'>" + border + "</div>";                
                        }
                    break;
                case "element":
                    for (i=0;i<elements.length; i++) {
                        element = elements[i];
                        html += "<div class='element' id='e_" + element + "'>" + element + "</div>";                   
                     }
                    break;
                case "inside":
                    for (i=0;i<insides.length; i++) {
                        inside = insides[i];
                        html += "<div class='inside' id='m_"+inside +"'>" + inside + "</div>";
                    }
                    break;
                case "centershape":
                    for (i=0;i<centershapes.length; i++) {
                        centershape = centershapes[i];
                        html += "<div class='centershape' id='f_"+centershape+"'>"+centershape +"</div>";
                    }
                    break;
                case "corner":
                    for (var i=0;i<corners.length; i++) {
                        corner = corners[i];
                        html += "<div class='corner' id='c_"+corner+"'>" + corner + "</div>"; 
                    }
                    break;
                case "background":
                        for (i=0; i<backgrounds.length; i++) {
                            background = backgrounds[i];
                            html += "<div class='background' id='bg_"+background +"'>" + background + "</div>";                        }
                    break;
                case "glasses":
                    for (var i=0;i<glasses.length; i++) {
                        glass = glasses[i];
                        html += "<div class='glasses' id='g_"+glass+"'>" + glass + "</div>";
                    }
                    break;
              
                case "sidedesign":
                    for (var i=0;i<sidedesigns.length; i++) {
                        sidedesign = sidedesigns[i];
                        html += "<div class='sidedesign' id='t_"+sidedesign +"'>" +sidedesign + "</div>";
                    }
                    break;
                case "topandbottom":
                    for (var i=0;i<topandbottoms.length; i++) {
                        topandbottom = topandbottoms[i];
                        html += "<div class='topandbottom' id='a_"+topandbottom +"'>" +topandbottom + "</div>";
                    }
                    break;
            }
            $("#options_div").html(html);
            // $("#menu_lines").click();
        }
    });

    
    
    $("body").delegate(".skins","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        current_skincolor = id;
        $("#skin #body").attr("fill","#"+id);
    });
    $("body").delegate(".border", "click", function() {
        var id = $(this).attr("id");
        id = id.substr(2); // Change to 7 to remove the "border_" prefix
        $("#border g").hide();
        $("#border #b_" + id).show();
        currentBorder = id; 
    });
    $("body").delegate(".element","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#element g").hide();
        $("#element #e_"+id).show();
        currentElement = id; 

    });
    $("body").delegate(".inside","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#inside g").hide();
        $("#inside #m_"+id).show();
        currentInside = id; 
    });
    $("body").delegate(".background","click",function() {
        var id = $(this).attr("id");
        id = id.substr(3);
        $("#background g").hide();
        $("#background #bg_" + id).show();
        currentBackground = id;
    });
    $("body").delegate(".centershape","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#centershape g").hide();
        $("#centershape #f_"+id).show();
        currentCentershape = id;

    });
    $("body").delegate(".corner","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#corner g").hide();
        $("#corner #c_"+id).show();
        currentCorner = id; 

    }); 
    $("body").delegate(".glasses","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#glasses g").hide();
        $("#glasses #g_"+id).show();
        currentGlasses = id;

    });
    $("body").delegate(".sidedesign","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#sidedesign g").hide();
        $("#sidedesign #t_"+id).show();
        currentSidedesign = id;

    });
    $("body").delegate(".topandbottom","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#topandbottom g").hide();
        $("#topandbottom #a_"+id).show();
        currentTopandbottom = id;

    });
    
})


function updateText() {
    // Get the input text
    let inputText = document.getElementById('textInput').value;
    
    // Update the text element in the SVG
    let textElement = document.getElementById('textElement');
    textElement.textContent = inputText;
}



function printDiv(poster) {
    var printContents = document.getElementById(poster).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}





// var myFont = new FontFace('myFont', 'url(./Fonts/Rapsodia-Extras_B.woff2)');
// var ctx = canvas.getContext("2d");

function takeshot() {
    window.scrollTo(0, 0);
    
    let div = document.getElementById('poster');
    // div.innerHTML = 'hello';
    div.style.fontFamily = '"Rye", serif';

    // let textElement = document.querySelector('#textElement');
    // textElement.style.fontFamily = '"Rye", serif';
    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div

    // computedStyleToInlineStyle(div, {
    //     recursive: true,
    //     properties: ["font-size", "font-family", "font-weight"]
    // });

    html2canvas(div).then(
        
        function (canvas) {
            document .getElementById('output') .appendChild(canvas);

            // canvas.style.width  = '555px';
            // canvas.style.height = '660px';
            // canvas.style.border = '2px solid orange'
           
           

            // Download the canvas image
            downloadCanvas();


        })
}

function downloadCanvas() {
    let canvas = document.querySelector('#output canvas');

    // var myFont = new FontFace('Rapsodia-Extras_B', 'url(./Fonts/Rapsodia-Extras_B.woff2)');
    // var ctx = canvas.getContext("2d");

    // myFont.load();
    // document.fonts.add(myFont);

    let link = document.createElement('a');
    link.download = 'Poster.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Define a variable to hold the interval ID
var intervalId;

// Function to start the auto-refresh
function startAutoRefresh() {
    intervalId = setInterval(function() {
        // Add your refresh logic here
        location.reload();
    }, 500000); // Refresh every 5 seconds (5000 milliseconds)
}

// Function to stop the auto-refresh
function stopAutoRefresh() {
    clearInterval(intervalId);
}

// Start the auto-refresh
startAutoRefresh();

// To stop the auto-refresh, call stopAutoRefresh()
// stopAutoRefresh();

// html2canvas(document.getElementById('your-div-id')).then(function(canvas) {
//     var image = canvas.toDataURL(); // base64 encoded image data
//     // Now you can save the image or do something else with it
// });


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#menu_list button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');
            // Call a function to handle button click
            handleButtonClick(button);
        });
    });
});