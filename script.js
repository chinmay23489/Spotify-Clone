console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Kesariya", filePath: "songs/1.mp3", coverPath: "https://cdn.bollywoodbubble.com/wp-content/uploads/2022/07/kesariya-song-from-brahmastra-out-1.jpg"},

    {songName: "Humdard", filePath: "songs/2.mp3", coverPath: "https://i.ytimg.com/vi/sJZGk0aw3yU/maxresdefault.jpg"},

    {songName: "Soch Na Sake", filePath: "songs/3.mp3", coverPath: "https://i.ytimg.com/vi/IQ-IzgNhvhg/maxresdefault.jpg"},

    {songName: "Mere Yaara", filePath: "songs/4.mp3", coverPath: "https://www.quirkybyte.com/wp-content/uploads/2021/12/Mere-Yaara-Song-Download-Mp3-Arijit-Singh-Neeti-Mohan-Sooryavanshi.jpg"},

    {songName: "Tere Sang Yaara", filePath: "songs/5.mp3", coverPath: "https://1.bp.blogspot.com/-ulVLY5RsvoY/XuXfgNAxm3I/AAAAAAAAHrc/39JFsEgec_kJKmYIrIIcB0qxvE_-oyohgCK4BGAsYHg/d/TERE-SANG-YAARA-LYRICS.jpg"},

    {songName: "Oh Mahiya Mainu ", filePath: "songs/6.mp3", coverPath: "https://i.ytimg.com/vi/JYEr5No2E_g/hqdefault.jpg"},

    {songName: "Channa Mereya", filePath: "songs/7.mp3", coverPath: "https://lyricalsansar.com/wp-content/uploads/2022/01/Channa-Mereya-lyrics.jpg"},

    {songName: "Dil Diyan Gallan", filePath: "songs/8.mp3", coverPath: "https://i.ytimg.com/vi/SAcpESN_Fk4/maxresdefault.jpg"},

    {songName: "Tera Yaar Hoon Main", filePath: "songs/9.mp3", coverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yOiodzO5GeH9Q2q2NeTVTcaI9TCf7zYrK0VrZEbKAVYqrAENEdHajzQ1KSg6vD-5R2Y&usqp=CAU"},

    {songName: "Raataan Lambiyan", filePath: "songs/10.mp3", coverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DNrp30UKb1ouhpjMwfsp2bJcztjtmPifCeAar8Pc0-TuTirYW3YkW_WcxYvtVpiGB24&usqp=CAU"},

    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
