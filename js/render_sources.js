// Constructor function for each interest.
function Interest(interest) {
  for (var key in interest) {
    this[key] = interest[key];
  }
  // Grab the current date and lastWorked date as milliseconds, then divide the value by 1000 to get seconds,
  // by 60 to get minutes, by 60 to get hours, and by 24 to get days, then round down to the nearest integer and
  // set that to be this object's daysAgo property.
  this.daysAgo = Math.floor((new Date() - new Date(this.lastWorked)) / 1000 / 60 / 60 / 24);
}

Interest.allInterests = [];

Interest.loadInterests = function(interests) {
  interests.forEach(function(interest) {
    Interest.allInterests.push(new Interest(interest));
  });
};

Interest.prototype.toHtml = function(templateId) {
  var source = $(templateId).html();
  var template = Handlebars.compile(source);
  return template(this);
};
