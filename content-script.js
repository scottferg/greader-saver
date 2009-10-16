// We are hiding key elements on the page.  List each element
// here.
var elementList = ['div#gbar',
                   'div.gbh',
                   'a#logo-container',
                   'p#global-info',
                   'div.message-area',
                   'div#search',
                   'div#quick-add-bubble-holder'
                  ];

// Now remove each element visually from the page
for (var i = 0; i < elementList.length; i++) {
    jQuery(elementList[i]).each(function() {
        jQuery(this).css('display', 'none');
        jQuery(this).css('height', '0px');
    });
}

// Tighten up the top header bar
jQuery('div#chrome-header').each(function() {
    jQuery(this).css('padding', '0px 11px');
});

// Shift the main content up
jQuery('div#main').each(function() {
	jQuery(this).css('top', '0px');
});
