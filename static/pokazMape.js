// vim:ts=4:expandtab
function mapsApiCallback() {
	console.info("mapsApiCallback: GMAPS API3 loaded");
	$("p.pokazMape2").show();
}

function regPokazMape(buttonSel, buttonId, targetId, mapLink) {
    $(buttonSel+"#"+buttonId).on("click",
		function() {
			$(this).fadeOut( 1000 );
			$("#"+targetId).attr("src", mapLink);
			$("#"+targetId).show( 1000 );
		});
}


function regPokazMape2(buttonSel, buttonId, targetId, mapLink) {
	console.info("pokazMape2(buttonSel="+buttonSel+" buttonId="+buttonId+
                 " targetId="+targetId+" mapLink="+mapLink+")");
    $(buttonSel+"#"+buttonId).on("click",
		function() {
			//$("#"+targetId).attr("src", mapLink);
			//$("#"+targetId).show( 1000 );
			$("p.pokazMape2").show();
			$(".gmaps").hide();

			$(".gmaps#"+targetId).show();
			$(this).hide();

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

			var map = new google.maps.Map(document.getElementById(targetId),
										  mapOptions,
					                      {visibility: true}
                                         );

			var ctaLayer = new google.maps.KmlLayer({
				url: mapLink,
				map: map
			});

		  // overzoom
		  google.maps.event.addListenerOnce(map, "zoom_changed", function() { 
			  //console.info("old zoom: " + map.getZoom()); 
			  map.setZoom(map.getZoom()+1);
			  //console.info("new zoom: " + map.getZoom()); 
		  });

	});
}

// defaults for maps, otherwise call regPokazMape2 directly
function mDef(mapName, kmz) {
    var btn  = 'p.pokazMape2';
	var kmls = 'http://kedra.org/kml/';
    regPokazMape2(btn, mapName, 'map_'+mapName, kmls + kmz);
}

function regPokazMapy() {
    mDef('ochotnica',   'Ochotnica.kmz');
    mDef('starawies',   'StaraWies.kmz');
    mDef('tatry',       'Tatry.kmz');
    mDef('muszyna',     'StarySacz-Muszyna.kmz');
    mDef('slonne',      'MotoSlonne.kmz');
}

$(document).ready(regPokazMapy);

