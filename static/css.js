/* css.js */

function myTransform() {
	$("input[type='range'][name='rotation']").change(
		function() {
			var degree=$(this).val();
			//console.info("degree: "+degree);
			$("p.rcorners2#id1").css({
				transform: 'rotate('+degree+'deg)'
			});
		});
}

$(document).ready(myTransform);

