var m_list = document.getElementById("m-playlist");
var tbody = m_list.getElementsByTagName("tbody")[0];
var tr_list = tbody.getElementsByTagName("tr");

var w = window.open();
w.document.open();
w.document.write('[');

function toUnicode(theString) {
	var unicodeString = '';
	for (var i = 0; i < theString.length; i++) {
		var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
		while (theUnicode.length < 4) {
     	theUnicode = '0' + theUnicode
		}
	theUnicode = '\\u' + theUnicode;
	unicodeString += theUnicode
	}
	return unicodeString
}

for (var i = 0; i < tr_list.length; i++) {
	var td_list = tr_list[i].getElementsByTagName("td");
	var mid = td_list[2].getElementsByTagName("span")[2].dataset.resId;
	var mhref = td_list[1].getElementsByTagName("a")[0].href;
	var mtitle = toUnicode(td_list[1].getElementsByTagName("b")[0].innerHTML);
	var mtime = td_list[2].getElementsByTagName("span")[0].innerHTML;
	var mpic = td_list[2].getElementsByTagName("span")[2].dataset.resPic;
	var mauthor = toUnicode(td_list[3].getElementsByTagName("span")[0].title);
	var mauthorHrefA_list = td_list[3].getElementsByTagName("a");
	var mauthorHref_author = new Array();
	var mauthorHref = new Array();
	var malbum = toUnicode(td_list[4].getElementsByTagName("a")[0].title);
	var malbumHref = td_list[4].getElementsByTagName("a")[0].href;

	w.document.write('{"' + mid + '":{');
	w.document.write('"href":"' + mhref + '",');
	w.document.write('"title":"' + mtitle + '",');
	w.document.write('"time":"' + mtime + '",');
	w.document.write('"pic":"' + mpic + '",');
	w.document.write('"author":"' + mauthor + '",');
	/* w.document.write('"authorHref":{"');
	if (mauthorHrefA_list.length > 0) {
		for (var q = 0; q < mauthorHrefA_list.length; q++) {
			mauthorHref_author[q] = toUnicode(mauthorHrefA_list[q].innerHTML);
			mauthorHref[q]. = mauthorHrefA_list[q].href;

		}
	}    搁浅 */

	w.document.write('"album":"' + malbum + '",');
	w.document.write('"albumHref":"' + malbumHref + '",');
	if (i != tr_list.length - 1) {
		w.document.write('"TAG":[]}},')
	} else {
		w.document.write('"TAG":[]}}]')
	}
}