var startDate = new Date("July 01, 2020 00:01");
var endDate = new Date("July 31, 2020 23:59");
var msg = "Try the new <a href='https://rca.summon.serialssolutions.com' target='_blank'>RCA Library Search</a> to find all our resources in one place";

var todayDate = new Date();

if (todayDate >= startDate && todayDate <= endDate) {
   var wrappedmsg = '<div id="systemMsg" class="systemMsg" style="padding:5px; border:1px solid #3333CC; text-align:center; background:#DFDFFF; width:100%">' + msg + '<span style="float:right; text-align:right;"><a onClick="javascript:hideSystemMsg();">[hide]</a></span></div>';
   jQuery('#content').prepend(wrappedmsg);
}

function hideSystemMsg() {
  jQuery('#systemMsg').hide();
}
