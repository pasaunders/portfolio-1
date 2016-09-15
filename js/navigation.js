var navigation = {};

navigation.showClick = function () {
  $('.navbar li').on('click', function() {
    $('section').not('.interest').hide();
    var section = $(this).text().toLowerCase();
    console.log('#' + section);
    $('#' + section).fadeIn();
  });
};

navigation.articlePreviews = function() {
  $('.interest').find('button ~ *').hide();
};

navigation.showClick();
navigation.articlePreviews();
