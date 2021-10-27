
//    function autoFill() {
//	document.getElementById("q").placeholder = " Search the Catalogue";
//	}
//	window.onload=autoFill;

/* Change the Behaviour of the New Search Link so that it opens Summon in existing window so users can carry on searching.*/  

function summonback() {
const summonlink = "<a target='_self' href='https://rca.summon.serialssolutions.com/search'>New Search</a>";
document.getElementById('Quicksearch_NEWSEARCH').innerHTML = summonlink;
}
window.onload=summonback;

// ShelfMap
$(document).ready(function() {
  
  var validSMLocs=["ONSHELF","REFERENCE","QR","PAMPHLET","PER_CURR","OVERSIZE","EAP","DYSLEXIA","FUELRCA","CRLCC"];
  var pathname = window.location.pathname;
  var bibid = pathname.match(/SD_ILS:.*[0-9]/);
  //var Loc = $('div.asyncFieldSD_ITEM_STATUS');
  //if(validSMLocs.indexOf(Loc) !== -1) {
     $('tr.detailItemsTableRow td.detailItemsTable_CALLNUMBER').each(function () {
       $( "<div id='shelfmap'><a href='https://app.shelfmap.co.uk/fp/fp?icode=44RCA&id=" + bibid + "' target='_blank' class='ShelfMap_anchor' title='Show item on ShelfMap'><img src='https://iainrca.github.io/summon/v2.svg' alt='ShelMap drop pin' height = '75px' width='75px'/>View Shelf Location</a></div></br>").insertAfter( $(this) );
     });
  //}
  
});

  
