(function(module) {
  var fun = {};

// countDescWords will return the value of:
// 1. A new array generated using .map on the Interest.allInterests array, filtering for the length of the
// array created by splitting the interestText property of each object by spaces to give a word count, which
// in turn will be equal to
// 2. An array returned by calling .reduce on the first array that will add the value of each index, starting
// at 1, to the accumulator, which is originally set to the 0th index of the array passed to it.
// EX: Make an array that just contains the length of the arrays created by splitting the string of all the
// interestText properties from all the objects in the allInterests array. With that resulting array, add all
// the values of each index to the 0th index, starting at the 1st index.
  fun.countDescWords = function() {
    return Interest.allInterests.map(function(interest) {
      return interest.interestText.split(' ').length;
    }).reduce(function(acc, next) {
      return acc + next;
    });
  };

  fun.lazy = function() {
    return Interest.allInterests.filter(function(interest) {
      return interest.daysAgo > 30;
    }).map(function(interest) {
      return interest.interestName;
    });
  };

  fun.printFacts = function() {
    var lazyDays = fun.lazy();
    $('#facts').append('<li>Did you know the long descriptions of all the interests have exactly ' + fun.countDescWords() + ' words total in them?</li>')
    .append('<li><ul>The number of interests that were worked on more than 30 days ago is ' + lazyDays.length + '! </ul></li>');
    if (lazyDays.length > 0) {
      $('#facts li ul').append('They are:');
      lazyDays.forEach(function(name) {
        $('#facts li ul').append('<li>' + name + '</li>');
      });
    }
  };
  module.fun = fun;
})(window);
