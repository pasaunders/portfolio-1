var allInterests = [];

function Interest(interest) {
  this.interestName = interest.interestName;
  this.interestImg = interest.interestImg;
  this.interestText = interest.interestText;
  this.interestUrl = interest.interestUrl;
}

Interest.prototype.toHtml = function() {
  var $interestTemplate = $('.template').clone();
  $interestTemplate.find('h2').text(this.interestName);
  $interestTemplate.find('img').attr('src', this.interestImg);
  $interestTemplate.find('p').text(this.interestText);
  $interestTemplate.find('a').attr('href', this.interestUrl);
  $interestTemplate.removeClass('template');
  $interestTemplate.addClass('interest');
  return $interestTemplate;
};

interests.forEach(function(interest) {
  allInterests.push(new Interest(interest));
});

allInterests.forEach(function(interest) {
  $('#interests').append(interest.toHtml());
});
