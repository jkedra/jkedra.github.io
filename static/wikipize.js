const DEBUG=false;

function log(str) {
	if(DEBUG) console.log(str);
}

function wikipize(lang, entry) {
 log(`WIKIPIZE lang:${lang}:`);
  //  w:xxx  - polish wiki
  //  we:xxx - english wiki
  //  wv:xxx - svenska wiki
  switch(lang) {
    case (undefined || ""):
      lang = "pl"; break;
    case "e":
      lang = "en"; break;
    case "s":
      lang = "sv"; break;
  }
  // if empty link, use <A>TEXT</A>
  if(entry.length==0)
    entry = $(this).text();

  const link = `https://${lang}.wikipedia.org/wiki/${entry}`
    .replace(/\s+/g, '_');
  return(link);
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
   
   const link = ("https://www.google.com/search?q="+entry+extra)
    .replace(/\s+/g, '+');
   return(link);
}

function allegrize(extra, entry) {
	log("ALLEGRIZE");
	// a:xxx - search on allegro
	// https://allegro.pl/listing?string=l%C3%B3d%20i%20miskt
  const link = ("https://allegro.pl/listing?string="+entry)
    .replace(/\s+/g, '+');
	return(link);
}

function amazonize(extra, entry) {
  log("AMAZONIZE");
  // https://www.amazon.com/s?k=beyound+the+mountain+steve+house
  const link = ("https://www.amazon.com/s?k="+entry)
    .replace(/\s+/g, '+');
  return(link);
}

// the required argument is youtube move alphanumeric descriptor
// returns https://www.youtube.com/watch?v=l4Nn-y9ktd4
function youtubize(extra, entry) {
  log("YOUTUBIZE");
  return(`https://www.youtube.com/watch?v=${entry}`);
}

function qrzize(extra, entry) {
  log("QRZize");
  return(`https://www.qrz.com/db/${entry}`);
}

function ize() {
  log("IZE");
  $("a").each(
    function() {
      var href = $(this).attr("href");
      /*
       g:xxx  - search on google
       gp:xxx - search on google pictures
	 
       w:xxx  - polish wiki
       we:xxx - english wiki
       ws:xxx - swedish wiki

       a:xxx  - allegro
      
       m:xxx  - amazon us search
      
       y:xxx  - youtube search

       q:xxx  - qrz.com callsign
      
       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
       http://www.rexegg.com/regex-conditionals.html
       optionally enclosed in ()
      */
      var results = /^([gwamyq])(\w?):(.*)/.exec( href )
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
            extra = "";
            break;
          case "g":
            targetLink = googlize(extra, entry);
		        break;
          case "w":
            targetLink = wikipize(extra, entry);
            break;
          case "a":
            targetLink = allegrize(extra, entry);
            break;
          case "m":
            targetLink = amazonize(extra, entry);
            break;
          case "y":
            targetLink = youtubize(extra, entry);
          case "q":
            targetLink = qrzize(extra, entry);
        }

        log(`href=${href} => ${targetLink}`);
        $(this).attr("href", targetLink);
      }
  });
}

$(document).ready(ize);
