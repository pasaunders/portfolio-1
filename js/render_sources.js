(function(module) {
  // Constructor function for each interest.
  function Interest(interest) {
    for (var key in interest) {
      this[key] = interest[key];
    }
    // Grab the current date and lastWorked date as milliseconds, then divide the value by 1000 to get seconds,
    // by 60 to get minutes, by 60 to get hours, and by 24 to get days, then round down to the nearest integer and
    // set that to be this object's daysAgo property.
    this.daysAgo = Math.floor((new Date() - new Date(this.lastWorked)) / 1000 / 60 / 60 / 24);
    //Patrick: Is there a way to structure your data so that your last worked on date auto-updates
    //from github? It would be easier to maintain your portfolio that way.
  }

  Interest.allInterests = [];

  // For each object in the interests array passed from Interest.setInterests, create a new object and add it to the
  // allInterests array.
  Interest.loadInterests = function(interests) {
    interests.forEach(function(interest) {
      Interest.allInterests.push(new Interest(interest));
    });
    Interest.allInterests.sort(function(timeA, timeB) {
      return timeA.daysAgo - timeB.daysAgo;
    });
  };

  // Take the template ID, make a template of the corresponding ID, then return it.
  Interest.prototype.toHtml = function(templateId) {
    var source = $(templateId).html();
    var template = Handlebars.compile(source);
    return template(this);
  };
  module.Interest = Interest;
})(window);
