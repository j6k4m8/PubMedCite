var $_$ = function(s) {
	return document.querySelectorAll(s);
}

var __cite = function() {
	var authors = $_$('.auths')[0].textContent.replace(/\d/gi, '');
	var title = $_$('.rprt h1')[0].textContent;
	var periodical = $_$('[alsec=jour]')[0].getAttribute('title');
	var dateAndPage = $_$("div.cit")[0]
	    .cloneNode(true);
	dateAndPage.removeChild(dateAndPage.firstChild);
	dateAndPage = dateAndPage.textContent;

	return authors + " \"" + title + "\". "
			+ periodical + dateAndPage + " Web.";
};

prompt("Copy your citation: ", __cite());