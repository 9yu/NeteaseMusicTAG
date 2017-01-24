var m_list = document.getElementById("song-list-pre-cache");
var tbody = m_list.getElementsByTagName("tbody")[0];
var tr_list = tbody.getElementsByTagName("tr");
var w = window.open();
w.document.open();
w.document.write('{"MUSIC":[');
for (i=0; i<952; i++)
{
	var td_list = tr_list[i].getElementsByTagName("td");
	var mid = td_list[2].getElementsByTagName("span")[2].dataset.resId;
	var mhref = td_list[1].getElementsByTagName("a")[0].href;
	var mtitle = td_list[1].getElementsByTagName("b")[0].innerHTML;
	var mtime = td_list[2].getElementsByTagName("span")[0].innerHTML;
	var mpic = td_list[2].getElementsByTagName("span")[2].dataset.resPic;
	var mauthor = td_list[3].getElementsByTagName("span")[0].title;
	//var authorHref = td_list[3].getElementsByTagName("a")[0].href; // appers error when there's no <a>
	var malbum = td_list[4].getElementsByTagName("a")[0].title;
	var malbumHref = td_list[4].getElementsByTagName("a")[0].href;

	w.document.write('{' + '"id"' + ":" + '"' + mid + '"' + ',');
	w.document.write('"href"' + ":" + '"' + mhref + '"' + ',');
	w.document.write('"title"' + ":" + '"' + mtitle + '"' + ',');
	w.document.write('"time"' + ":" + '"' + mtime + '"' + ',');
	w.document.write('"pic"' + ":" + '"' + mpic + '"' + ',');
	w.document.write('"author"' + ":" + '"' + mauthor + '"' + ',');
	w.document.write('"album"' + ":" + '"' + malbum + '"' + ',');
	w.document.write('"albumHref"' + ":" + '"' + malbumHref + '"' + ',');
	if (i!=951)
	{
		w.document.write('"TAG"' + ":" + '""' + '},')
	} else {
		w.document.write('"TAG"' + ":" + '""' + '}')
	}
}

w.document.write(']}');