//img
const img = document.querySelector('img');
//controll button
const paly = document.getElementById('play');
const backward = document.getElementById('backward');
const forward = document.getElementById('forward');

const progressBar_div = document.getElementById('progressBar_div');

//singer and title
const title = document.querySelector('.title');
const artise = document.querySelector('.artise');

//music
const music = document.getElementById('music');
let startTime = document.querySelector('.startTime');
let progress = document.getElementById('progress');
let endduration = document.querySelector('.endduration');

let condision = false;
const musicGroup = [
    {
        name:"baba1",
        title:" Music_department",
        artise:"Alka Yagnik.",
    },{
        name:"baba2",
        title:"Music_department | Raazi",
        artise:"Dominique Cerejo",
    },{
        name:"baba3",
        title:"Lagaan: Once Upon a Time",
        artise:"Deepa Miriam.",
    },{
        name:"baba4",
        title:"Main Hoon Hero Tera  ",
        artise:"Geeta Dutt.",
    },{
        name:"baba5",
        title:"Music_department | Raazi",
        artise:"Dhvani Bhanushali.",
    },{
        name:"baba6",
        title:"Lagaan: Once Upon a Time",
        artise:"Shreya Ghoshal.",
    },{
        name:"baba7",
        title:"Main Hoon Hero Tera",
        artise:"Deepa Miriam.",
    }
    ,{
        name:"Dil Chahte Ho ",
        title:"Dil Chahte Ho ",
        artise:"Deepa Miriam.",
    }

]

const songPlay = ()=>{
    
    condision = true;
    music.play();
    img.classList.add('rotate');
    play.classList.replace("fa-play","fa-pause");
};
const songpouse = ()=>{
   
    condision = false;
    music.pause();
    img.classList.remove('rotate');
    play.classList.replace("fa-pause","fa-play");
};

paly.addEventListener('click',()=>{
    if(condision){
        songpouse();
    }else{
        songPlay(); 
    }
});

let funt = 0;

const songss = (musicGroup) =>{ 
    title.textContent = musicGroup.title;
    artise.textContent = musicGroup.artise;
    music.src =  musicGroup.name + ".mp3";

}
let songIndex = 3;


const nextSong = () =>{
    songIndex = (songIndex + 1) % musicGroup.length;
    songss(musicGroup[songIndex]);
    // console.log(musicGroup[songIndex]);
    music.play();
    
}
const prevSong = () =>{
    songIndex = (songIndex - 1 + musicGroup.length) % musicGroup.length;
    songss(musicGroup[songIndex]);
    // console.log(musicGroup[songIndex]);
    music.play();
    
}
//progress

music.addEventListener('timeupdate', (event) =>{

});

// progress line

music.addEventListener('timeupdate', (event)=>{
    
    const {currentTime,duration} = event.srcElement;
    let progress_Time = (currentTime / duration ) * 100;
    progress.style.width = `${progress_Time}%`;
    
// progress duration update
  
let min_duration = Math.floor(duration / 60);
let sec_duration = Math.floor(duration % 60);
if(sec_duration<10){
    sec_duration = `0${sec_duration}`;
}
let top_duration = `${min_duration}:${sec_duration}`;
 if(duration){
   
    endduration.textContent = `${top_duration}`;
 }

 // progress duration update
 let min_durationTime = Math.floor(currentTime / 60);
 let sec_durationTime = Math.floor(currentTime % 60);


 if(sec_durationTime < 10){
    sec_durationTime = `0${sec_durationTime}`;
 }
 let Total_duration = `${min_durationTime}:${sec_durationTime}`;
 startTime.textContent = `${Total_duration}`;

});
progressBar_div.addEventListener('click', (event)=>{
    const {duration} = music;
    const moveProgress = (event.offsetX / event.srcElement.clientWidth) * duration;
    music.currentTime = moveProgress
     
})

music.addEventListener('ended', nextSong);

backward.addEventListener('click', prevSong);
forward.addEventListener('click', nextSong);



//    progressBar_div

