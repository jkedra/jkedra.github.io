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
       extra = "";
       break;
    case "p":
       extra = "&tbm=isch";
       break;
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


function youtubize(extra, entry) {
  // the required argument is youtube move alphanumeric descriptor
  // returns https://www.youtube.com/watch?v=l4Nn-y9ktd4
  // with y@ query, the response will be
  // https://www.youtube.com/@QUERY
  log("YOUTUBIZE");
  switch(extra) {
    case undefined:
      extra = `watch?v=${entry}`;
      break;
    case "@":
      extra = `@${entry}`;
      break;
  }
  return(`https://www.youtube.com/${extra}`);
}

function qrzize(extra, entry) {
  log("QRZize");
  return(`https://www.qrz.com/db/${entry}`);
}

function ize() {
  log("IZE");
  $("a").each(
    function() {
      let href = $(this).attr("href");
      /*
       g:xxx  - search on google
       gp:xxx - search on google pictures
	 
       w:xxx  - polish wiki
       we:xxx - english wiki
       ws:xxx - swedish wiki

       a:xxx  - allegro
      
       m:xxx  - amazon us search
      
       y:xxx  - youtube search
       y@:xxx - youtube author link https://www.youtube.com/@xxx

       q:xxx  - qrz.com callsign
      
       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
       http://www.rexegg.com/regex-conditionals.html
       optionally enclosed in ()
      */
      let results = /^([gwamyq])([\w@]?):(.*)/.exec( href )
      if(results != null) {
		    let typize = results[1]; // link type (allowed types above)
        let extra  = results[2]; // extra tags for search service
                                 // eg wiki language or google images
                                 // (optional letter)
        let entry  = results[3]; // search tag

        // if empty link, use <A>TEXT</A>
        if(entry.length==0)
          entry = $(this).text();

        let opsMap = {
            "g": googlize,  "w": wikipize,  "a": allegrize,
            "m": amazonize, "y": youtubize, "q": qrzize };
        
        let targetLink = opsMap[typize](extra, entry);

        log(`href=${href} => ${targetLink}`);
        $(this).attr("href", targetLink);
      }
  });
}

$(document).ready(ize);
