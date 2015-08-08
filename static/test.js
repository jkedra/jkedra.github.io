
function permaLink() {
    if(this.id.length > 0) {
        $('<a class="headerlink">\u00B6</a>').
        attr({
			href: '#' + this.id,
			title: 'Permalink to this headline'
			}).
        appendTo(this);
    }
};

function myHeader() {
    $('h1, h2, h3, h4').each(permaLink);
}

$(document).ready(myHeader);

