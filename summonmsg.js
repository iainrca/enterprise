var startDate = new Date("July 01, 2020 00:01");
var endDate = new Date("August 31, 2020 23:59");
var msg = "Try the new <a href='https://rca.summon.serialssolutions.com' target='_blank'>RCA Library Search</a> to find all our resources in one place";

var todayDate = new Date();

if (todayDate >= startDate && todayDate <= endDate) {
   var wrappedmsg = '<div id="systemMsg" class="systemMsg" style="padding:5px; text-align:center; background:#fff; width:100%; font-size:large">' + msg + '<span style="float:right; text-align:right;"></span></div>';
   jQuery('#content').prepend(wrappedmsg);
}
