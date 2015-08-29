
function regPokazMape(buttonSel, buttonId, targetId, mapLink) {
    $(buttonSel+"#"+buttonId).on("click",
		function() {
			$(this).fadeOut( 1000 );
			$("#"+targetId).attr("src", mapLink);
			$("#"+targetId).show( 1000 );
		});
}

function regPokazMapy() {

    regPokazMape('p.pokazMape', 'tatry',
        'map_tatry',
		'https://www.google.com/maps/d/u/0/embed?mid=zBqI9lALHG00.kSinWvHQ1vTQ');

    regPokazMape('p.pokazMape', 'starawies',
        'map_starawies',
		'https://mapsengine.google.com/map/u/0/embed?mid=zBqI9lALHG00.kO7CEoIiN8oM');

    regPokazMape('p.pokazMape', 'ochotnica',
        'map_ochotnica',
		'https://www.google.com/maps/d/u/0/embed?mid=zBqI9lALHG00.kFrN6dxyNvsI');

    regPokazMape('p.pokazMape', 'muszyna',
        'map_muszyna',
		'https://mapsengine.google.com/map/u/0/embed?mid=zBqI9lALHG00.kTnm-73ulm0Y');

}

$(document).ready(regPokazMapy);

