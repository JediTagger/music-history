var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Once Upon a Dream > by MC4 on the ablume MC41")
songs.push("Tea for Two > by Michigan Jake on the album For the Record");

for (i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/\*/g, "");
	songs[i] = songs[i].replace(/\@/g, "");
	songs[i] = songs[i].replace(/\(/g, "");
	songs[i] = songs[i].replace(/\!/g, "");
	songs[i] = songs[i].replace(/\>/g, "-");
}

var songElement = document.getElementById("songList");

var currentSong = "";

for (i = 0; i < songs.length; i++) {
	currentSong += "<p>" + songs[i] + "</p>";
}

songElement.innerHTML = currentSong;