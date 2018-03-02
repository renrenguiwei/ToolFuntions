// 用作点击时间间隔判断
var oldTime;
var latestTime;
function doubleClick(){
  latestTime = new Date().getTime();  //获取毫秒时间，准确记录1000毫秒，避免999-1000的情况发生
  // latestTime = Math.round(new Date().getTime()/1000);
  oldTime = oldTime?oldTime:0;
  var diff = latestTime - oldTime;
  console.log(latestTime,oldTime,diff);
  oldTime = latestTime;
  return (diff>=1000);
}

// 获取音频播放时长
var audioLen = $('#audioLen').val();
var audio_time = audioLen;
// var audios=document.querySelector('#circle_audio');
// audios.addEventListener("canplay", function(){
//   audioLen =  Math.round(audios.duration);
//   audio_time = audioLen;
//   $('#time_len').text(audioLen);
// });

// audio switch
var switch_status = false;
var t;
function playAudio(who){
  var clickSpeed = doubleClick();
  switch_status = !switch_status;
  
  var switch_img = switch_status?'/Public/images/img/plaza_off.png':'/Public/images/img/plaza_on.png';  
  var bar_img = switch_status?'/Public/images/img/audio_dynamic.gif':'/Public/images/img/audio_static.png';
  $('.plaza_audio_switch').find('img').attr('src',switch_img);  
  $('.plaza_audio_gif').find('img').attr('src',bar_img);

  console.log('switch_status:',switch_status);
  console.log('clickSpeed:',clickSpeed);
  if (who==1) {                           // who=1手动点击
    console.log(audioLen,audio_time);
    audioOper('#circle_audio');
    if (audioLen==audio_time&&clickSpeed){  // 首次计时、首次双击过快
      timer(audio_time);
    }else{                                // 中间操作
      if (!switch_status){                // 停止
        clearTimeout(t);
      }else if (switch_status){
        timer(audio_time);                // 开始
      }
    }
  }  
}

// 计时器
function timer(time) {
    audio_time = time;
　　$('#time_len').text(time);
    time--;
    console.log('audio_time:',audio_time);
　　if (time >= -1) {     // 计时到0
　　  t = setTimeout(function() { timer(time) }, 1000);
　　} else if (time == -2) {
　　  $('#time_len').text(audioLen);
      clearTimeout(t);
      playAudio(0);
      audio_time = audioLen;
　　}
}

// audio play/stop
function audioOper(obj){
  var audios = document.querySelector(obj);
  if(audios!==null){             
    if(audios.paused){                 
      audios.play(); 
    }else{
      audios.pause();// 这个就是暂停
    }
 }else{
  alert('未检测到音频资源');
 }
}
