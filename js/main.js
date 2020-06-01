const WORD = "Lorem";
const MINI_TEXT = "Lorem ipsum dolor sit amet";
const SMALL_TEXT = "Lorem ipsum dolor sit amet, ad congue postea eos. Ad pri nulla graeci, \
eam ne ornatus appetere, quo rebum alienum.";
const LARGE_TEXT = "Lorem ipsum dolor sit amet, decore dignissim ne usu. Vel omnes meliore \
menandri ea. Facer melius eruditi no mei, an semper molestiae eos. At viris tibique adipisci \
ius, usu an omnes doming dissentiunt. Zril detraxit reformidans his te.";
const MAX_NEW_ARTICLES = 3;
const MAX_OLD_ARTICLES = 6;
const MAX_PEOPLE = 4;
const MAX_GUIDES = 4;
const MAX_LIST = 6;

function createList(){
	let list = document.createElement("ul");
	for(let i = 0; i < MAX_LIST; i++){
		listItem = document.createElement("li");
		listItem.innerHTML = WORD;
		list.appendChild(listItem);
	}
	return list;
}

function generateNewArticles(){
	let newArticlesDiv = document.getElementById("site-main-new-articles");
	/* The newest articles are three, so we loop three times to create them */
	for(let i = 0; i < MAX_NEW_ARTICLES; i++){
		let article = document.createElement("div");
		article.setAttribute("class", "new-articles");
		let photo = document.createElement("div");
		photo.setAttribute("class", "photo");
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

function generateOldArticles(){
	let oldArticlesDiv = document.getElementById("site-main-old-articles");
	/* The old articles are six, so we loop six times to create them */
	for(let i = 0; i < MAX_OLD_ARTICLES; i++){
		let article = document.createElement("div");
		article.setAttribute("class", "old-articles");
		let title = document.createElement("h2");
		title.innerHTML = MINI_TEXT;
		let description = document.createElement("h4");
		description.innerHTML = SMALL_TEXT;

		article.appendChild(title);
		article.appendChild(description);
		oldArticlesDiv.appendChild(article);
	}
}

function generatePeople(){
	let peopleDiv = document.getElementById("site-main-people");
	/* Generate 4 people */
	for(let i = 0; i < MAX_PEOPLE; i++){
		let people = document.createElement("div");
		people.setAttribute("class", "people");
		let photo = document.createElement("div");
		photo.setAttribute("class", "photo");
		let name = document.createElement("h4");
		name.innerHTML = MINI_TEXT;
		let latestArticleTitle = document.createElement("h2");
		latestArticleTitle.innerHTML = MINI_TEXT;
		let latestArticleBody = document.createElement("h3");
		latestArticleBody.innerHTML = SMALL_TEXT;

		people.appendChild(photo);
		people.appendChild(name);
		people.appendChild(latestArticleTitle);
		people.appendChild(latestArticleBody);
		peopleDiv.appendChild(people);
	}
}

function generateGuides(){
	let guidesDiv = document.getElementById("site-main-guides");
	/* Generate 4 guides */
	for(let i = 0; i < MAX_PEOPLE; i++){
		let guide = document.createElement("div");
		guide.setAttribute("class", "guide");
		let title = document.createElement("h2");
		title.innerHTML = SMALL_TEXT;
		let list = createList();

		guide.appendChild(title);
		guide.appendChild(list);
		guidesDiv.appendChild(guide);
	}
}

function pageLoaded(){
	generateNewArticles();
	generateOldArticles();
	generatePeople();
	generateGuides();
}
