function Song(title, artist, duration) {
//  var song = this; // easier to grasp
//  Media.call(song,title,duration); // easier to grasp
  // first param this is the Song object, so
  // in the Media, Song gets all the goodies like
  // Song.title, Song.duration
  Media.call(this, title, duration);
  this.artist = artist;
}

// copies references to Media's prototype properties & methods
   // to the Song's prototype
   // gets references to things like play() and stop()
Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if (this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};