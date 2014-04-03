# Matelsky J. "Efficacy Quantification of Digitalization of Citation Procedures in the Context of Medical Publication." Interwebz, February 2014. Web.


# Concept
Ya know how sometimes people are all like, "hey kid, you need to deliver to me fifty MLA citations of PubMed articles (selected at random) in two minutes... GO"? I do not think that happens, but it would be an exceptional use of this script.

# Execution
I checked out a bunch of pages on PubMed, and for the majority of cases, they follow a pretty similar DOM layout with a pretty mediocre labelling system (which is entirely justifiable because I can't think of any time at which one would really have to be looking at that page source). However, with some clever jQuery tomfoolery, I was able to pick out some common themes between the pages, so I wrote the following script to automatically write up an MLA citation for the current page's article.</p>

#Source</h1>
The JavaScript code is super simple &mdash; the only tricky part was making the decision to <a href="http://youmightnotneedjquery.com/">drop jQuery</a> and write everything from scratch in vanilla JS, which definitely paid off in loadtime. This is the whole script:
```
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
```

# Moving Forward
I'm planning on adding other formats (APA or Chicago, for example) and the ability to copy styled text instead of just plaintext. If you have requests, my email is below.

# Take Home Lesson
Go to a PubMed article overview page (I'm not supplying a sample because I have a sneaking suspicion it's illegal for me to do that...but it looks like `http://www.ncbi.nlm.nih.gov/pubmed/XXXXX`). Plop this Javascript on the page. the <code>__cite()</code> function will return a string (unformatted) that is in proper MLA citation format.

Also don't use this in case it's illegal for me to supply this code.

## ...or use a bookmarklet.
Okay, okay... Here you go.

Just drag this to your bookmarks bar: <a class="bookmarklet" href="javascript: (function () {
var jsCode = document.createElement('script');
jsCode.setAttribute('src', 'https://raw.githubusercontent.com/j6k4m8/PubMedCite/master/pubmedcite.js');
document.body.appendChild(jsCode);
}());">PubMedCite</a> Then, whenever you want to cite a paper, click that link. (This bookmarklet automatically updates, in case I find a bug or add a feature.) Probably not something you need to have on hand all the time, but it'd probably be useful (as is my current situation) when doing some initial research.

If you have any questions or want to say hello (or if you're a PubMed exec coming to tell me I'm not allowed to do this), be sure to <a href='&#109;&#97;ilt&#111;&#58;%&#54;A&#111;&#37;72d&#97;n&#64;matelsky&#46;%6&#51;&#111;m'>get in touch</a>!

<br>
<center>&mdash;<a href="http://jordan.matelsky.com">jordan.matelsky.com</a>&mdash;</center>
