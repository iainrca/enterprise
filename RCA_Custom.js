
    function autoFill() {
	document.getElementById("q").placeholder = " Search the Catalogue";
	}
	window.onload=autoFill;

/* Change the Behaviour of the New Search Link so that it opens Summon in existing window*/  

const summonlink = "<a target='_self' href='https://rca.summon.serialssolutions.com'>New Search</a>"
document.getElementById('Quicksearch_New Search').innerHTML = summonlink
	


