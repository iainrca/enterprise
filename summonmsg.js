var startDate = new Date("July 01, 2020 00:01");
var endDate = new Date("October 31, 2020 23:59");
var msg = "<a href='https://moodle.rca.ac.uk/course/view.php?id=9&section=4' target='_blank'>Find out how to Reserve & Collect from the Neutral Zone, Kensington</a>";

var todayDate = new Date();

if (todayDate >= startDate && todayDate <= endDate) {
   var wrappedmsg = '<div id="systemMsg" class="systemMsg" style="padding:5px; text-align:center; background:#fff; width:100%; font-size:large; color:#eb5e2b;">' + msg + '<span style="float:right; text-align:right;"></span></div>';
   jQuery('#content').prepend(wrappedmsg);
}
