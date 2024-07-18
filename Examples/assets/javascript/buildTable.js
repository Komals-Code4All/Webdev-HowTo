/*  name    : buildTable.js
    author  : Komal Karir
    date    : July 2024

    purpose : This builds an HTML table of clickable <a> tags, that refer to 
            : sample code showing how to do things in HTML, CSS and JavaScript.

            : add more code samples, simply add them to the codeList array.
*/

/* Array to hold program names and their description */
codeList = [
	["autoTitle.html", "Extract &lt;title&gt; tag for &lt;h1&gt;header"],
	["bgImage_fixed.html", "Set a fixed background image"],
	["bgPatterns.html", "Background patterns using CSS"],
	["button_popupAlert.html", "Have an alert message pop-up"],
	["button_popupInput.html", "Have an input message pop-up"],
	["characterCodes.html", "Use special characters and emojis in your code"],
	["CSS_inlineBlock.html", "How to make block elements appear in one line"],
	["CSS_roundedCorners.html", "Give elements a rounded corner using CSS"],
	["embedAudio.html", "Embed playable audio on your page"],
	["embedVideo.html", "Embed playable video on your page"],
	["fonts_fontShadows.html", "Add shadows to text fonts"],
	["fonts_googleFonts.html", "Use Google fonts"],
	["font_sizing_EM.html", "Change font sizes relatively using EM "],
	["font_sizing_Literals.html", "Change font sizes using relative literals"],
	["font_sizing_REM.html", "Change font sizes using Root-EM "],
	["heroImage.html", "Insert a Hero image with overlay text"],
	["input_dropDownData.html", "Create a drop-down input box"],
	["navbar_top.html", "Have a nav-bar at the top of the webpage"],
	["navbar_topFixed.html", "Have a nav-bar fixed across the top"],
	["RWD_flexbox_Basics.html", "Use flexbox for Responsive Web Design"],
	["RWD_flexbox_Example-1.html", "Flexbox example"],
	["RWD_fontSizing.html", "Use RWD font sizing"],
	["RWD_pictureTag.html", "Use &lt;picture&gt; for RWD"],
	["RWD_rowCols_Basics.html", "RWD using rows and columns"],
	["RWD_rowCols_Example-1.html", "RWD Rows and Cols Example 1 "],
	["RWD_rowCols_Example-2.html", "RWD Rows and Cols Example 2 "],
	["RWD_rowCols_Example-3.html", "RWD Rows and Cols Example 3 "],
];

/* set the default path to each HTML file */
const path = "Examples/";

function makeTable() {
	/* function to process the codeList array and build a single-column table  */

	/* opening table tag */
	let table =
		"<table style='margin-left : 20px ; padding: 5px;'  border=0><tbody>";

	/* using each program's file name and description from the array...   */
	/* build a row : <a href="fileName.html" >description</a> */

	for (code in codeList) {
		table += `<tr><td style='padding: 6px;'><a href=${path}${codeList[code][0]} target="_blank">${codeList[code][1]}</a></td></tr>`;
	}
	/* closing table tag */
	table += "</tbody></table>";

	return table;
}

table = makeTable();

document.getElementById("codeExamples").innerHTML = table;
