

function wikipize() {
  console.log("WIKIPIZE");
  $("a").each(
    function() {
      var href = $(this).attr("href");
      //  w:xxx  - polish wiki
      //  we:xxx - english wiki
      //
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
      // http://www.rexegg.com/regex-conditionals.html
      // optionally enclosed in ()
      var results = /^w(\w)*:(.*)/.exec( href )
      if(results != null) {
        var lang  = results[1]; // wiki language
        var entry = results[2]; // wiki entry
        switch(lang) {
          case undefined:
            lang = "pl"; break;
          case "e":
            lang = "en"; break;
        }
        // if empty link, use <A>TEXT</A>
        if(entry.length==0)
          entry = $(this).text();

        targetLink = "https://"+lang+".wikipedia.org/wiki/"+entry;

        console.log("HREF=" + href + " => " + targetLink);
        $(this).attr("href", targetLink);
      }
  });
}

function googlize() {
  console.log("GOOGLIZE");
  $("a").each(
    function() {
      var href = $(this).attr("href");
      //  g:xxx  - search on google
      //  gp:xxx - search on google pictures
      //
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
      // http://www.rexegg.com/regex-conditionals.html
      // optionally enclosed in ()
      var results = /^g(\w)*:(.*)/.exec( href )
      if(results != null) {
        var extra = results[1]; // google service, add extra tags to search string
        var entry = results[2]; // search tag
        switch(extra) {
          case undefined:
            extra = "";          break;
          case "p":
            extra = "&tbm=isch"; break;
        }
        // if empty link, use <A>TEXT</A>
        if(entry.length==0)
          entry = $(this).text();

        targetLink = "https://www.google.com/search?q="+entry+extra;

        console.log("HREF=" + href + " => " + targetLink);
        $(this).attr("href", targetLink);
      }
  });
}



$(document).ready(wikipize);
$(document).ready(googlize);
