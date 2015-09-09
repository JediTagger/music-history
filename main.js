//This first commented out section was the original way we populated the song list.
//The second is populating from an ajax call on json files.

// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.unshift("Once Upon a Dream > by MC4 on the ablum MC41")
// songs.push("Tea for Two > by Michigan Jake on the album For the Record");

// for (i = 0; i < songs.length; i++) {
// 	songs[i] = songs[i].replace(/\*/g, "");
// 	songs[i] = songs[i].replace(/\@/g, "");
// 	songs[i] = songs[i].replace(/\(/g, "");
// 	songs[i] = songs[i].replace(/\!/g, "");
// 	songs[i] = songs[i].replace(/\>/g, "-");
// }

// var songElement = document.getElementById("songList");

// var currentSong = "";

// for (i = 0; i < songs.length; i++) {
// 	currentSong += "<p>" + songs[i] + "</p>";
// }

// songElement.innerHTML = currentSong;




//Call the song data with ajax.
$(document).ready(function() {
		$.ajax({
			url: "main.json"
	}).done(function(data) {
		//When the call is done pass the data on to this for loop & add a remove button
		//to each song.
		for (var i = 0; i < data.songs.length; i++) {
			var nextSong = "<div id=\"song\">" + data.songs[i].name 
				+ " by " + data.songs[i].artist + " on the album " 
				+ data.songs[i].album + " <button id=\"rmv\">Remove</button></div>";
			$('#songList').prepend(nextSong);
		}
		//At the end of all the songs add a "More" button.
		$('#songList').append("<button id=\"more\">More ></button>");
	})
	//Remove the song when the remove button is clicked.
	$(document).on("click", "#rmv", function() {
		$(this).parent().remove();
	});
	//Call the songs in the second JSON file when the "More" button is clicked.
	$(document).on("click", "#more", function() {
		$.ajax({
			url: "second.json"
		}).done(function(data) {
			for (var i = 0; i < data.songs.length; i++) {
			var nextSong = "<div id=\"song\">" + data.songs[i].name 
				+ " by " + data.songs[i].artist + " on the album " 
				+ data.songs[i].album + " <button id=\"rmv\">Remove</button></div>";
			$('#songList').prepend(nextSong);
			}
		})
	})
});