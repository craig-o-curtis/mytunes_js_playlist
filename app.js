// instantiate new playlist
var playlist = new Playlist();

var ascencionOfPariah = new Song("Ascension of Pariah", "Crogthor", "2:54");
var rockJuice = new Song("Rock Juice", "The Crogs", "3:43"); 

var manOfSteel = new Movie("Man of Steel", 2013, "2:23:00");
var manOfTears = new Movie("Man of Tears", 2014, "2:20:00");


playlist.add(ascencionOfPariah);
playlist.add(rockJuice);
playlist.add(manOfSteel);
playlist.add(manOfTears);

// get html playlist

var playlistElement = document.getElementById('playlist');

playlist.renderInElement(playlistElement);

// enable buttons
var playButton = document.getElementById('play');
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playlistElement);
};

var nextButton = document.getElementById('next');
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var prevButton = document.getElementById('prev');
prevButton.onclick = function(){
  playlist.prev();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById('stop');
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
