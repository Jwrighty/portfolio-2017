$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],

    scrollOverflow: true
  });

  $('.filter-button').click(function() {
    // get the data-filter value of the button
    var filterValue = $(this).attr('data-filter');

    // show all items
    if (filterValue === 'all') {
      $('.all').show('slow');
    } else {
      // hide all items
      $('.all').not('.' + filterValue).hide('slow');
      // and then, show only items with selected data-filter value
      $('.all').filter('.' + filterValue).show('slow');
    }
  });
});
