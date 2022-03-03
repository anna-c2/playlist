// Complete Day 1 goals here

//let songs = ["Butterflies","It Takes Two", "Winter Blossom", "Silence"];
//let artists = ["ASTN","Fiji Blue","Dept, Ashley, Alisha, nobody likes you pat", "Before You Exit"];
//let images = [
// "https://images.genius.com/84a7aec248e845c4597836dc7c691389.1000x1000x1.jpg", "https://i.scdn.co/image/ab67616d0000b2736cee58caa91f712f58dd5e9c", 
//  "https://images.genius.com/3178e63c398d1943bb09b81e2b409c1d.1000x1000x1.jpg", "https://i.ytimg.com/vi/7t4qnH8tpd4/maxresdefault.jpg"
  
//];
//let links = ["https://youtu.be/r1lb7iqk6Jo", "https://youtu.be/IMsIvOjB3do", "https://youtu.be/cnZ6dbLN-Kw", "https://youtu.be/7t4qnH8tpd4"];

let song1 = {
  name: "Butterflies",
  artist: "ASTN",
  image: "https://images.genius.com/84a7aec248e845c4597836dc7c691389.1000x1000x1.jpg",
  link: "https://youtu.be/r1lb7iqk6Jo"
};

let song2 = {
  name: "It Takes Two",
  artist: "Fiji Blue",
  image: "https://i.scdn.co/image/ab67616d0000b2736cee58caa91f712f58dd5e9c",
  link: "https://youtu.be/IMsIvOjB3do"
};

let song3 = {
  name:"Winter Blossom",
  artist:"Dept, Ashley, Alisha, nobody likes you pat",
  image:"https://images.genius.com/3178e63c398d1943bb09b81e2b409c1d.1000x1000x1.jpg",
  link: "https://youtu.be/cnZ6dbLN-Kw"
};

let song4 = {
  name:"Silence",
  artist:"Before You Exit",
  image:"https://i.ytimg.com/vi/7t4qnH8tpd4/maxresdefault.jpg",
  link: "https://youtu.be/7t4qnH8tpd4"
};

let playlist = [song1, song2, song3, song4]

function numSongs(){
  let numOfSongs = playlist.length;
  $(".numOfSongs").text(`Number of Songs: ${numOfSongs}`);
}
numSongs();

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  playlist.forEach(function (song) {
    $(".songs").append(`<p>${song.name}</p>`);
    $(".artists").append(`<p>${song.artist}</p>`);
    $(".links").append(`<a target="_blank" href=${song.link}>Listen</a>`);
    $(".images").append(`<img src=${song.image} >`);  
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

 
function addSongInfo() {
  // Complete Day 3 goals inside this function
  let song =  $(".title").val();
  let artist =  $(".artist").val();
  let image =  $(".image").val();
  let link =  $(".link").val();
  
  let newSong = {
    name: song,
    artist: artist,
    image: image,
    link: link
  };
  playlist.push(newSong);
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
  numSongs();
});

displaySongInfo();
