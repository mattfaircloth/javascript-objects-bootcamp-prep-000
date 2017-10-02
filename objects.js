var playlist = {michaeljackson: 'thriller'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName] : songTitle})
}
