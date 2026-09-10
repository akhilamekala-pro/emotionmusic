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

    let searchText = "";

    if (emotion === "happy") {
        searchText = "happy songs";
    }
    else if (emotion === "sad") {
        searchText = "sad songs";
    }
    else if (emotion === "love") {
        searchText = "love songs";
    }
    else if (emotion === "angry") {
        searchText = "angry songs";
    }
    else if (emotion === "relaxed") {
        searchText = "relaxing songs";
    }
    else {
        searchText = emotion + " songs";
    }

    let youtubeURL =
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(searchText);

    window.location.href = youtubeURL;
}

function stopOtherSongs(currentAudio) {

    let allAudio = document.querySelectorAll("audio");

    allAudio.forEach(audio => {

        if (audio !== currentAudio) {
            audio.pause();
            audio.currentTime = 0;
        }

    });
}
function showSongs(emotion) {

    let songList = document.getElementById(emotion + "Songs");

    if (songList.style.display === "block") {
        songList.style.display = "none";
    } else {
        songList.style.display = "block";
    }
}