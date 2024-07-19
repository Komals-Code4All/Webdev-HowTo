/*  name    : buildTable.js
    author  : Komal Karir
    date    : July 2024

    purpose : This builds an HTML table of clickable <a> tags, that refer to 
            : sample code showing how to do things in HTML, CSS and JavaScript.

            : add more code samples, simply add them to the codeList array.
*/

/* Array to hold program names and their description */
codeList = [
	["bg_gradientFill.html", "Backgrounds", "Use a gradient-fill colour"],
	["bg_imageFixed.html", "Backgrounds", "Set a fixed background image"],
	["bg_patterns.html", "Backgrounds", "Use CSS pattern to fill the background"],

	["button_popupAlert.html", "Buttons", "Have an alert message pop-up"],
	["button_popupInput.html", "Buttons", "Have an input message pop-up"],

	["CSS_displayNone.html", "CSS", "Hide elements using DISPLAY."],
	["CSS_visibilityNone.html", "CSS", "Hide elements using VISIBILITY."],
	["CSS_inlineBlock.html", "CSS", "Make block elements appear in-line"],
	["CSS_roundedCorners.html", "CSS", "Give elements a rounded corner"],

	["autoTitle.html", "Embed", "Extract &lt;title&gt; tag for &lt;h1&gt;header"],
	["embedAudio.html", "Embed", "Insert playable audio on your page"],
	["embedVideo.html", "Embed", "Insert playable video on your page"],

	["characterCodes.html", "Fonts", "Use special characters and emojis"],
	["fonts_fontShadows.html", "Fonts", "Add shadows to text fonts"],
	["fonts_googleFonts.html", "Fonts", "Use Google fonts"],
	["fonts_sizing_EM.html", "Fonts", "Change font sizes relatively using EM "],
	["fonts_sizing_Literals.html", "Fonts", "Change font sizes using literals"],
	["fonts_sizing_REM.html", "Fonts", "Change font sizes using Root-EM "],

	["heroImage.html", "Images", "Insert a Hero image with overlay text"],

	["input_dropDownData.html", "Forms", "Create a drop-down input box"],

	["navbar_top.html", "Navbar", "Have a nav-bar at the top of the webpage"],
	["navbar_topFixed.html", "Navbar", "Have a nav-bar fixed across the top"],

	["RWD_flexbox_Basics.html", "RWD", "Use flexbox for Responsive Web Design"],
	["RWD_flexbox_Example-1.html", "RWD", "Flexbox example"],
	["RWD_fontSizing.html", "RWD", "font sizing"],
	["RWD_pictureTag.html", "RWD", "Use &lt;picture&gt; for RWD"],
	["RWD_rowCols_Basics.html", "RWD", "Using rows and columns"],
	["RWD_rowCols_Example-1.html", "RWD", "Rows and Cols Example 1 "],
	["RWD_rowCols_Example-2.html", "RWD", "Rows and Cols Example 2 "],
	["RWD_rowCols_Example-3.html", "RWD", "Rows and Cols Example 3 "],
];

/* set the default path to each HTML file */
const path = "Examples/";

function makeTable() {
	/* function to process the codeList array and build a single-column table  */

	/* opening table tag */
	let table =
		"<table border=0><thead><tr><td>Category</td><td>Description</td></tr></thead><tbody>";

	/* using each program's file name and description from the array...   */
	/* build a row : <a href="fileName.html" >description</a> */

	for (code in codeList) {
		table += `<tr><td>${codeList[code][1]}</td><td><a href=${path}${codeList[code][0]} target="_blank">${codeList[code][2]}</a></td></tr>`;
	}
	/* closing table tag */
	table += "</tbody></table>";

	return table;
}

table = makeTable();

document.getElementById("codeExamples").innerHTML = table;
