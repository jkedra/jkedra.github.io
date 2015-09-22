

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
      var results = /^w(\w)*:(\B*)/.exec( href )
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

$(document).ready(wikipize);

