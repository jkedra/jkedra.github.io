

function wikipize() {
	console.log("WIKIPIZE");
	$("a").each(
		function() {
			var href = $(this).attr("href");
			if( /^w:/.test( href ) ) {
				// if empty link, use <A>TEXT</A>
				var targetLink = "https://pl.wikipedia.org/wiki/";
                if(href.slice(2).length)
					targetLink += href.slice(2)
				else
					targetLink += $(this).text();

				console.log("HREF=" + href + " => " + targetLink);
				$(this).attr("href", targetLink);
			}
	});
}

$(document).ready(wikipize);

