var API_URL = 'http://api.speedrunslive.com';

function getPlayerStat(player) {
  return new Promise((resolve, reject) => {
    http.get(`${API_URL}/stat?game=oot&player=${username}`, res => {
      var data = '';
      res.on('data', chunk => {
        data += chunk;
      })
      res.on('end', () => {
        var response = JSON.parse(data);
        resolve(response);
      })
    }).on('error', e => {
      reject(e);
    })
  })
}

function getPlayerRaces(player, numRaces) {
  return new Promise((resolve, reject) => {
    http.get(`${API_URL}/stat?game=oot&player=${username}&pageSize=${numRaces}`, res => {
      var data = '';
      res.on('data', chunk => {
        data += chunk;
      })
      res.on('end', () => {
        var response = JSON.parse(data);
        resolve(response);
      })
    }).on('error', e => {
      reject(e);
    })
  })
}
