url:
http://ndb.nal.usda.gov/ndb/foods/show/112?fgcd=&manu=&lfacet=&format=&count=&max=35&offset=&sort=&qlookup=egg

document.getElementsByTagName("td")[100];
<td style=​"text-align:​right;​ width:​130px;​">​87​</td>​
document.getElementsByTagName("td")[100].innerHTML;
"87"

document.getElementsByClassName("odd")[0];
document.getElementsByTagName("td");

document.getElementsByClassName("odd")[0].getElementsByTagName("td")[0].innerHTML;
document.getElementsByClassName("odd")[0].getElementsByTagName("td")[1].innerHTML;
document.getElementsByClassName("odd")[0].getElementsByTagName("td")[2].innerHTML;
document.getElementsByClassName("odd")[0].getElementsByTagName("td")[3].innerHTML;
document.getElementsByClassName("odd")[0].getElementsByTagName("td")[4].innerHTML;
document.getElementsByClassName("odd")[0].getElementsByTagName("td")[5].innerHTML;

document.getElementsByClassName("odd")[0].getElementsByTagName("td")[0].innerHTML.split("\n");
["Water", "		", "		", "		"]
document.getElementsByClassName("odd")[0].getElementsByTagName("td")[0].innerHTML.split("\n")[0];
"Water"

document.getElementById("anch_13");
<a href=​"/​ndb/​foods/​show/​3807?format=Abridged&reportfmt=csv" class=​"excel" id=​"anch_13">​Download (CSV)​</a>​
document.getElementById("anch_13").href;
"https://ndb.nal.usda.gov/ndb/foods/show/3807?format=Abridged&reportfmt=csv"