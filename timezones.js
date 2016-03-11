var zones = {
  pst: -8,
  mst: -7,
  cst: -6,
  est: -5,
  gmt: 0,
  cet: 2,
  eet: 3,
  jst: 9
}

function parse(message) {
  var r = /\b(\d{1,2}(?:[:\.\sh]\d{2})?)\W*(?:[ap]m\W*)?([a-z]{2}t)\b/i.exec(message);
  if (r) {
    var zone = r[2].toLowerCase();
    if (zones.hasOwnProperty(zone)) {
      var time = r[1].replace(/[\s\.h]/i, ':');
      first = +time.replace(/:.*/, '');
      first += zones[zone];
      if (first < 1) first += 12;
      first %= 12;
      console.log(first + " " + time)
    }
  }
}
