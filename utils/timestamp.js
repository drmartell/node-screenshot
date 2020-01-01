const timestamp = () => {

  const
    date = new Date(),
    timeparts = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ];

  return timeparts.map(part => part = (part < 10 ? '0' : '') + part).join('-');
  // e.g. 2020-01-01-08-34-07
};

module.exports = timestamp;
