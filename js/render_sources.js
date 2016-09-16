var allInterests = [];
var sourceRender = {};

function Interest(interest) {
  for (var key in interest) {
    this[key] = interest[key];
  }
  this.daysAgo = Math.floor((new Date() - new Date(this.lastWorked)) / 1000 / 60 / 60 / 24);
}

Interest.prototype.toHtml = function() {
  var source = $('#interest-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

sourceRender.createAndSort = function() {
  interests.forEach(function(interest) {
    allInterests.push(new Interest(interest));
  });

  allInterests.sort(function(timeA, timeB) {
    return (new Date(timeB.lastWorked) - new Date(timeA.lastWorked));
  });
};

sourceRender.render = function() {
  allInterests.forEach(function(interest) {
    $('#interests').append(interest.toHtml());
  });
};
