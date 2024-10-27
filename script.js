let Audio = document.querySelector('#audio')
let playAndPauseBtn=document.querySelector('#playAndPauseBtn i')
let audioTrack=document.querySelector('#audioTrack')


// PLAY AND PAUSE THE AUDIO

playAndPauseBtn.addEventListener('click',function(){


    if(playAndPauseBtn.classList.contains('fa-play')){
        playAndPauseBtn.classList.remove("fa-play")
        playAndPauseBtn.classList.add("fa-pause")
        Audio.play()
         interVal=setInterval( ()=>{
           let AudioValue=(Audio.currentTime / Audio.duration)*100
           audioTrack.value=AudioValue
        },500)
    }else{
        playAndPauseBtn.classList.remove("fa-pause")
        playAndPauseBtn.classList.add("fa-play")
        Audio.pause()
        clearInterval(interVal)
    }


})


// UPDATE THE AUDIO CURRENT TIME
audioTrack.addEventListener('input',function(){
    clearInterval(interVal)
    let newTime=  (audioTrack.value / 100) * Audio.duration;
    Audio.currentTime = newTime
})

// RESTART THE AUDIO INTERVAL
audioTrack.addEventListener('change',function(){
    if(!Audio.paused){
        interVal=setInterval( ()=>{
            let AudioValue=(Audio.currentTime / Audio.duration)*100
            audioTrack.value=AudioValue
         },500)
    }
})

