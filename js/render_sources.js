var allInterests = [];
var sourceRender = {}; //Object to store functions in this file to remove variables from global space.

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

// Convert the object's properties into a Handlebars template.
Interest.prototype.toHtml = function() {
  var source = $('#interest-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

// Get all the object data from source_data.js and instantiate new objects that are then pushed to the allInterests
// array.
sourceRender.createAndSort = function() {
  interests.forEach(function(interest) {
    allInterests.push(new Interest(interest));
  });
  // Sort the allInterests array from most recently worked on to least.
  allInterests.sort(function(timeA, timeB) {
    return (new Date(timeB.lastWorked) - new Date(timeA.lastWorked));
  });
};

// Append all the objects in the allInterests array to the DOM by calling the toHtml() method.
sourceRender.render = function() {
  allInterests.forEach(function(interest) {
    $('#interests').append(interest.toHtml());
  });
};
