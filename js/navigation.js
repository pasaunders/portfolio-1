var navigation = {};

navigation.filterCriteria = function() {
  $('.interest').each(function() {
    var category = $(this).attr('data-category');
    if ($('select option[value="' + category + '"]').length === 0) {
      $('select').append('<option value="' + category + '">' + category + '</option>');
    }
  });
};

navigation.showClick = function () {
  $('.navbar li').on('click', function() {
    $('section').not('.interest').hide();
    var section = $(this).text().toLowerCase();
    console.log('#' + section);
    $('#' + section).fadeIn();
  });

  $('.navbar li:contains(Interests)').click();
};

navigation.articlePreviews = function() {
  var $hiddenStuff = $('.interest').find('button ~ *');
  $hiddenStuff.hide();
  $('.interest').on('click', 'button', function() {
    $(this).parent().find('button ~ *').fadeIn();
  });
};

navigation.filterCriteria();
navigation.showClick();
navigation.articlePreviews();
