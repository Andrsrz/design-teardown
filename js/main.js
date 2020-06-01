const MINI_TEXT = "Lorem ipsum dolor sit amet";
const SMALL_TEXT = "Lorem ipsum dolor sit amet, ad congue postea eos. Ad pri nulla graeci, \
eam ne ornatus appetere, quo rebum alienum.";
const LARGE_TEXT = "Lorem ipsum dolor sit amet, decore dignissim ne usu. Vel omnes meliore \
menandri ea. Facer melius eruditi no mei, an semper molestiae eos. At viris tibique adipisci \
ius, usu an omnes doming dissentiunt. Zril detraxit reformidans his te.";
const MAX_NEW_ARTICLES = 3;

function generateNewArticles(){
	let newArticlesDiv = document.getElementById("site-main-new-articles");
	/* The newest articles are three, so we loop three times to create them */
	for(let i = 0; i < MAX_NEW_ARTICLES; i++){
		let article = document.createElement("div");
		article.setAttribute("class", "new-articles");
		let photo = document.createElement("div");
		photo.setAttribute("class", "new-articles-photo");
		let author = document.createElement("h3");
		author.innerHTML = MINI_TEXT;
		let title = document.createElement("h1");
		title.innerHTML = SMALL_TEXT;

		article.appendChild(photo);
		article.appendChild(author);
		article.appendChild(title);
		newArticlesDiv.appendChild(article);
	}
}

function pageLoaded(){
	generateNewArticles();
}
