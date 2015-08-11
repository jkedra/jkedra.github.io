
function regPokazMape(buttonSel, targetId, mapLink) {
    $("p.pokazMape").on("click",
		function() {
			$(this).fadeOut( 1000 );
			$("#"+targetId).attr("src", mapLink);
			$("#"+targetId).show( 1000 );
		});
}

function regPokazMapy() {
    regPokazMape('p.pokazMape',
        'mapa_tatry', 'https://www.google.com/maps/d/u/0/embed?mid=zBqI9lALHG00.kSinWvHQ1vTQ');
}

$(document).ready(regPokazMapy);

