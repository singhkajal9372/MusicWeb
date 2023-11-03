const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id : '1',
        songName : `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster : "img/1.jpg"
    },
    {
        id : '2',
        songName : `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster : "img/1.jpg"
    },
    {
        id : '3',
        songName : `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster : "img/1.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave=document.getElementsByClassName('wave')[0];


masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime <= 0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})