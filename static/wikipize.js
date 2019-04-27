var DEBUG=false;

function log(str) {
	if(DEBUG) console.log(str);
}

function wikipize(lang, entry) {
 log("WIKIPIZE lang:"+lang+":");
  //  w:xxx  - polish wiki
  //  we:xxx - english wiki
  switch(lang) {
    case (undefined || ""):
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

function allegrize(extra, entry) {
	log("ALLEGRIZE");
	// a:xxx - search on allegro
	// https://allegro.pl/listing?string=l%C3%B3d%20i%20miskt

	return("https://allegro.pl/listing?string="+entry);
}

function amazonize(extra, entry) {
    log("AMAZONIZE");
    // https://www.amazon.com/s?k=beyound+the+mountain+steve+house
    return("https://www.amazon.com/s?k="+entry);
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
      //  a:xxx  - allegro
      //
      //  m:xxx  - amazon us search
      //
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
      // http://www.rexegg.com/regex-conditionals.html
      // optionally enclosed in ()
      var results = /^([gwam])(\w?):(.*)/.exec( href )
      if(results != null) {
		var typize = results[1]; // link type (allowed types above)
        var extra  = results[2]; // extra tags for search service
                                 // eg wiki language or google images
                                 // (optional letter)
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
	      case "a":
			targetLink = allegrize(extra, entry).replace(/\s+/g, '+');
            break;
          case "m":
            targetLink = amazonize(extra, entry).replace(/\s+/g, '+');
            break;
        }

        log("HREF=" + href + " => " + targetLink);
        $(this).attr("href", targetLink);
      }
  });
}

$(document).ready(ize);
