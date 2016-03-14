function get(username) {
  return new Promise(function(resolve, reject)) {
    db.get(`racer:${username}`, function(err, val) {
      if (err) reject(err);
      resolve(val);
    })
  }
}



function update(player) {
  return new Promise(function(resolve, reject)) {
    Promise.all([api.getPlayerState(player), db.get(`player:${player}`)]).then(values => {
      var serverNumRaces = values[0].totalRaces;
      var localNumRaces = values[1];
      if (serverNumRaces != localNumRaces) {
        resolve()
      }
    })
    api.getPlayerStat(player).then(val => {
      db.get(`player:${player}`)
    })
    db.get(`racer:${username}`, function(err, val) {
      if (err) reject(err);
      resolve(val);
    })
  }
}
