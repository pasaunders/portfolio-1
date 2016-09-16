var navigation = {}; //An empty object to hold the methods in the navigation.js file.

// For each interest section created, get the value of its data-category attribute. Then check if there are already
// any option elements within a select element that already have the value of one of those categories. If not,
// create an option element with the value attribute equal to the interest section's data-category attribute and
// append it to the select element.
navigation.filterCriteria = function() {
  $('.interest').each(function() {
    var category = $(this).attr('data-category');
    if ($('select option[value="' + category + '"]').length === 0) {
      $('select').append('<option value="' + category + '">' + category + '</option>');
    }
  });
};

// Whenever the select element changes, if it has a value, then hide all sections with a class of interest, and
// fade in all sections with a class of interest and an attribute of data-category equal to the value of the
// select element. If it has no value (that is, the user selected the 'filter categories' option), then fade in
// all sections with a class of interest.
navigation.executeFilter = function() {
  $('select').on('change', function() {
    if ($(this).val()) {
      $('.interest').hide();
      $('.interest[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('.interest').fadeIn();
    }
  });
};

// Add an event listener to all list items that have a class of navbar. When a user clicks on one of the associated
// list items, then hide section elements that do not have a class of interest. Then, get the lowercase text of the
// element that was clicked on. Then fade in the section element with an id equal to the lowercase text that was
// stored and set the value of the select element to an empty string.
// If the text of the element that was clicked on is interests, then fade in the select element, and fade in all
// elements with a class of interest. Otherwise, hide the select element.
navigation.showClick = function () {
  $('.navbar li').on('click', function() {
    $('section').not('.interest').hide();
    var section = $(this).text().toLowerCase();
    $('#' + section).fadeIn();
    $('select').val('');
    if (section === 'interests') {
      $('select').fadeIn();
      $('.interest').fadeIn();
    } else {
      $('select').hide();
    }
  });
  // When the page is first loaded, trigger a click event on the list item with a class of navbar that contains
  // the text "Interests".
  $('.navbar li:contains(Interests)').click();
};

// For all elements with a class of interest, target all children that are siblings beyond a button element and
// hide them. Then add an event listener to all buttons that are children of an element with a class of interest
// with a handler that subsequently grabs those same siblings and toggle them (hide if shown, show if hidden.)
// Then, if the button's text is "Hide", change it to "More", and otherwise change it to "Hide".
navigation.articlePreviews = function() {
  $('.interest').find('button ~ *').hide();
  $('.interest').on('click', 'button', function() {
    $(this).parent().find('button ~ *').toggle();
    $(this).parent().find('p:nth-child(2)').toggle();
    if ($(this).text() === 'Hide') {
      $(this).text('More');
    } else {
      $(this).text('Hide');
    }
  });
};

// Call all methods from render_sources.js and navigation.js.
function init() {
  sourceRender.createAndSort();
  sourceRender.render();
  navigation.executeFilter();
  navigation.filterCriteria();
  navigation.showClick();
  navigation.articlePreviews();
}

init();
