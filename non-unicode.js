var m_list = document.getElementById("m-playlist");
var tbody = m_list.getElementsByTagName("tbody")[0];
var tr_list = tbody.getElementsByTagName("tr");

var w = window.open();
w.document.open();
w.document.write('[');

for (var i = 0; i < tr_list.length; i++) {
	var td_list = tr_list[i].getElementsByTagName("td");
	var mid = td_list[2].getElementsByTagName("span")[2].dataset.resId;
	var mhref = td_list[1].getElementsByTagName("a")[0].href;
	var mtitle = td_list[1].getElementsByTagName("b")[0].innerHTML;
	var mtime = td_list[2].getElementsByTagName("span")[0].innerHTML;
	var mpic = td_list[2].getElementsByTagName("span")[2].dataset.resPic;
	var mauthor = td_list[3].getElementsByTagName("span")[0].title;
	var malbum = td_list[4].getElementsByTagName("a")[0].title;
	var malbumHref = td_list[4].getElementsByTagName("a")[0].href;

	w.document.write('{"' + mid + '":{');
	w.document.write('"href":"' + mhref + '",');
	w.document.write('"title":"' + mtitle + '",');
	w.document.write('"time":"' + mtime + '",');
	w.document.write('"pic":"' + mpic + '",');
	w.document.write('"author":"' + mauthor + '",');
	w.document.write('"album":"' + malbum + '",');
	w.document.write('"albumHref":"' + malbumHref + '",');
	if (i != tr_list.length - 1) {
		w.document.write('"TAG":[]}},')
	} else {
		w.document.write('"TAG":[]}}]')
	}
}