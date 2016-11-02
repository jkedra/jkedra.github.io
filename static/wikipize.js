var DEBUG=false;

function log(str) {
	if(DEBUG) console.log(str);
}

function wikipize(lang, entry) {
 log("WIKIPIZE");
  //  w:xxx  - polish wiki
  //  we:xxx - english wiki
  switch(lang) {
    case undefined:
      lang = "pl"; break;
    case "e":
      lang = "en"; break;
  }
  // if empty link, use <A>TEXT</A>
  if(entry.length==0)
    entry = $(this).text();

  return("https://"+lang+".wikipedia.org/wiki/"+entry);
}

function googlize(extra, entry) {
  log("GOOGLIZE");
  //  g:xxx  - search on google
  //  gp:xxx - search on google pictures
  switch(extra) {
    case undefined:
       extra = "";          break;
    case "p":
       extra = "&tbm=isch"; break;
   }
   
   return("https://www.google.com/search?q="+entry+extra);

}

function ize() {
  log("IZE");
  $("a").each(
    function() {
      var href = $(this).attr("href");
      //  g:xxx  - search on google
      //  gp:xxx - search on google pictures
	  //
      //  w:xxx  - polish wiki
      //  we:xxx - english wiki
      //
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
      // http://www.rexegg.com/regex-conditionals.html
      // optionally enclosed in ()
      var results = /^([gw])(\w)*:(.*)/.exec( href )
      if(results != null) {
		var typize = results[1]; // link type w or g
        var extra  = results[2]; // google service, add extra tags to search string
        var entry  = results[3]; // search tag

        // if empty link, use <A>TEXT</A>
        if(entry.length==0)
          entry = $(this).text();

        switch(typize) {
          case undefined:
            extra = "";          break;
          case "g":
            targetLink = googlize(extra, entry).replace(/\s+/g, '+');
		    break;
          case "w":
            targetLink = wikipize(extra, entry).replace(/\s+/g, '_');
            break;
        }

        log("HREF=" + href + " => " + targetLink);
        $(this).attr("href", targetLink);
      }
  });
}

$(document).ready(ize);
