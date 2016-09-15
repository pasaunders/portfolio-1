var allInterests = [];

function Interest(interest) {
  this.interestName = interest.interestName;
  this.interestImg = interest.interestImg;
  this.interestText = interest.interestText;
  this.interestUrl = interest.interestUrl;
  this.lastWorked = interest.lastWorked;
}

Interest.prototype.toHtml = function() {
  var $interestTemplate = $('.template').clone();
  var daysAgo = new Date() - new Date(this.lastWorked);
  $interestTemplate.find('h2').text(this.interestName);
  $interestTemplate.find('img').attr('src', this.interestImg);
  $interestTemplate.find('#description').text(this.interestText);
  $interestTemplate.find('span').text(Math.floor(daysAgo / 1000 / 60 / 60 / 24));
  $interestTemplate.removeClass('template');
  $interestTemplate.addClass('interest');
  return $interestTemplate;
};

function createAndSort() {
  interests.forEach(function(interest) {
    allInterests.push(new Interest(interest));
  });

  allInterests.sort(function(timeA, timeB) {
    return (new Date(timeB.lastWorked) - new Date(timeA.lastWorked));
  });
}

function render() {
  allInterests.forEach(function(interest) {
    $('#interests').append(interest.toHtml());
  });
}

function init() {
  createAndSort();
  render();
}

init();
