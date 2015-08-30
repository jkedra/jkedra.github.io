

function wikipize() {
	console.log("WIKIPIZE");
	$("a").each(
		function() {
			var href = $(this).attr("href");
			if( /^w:/.test( href ) ) {
				var targetLink = "https://pl.wikipedia.org/wiki/" +
                                  href.slice(2);

				console.log("HREF=" + href + " => " + targetLink);
				$(this).attr("href", targetLink);
			}
	});
}

$(document).ready(wikipize);

