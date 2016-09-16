var navigation = {};

navigation.filterCriteria = function() {
  $('.interest').each(function() {
    var category = $(this).attr('data-category');
    if ($('select option[value="' + category + '"]').length === 0) {
      $('select').append('<option value="' + category + '">' + category + '</option>');
    }
  });
};

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

  $('.navbar li:contains(Interests)').click();
};

navigation.articlePreviews = function() {
  $('.interest').find('button ~ *').hide();
  $('.interest').on('click', 'button', function() {
    $(this).parent().find('button ~ *').toggle();
    $('.interest p:nth-child(2)').toggle();
    if ($(this).text() === 'Hide') {
      $(this).text('More');
    } else {
      $(this).text('Hide');
    }
  });
};

function init() {
  sourceRender.createAndSort();
  sourceRender.render();
  navigation.executeFilter();
  navigation.filterCriteria();
  navigation.showClick();
  navigation.articlePreviews();
}

init();
