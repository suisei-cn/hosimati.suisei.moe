var javascriptLocales = {
	"copyMessage": "Just wanted to let you know that Satania is always with you! Even inside your clipboard! We are everywhere and you should really join us!\n" +
		"Also yes, any website can access your clipboard however they want, isn't that creepy?\n" +
		"Regardless, Satania is the BEST WAIFU, and you should agree! http://satania.moe/",
	"searchByVoice": "lmao, no one uses this button",
	"searchButton": "but the results are already there =]",
	"searchBar": "this isn't a real search bar",
	"snedHelp": "pls send helppp",
	"perfection": "perfection"
}

var copied = false;
document.body.onclick = function() {
	if (!copied) {
		var selection = window.getSelection();

		var previousSelection = []; // Array where the previous selections are stored

		for (let i = 0; i < selection.rangeCount; i++) {
			// Loops over every selections and add them to the array
			previousSelection[i] = selection.getRangeAt(i);
		}

		// Clear all the previous selections (we'll re-select them later)
		selection.removeAllRanges();

		var range = document.createRange(), // Our new selection that will contain the text to copy
			selectionElement = document.createElement("span"); // The hidden element that will contain the text that will be selected

		// Add the text to the element
		selectionElement.innerText = javascriptLocales.copyMessage;

		// Add CSS rules that should theorically prevent the hidden element from impacting the page layout in any way
		selectionElement.setAttribute("style", "position:absolute !important;top:-9999vh !important;opacity:0 !important;height:0 !important;width:0 !important;pointer-events:none !important;z-index:-9999 !important;");

		// Add the element to the document (We hade to, in order to select it)
		document.body.appendChild(selectionElement);

		// Make the range select the entire content of the element
		range.selectNodeContents(selectionElement);

		// Add that range to the selection.
		selection.addRange(range);

		// Copy the selection to clipboard.
		document.execCommand('copy');

		// Clear the selection
		selection.removeAllRanges();

		// Remove the hidden element
		document.body.removeChild(selectionElement);

		for (let i = 0; i < previousSelection.length; i++) {
			// Re-select everything that was selected
			selection.addRange(previousSelection[i]);
		}

		copied = true;
	}
}

var links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
	links[i].onclick = function(e) {
		e.preventDefault();
		window.open(this.href, '_blank').focus();
	}
	links[i].title = "Link opens in a new tab.";
}

var slideshows = document.getElementsByClassName("slideshow");
var preloadedImages = [];

for (let i = 0; i < slideshows.length; i++) {
	let slideshow = slideshows[i],
	slides = slideshow.getElementsByTagName("img");

	slideshow.currentSlide = 0;

	slideshow.getElementsByClassName("source")[0].href = slides[0].getAttribute("href");

	window.setInterval(function() {
		slides[slideshow.currentSlide].classList.remove("shown");
		slideshow.currentSlide = (slideshow.currentSlide + 1) % slides.length;
		slides[slideshow.currentSlide].classList.add("shown");

		slideshow.getElementsByClassName("source")[0].href = slides[slideshow.currentSlide].getAttribute("href");
	}, 2500);

	// Image preloading
	for (let i = 0; i < slides.length; i++) {
		preloadedImages.push(new Image().src = slides[i].src);
	}
}

var searchbar = document.getElementById("searchbar");

searchbar.onclick = function(e) {
	if (e.target.id === "search-by-voice") {
		searchbar.getElementsByTagName("span")[0].innerText = javascriptLocales.searchByVoice;
	} else if (e.target.id === "search-button") {
		searchbar.getElementsByTagName("span")[0].innerText = javascriptLocales.searchButton;
	} else {
		searchbar.getElementsByTagName("span")[0].innerText = javascriptLocales.searchBar;
	}

	window.setTimeout(function() {
		searchbar.getElementsByTagName("span")[0].innerText = "satania";
	}, 2000);
}

// thx http://stackoverflow.com/a/13348618
// Search by Voice is a Google Chrome only feature, so we must hide the button for unsupported browsers

var isChromium = window.chrome,
	winNav = window.navigator,
	vendorName = winNav.vendor,
	isOpera = winNav.userAgent.indexOf("OPR") > -1,
	isIEedge = winNav.userAgent.indexOf("Edge") > -1,
	isIOSChrome = winNav.userAgent.match("CriOS");


if (isIOSChrome || (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false)) {
	document.getElementById("search-by-voice").style.display = "block";
}

var audioPlayingAtOnce = 0;

document.getElementById("listen").onclick = function() {
	"use strict";
	var audio = new Audio();
	audio.src = "perfection.mp3";
	audio.play();

	audio.addEventListener("ended", function() {
		audioPlayingAtOnce--;

		if (audioPlayingAtOnce < 8) {
			document.getElementById("definition-name").innerText = javascriptLocales.perfection;
		}
	});

	audioPlayingAtOnce++;

	if (audioPlayingAtOnce > 10) {
		document.getElementById("definition-name").innerText = javascriptLocales.snedHelp;
	}
}

document.getElementById("card-container").onclick = function(e) {
	// It is possible that e.target is a child of the card
	// Quality code to solve that problem :ok_hand: :ok_hand: :ok_hand:
	if (e.target.classList.contains("question") || e.target.classList.contains("answer")) {
		var card = e.target.parentElement;
	} else if (e.target.tagName.toLowerCase() === "img" || e.target.tagName.toLowerCase() === "b") {
		var card = e.target.parentElement.parentElement;
	} else {
		var card = e.target;
	}

	card.classList.toggle("flipped");
}

var laughKeys = [38,38,40,40,37,39,37,39,66,65],
    laughPos = 0,
    laughing = false;

document.body.onkeyup = function(e) {
    "use strict";
    if (!laughing) {
        var key = e.keyCode;
        if (key == laughKeys[laughPos]) {
            laughPos++;
            if (laughPos == 10) {
                laughPos = 0;
                laughing = true;

                var audio = new Audio();
                audio.src = "laugh.mp3";
                audio.play();

                audio.addEventListener("ended", function() {
                    laughing = false;
                });
            }
        } else {
            laughPos = 0;
        }
    }
}
