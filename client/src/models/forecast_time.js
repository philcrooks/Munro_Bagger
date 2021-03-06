var oneMinute = 60 * 1000;
var twentyFourHours = 24 * 60 * oneMinute;

var anotherTime = function(time) {
  var d = new Date(time);
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  return Math.round(Date.UTC(year, month, day, 12, 0, 0, 0) / 1000);
};

var ForecastTime = function(timeInSeconds) {
  this._time = (timeInSeconds) ? new Date(timeInSeconds * 1000) : new Date();
};

ForecastTime.prototype.getTime = function() {
  return Math.round(this._time.getTime() / 1000);
};

ForecastTime.prototype.diff = function(timeInSeconds) {
  return (Math.round(this._time.getTime() / 1000) - time);
};

ForecastTime.prototype.midTomorrow = function() {
  return anotherTime(this._time.getTime() + twentyFourHours);
};

ForecastTime.prototype.midDayAfter = function() {
  return anotherTime(this._time.getTime() + (twentyFourHours * 2));
};

module.exports = ForecastTime;
