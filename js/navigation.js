var navigation = {};

navigation.filterCriteria = function() {
  $('.interest').each(function() {
    var category = $(this).attr('data-category');
    $('select').append('<option value="' + category + '">' + category + '</option>');
  });
};

navigation.showClick = function () {
  $('.navbar li').on('click', function() {
    $('section').not('.interest').hide();
    var section = $(this).text().toLowerCase();
    console.log('#' + section);
    $('#' + section).fadeIn();
  });
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
