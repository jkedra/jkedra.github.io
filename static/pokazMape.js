
function regPokazMape(buttonSel, buttonId, targetId, mapLink) {
    $(buttonSel+"#"+buttonId).on("click",
		function() {
			$(this).fadeOut( 1000 );
			$("#"+targetId).attr("src", mapLink);
			$("#"+targetId).show( 1000 );
		});
}


function regPokazMape2(buttonSel, buttonId, targetId, mapLink) {
    $(buttonSel+"#"+buttonId).on("click",
		function() {
			$(this).fadeOut( 1000 );
			//$("#"+targetId).attr("src", mapLink);
			//$("#"+targetId).show( 1000 );
			$("#"+targetId).show();

			var mapOptions = {
				//zoom: 13,
				//center: {lat: 49.489603, lng: 20.196834 },
				scrollwheel: false,
				zoomControl: true,
				zoomControlOptions: {
				  style: google.maps.ZoomControlStyle.SMALL,
				  position: google.maps.ControlPosition.RIGHT_BOTTOM
				}
			}

			var map = new google.maps.Map(document.getElementById(targetId), mapOptions,
					{visibility: true});

			var ctaLayer = new google.maps.KmlLayer({
				url: mapLink,
				map: map
			});

	});
}

function regPokazMapy() {
    regPokazMape('p.pokazMape', 'tatry',
        'map_tatry',
		'https://www.google.com/maps/d/u/0/embed?mid=zBqI9lALHG00.kSinWvHQ1vTQ');

    regPokazMape('p.pokazMape', 'starawies',
        'map_starawies',
		'https://mapsengine.google.com/map/u/0/embed?mid=zBqI9lALHG00.kO7CEoIiN8oM');

    regPokazMape2('p.pokazMape2', 'ochotnica',
        'map_ochotnica', 'http://kedra.org/kml/Ochotnica.kmz');

    regPokazMape('p.pokazMape', 'muszyna',
        'map_muszyna',
		'https://mapsengine.google.com/map/u/0/embed?mid=zBqI9lALHG00.kTnm-73ulm0Y');
}

$(document).ready(regPokazMapy);

