// https://stackoverflow.com/questions/7357734/how-do-i-get-the-time-of-day-in-javascript-node-js/16426519

const timestamp = () => {

  const date = new Date();

  const year = date.getFullYear();

  let month = date.getMonth() + 1;
  month < 10 && (month = '0' + month);

  let day = date.getDate();
  day < 10 && (day = '0' + day);

  let hour = date.getHours();
  hour < 10 && (hour = '0' + hour);

  let min = date.getMinutes();
  min < 10 &&  (min = '0' + min);

  let sec = date.getSeconds();
  sec < 10 && (sec = '0' + sec);

  return year + '-' + month + '-' + day + '-' + hour + '-' + min + '-' + sec;
};

module.exports = timestamp;
