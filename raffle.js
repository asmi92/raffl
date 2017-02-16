var app = angular.module("hackUApp", ['app.services']); 
app.controller("socialRaffle", function($scope,$http,Raffle) {
    

    function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) +  60 * 1000);
initializeClock('clockdiv', deadline);
/*
var myURL = 'twitter.json';
   var raffleRequest = {
    method: 'GET',
    url: myURL,
    /*params: {
     category: 'general',
     sortBy: 'latest',
     country:'US',
      apiKey: '1e062534803e45fca5e92ee554ee7633'
    }
  };
  $http(raffleRequest)
    .then(function(response) {
      console.log(response);
});


$http.get("twitter.json")
    .then(function(response) {
        $scope.myWelcome = response.data;
        console.log("11",$scope.myWelcome);
    });
*/

Raffle.get().then(function (msg) {
  $scope.msg = msg.data;
console.log("1234",$scope.msg)
});

});


