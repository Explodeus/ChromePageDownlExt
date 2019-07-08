/*var generatedSource = new XMLSerializer().serializeToString(document);

var markup = document.documentElement.outerHTML;
$('#loadCode').click(function(){
    var blob = new Blob([markup], {type: "text/plain; charset=utf-8"});
    saveAs(blob, "pageCode.html");
})*/
$('#loadCode').click(function () {
    var s = new XMLSerializer();
    var d = document;
    var str = s.serializeToString(d);
    saveAs(str, "pageCode.txt");
})
