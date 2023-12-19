const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navmenu");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
})

const song = document.getElementById('song');
const playIcon=document.getElementById('playIcon');
const backwardsIcon=document.getElementById('backwardIcon');
const forwardIcon=document.getElementById('forwardIcon');
const inputProgress = document.getElementById('progress')

playIcon.onclick = function(){
    if(song.paused){
        song.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause'); 
    }
    else{
        song.pause();
        playIcon.classList.add('fa-play');
        playIcon.classList.remove('fa-pause'); 
    }
}
song.onloadedmetadata=function(){
    inputProgress.max = song.duration;
    inputProgress.value = song.currentTime;

}
if(song.play()){
    setInterval(() => {
        inputProgress.value = song.currentTime; 
    }, 500);
}

inputProgress.onchange = function(){
    song.play();
    inputProgress.value = song.currentTime;
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause'); 
}



//rotating pic
const audio = document.getElementById('mainAudio');
const playPause = document.getElementById('play-pause');
const Cover = document.getElementById('cover');

playPause.addEventListener('click',function(){
    if (audio.paused){
        audio.play();
        Cover.classList.add('rotating');
        playPause.textContent= 'pause';
    }
    else{
        audio.pause();
        Cover.classList.remove('rotating');
        playPause.textContent= 'play';
    }
    
})