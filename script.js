function findMusic() {

    let emotion = document
        .getElementById("emotionInput")
        .value
        .toLowerCase()
        .trim();

    if (emotion === "") {
        alert("Please enter your emotion!");
        return;
    }

    let validEmotions = [
        "happy",
        "sad",
        "love",
        "angry",
        "relaxed"
    ];

    if (!validEmotions.includes(emotion)) {
        alert("Please enter only Happy, Sad, Love, Angry or Relaxed.");
        return;
    }

    let searchText = emotion + " songs";

    if (emotion === "relaxed") {
        searchText = "relaxing songs";
    }

    let youtubeURL =
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(searchText);

    window.location.href = youtubeURL;
}


// Show / Hide songs
function showSongs(emotion) {

    let songList = document.getElementById(emotion + "Songs");

    if (!songList) {
        return;
    }

    if (songList.style.display === "block") {
        songList.style.display = "none";
    } else {
        songList.style.display = "block";
    }
}