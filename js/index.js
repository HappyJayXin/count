var audio = new Audio("aa.mp3");
var t,t2,t3;
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

disabledOn(btn2);
disabledOn(btn3);

function myFunction(){        
    var e=document.getElementById('time');
    var time=e.options[e.selectedIndex].value;     
    t3=setInterval(() => {
        var theTime=time/1000;        
        if(theTime>=3600){
            setMystatus((Math.floor(theTime/3600))+' 時 '+(Math.floor((theTime-3600)/60))+' 分 '+(Math.floor(theTime%60))+'秒');
        }else if(theTime>=60){
            setMystatus((Math.floor(theTime/60))+' 分 '+(Math.floor(theTime%60))+' 秒');
        }else{
            setMystatus(theTime+' 秒');
        }      
        time-=1000;
        if(theTime<=0){           
            clearInterval(t3);
            setMystatus('計時結束');
        }
    },1000);  
    t=setTimeout(() => {
        audio.play();
        audio.loop=true;
    },time);

    disabledOn(btn1);
    disabledOn(btn2);
    disabledOff(btn3);    
   
    t2 = setTimeout(() => {
        // setMystatus('計時結束');
        disabledOff(btn2);
        disabledOn(btn3);
    }, time);       
    console.log(time);  
}

function stop(){
    audio.pause();
    audio.currentTime=0;
    setMystatus('鈴聲已暫停');

    disabledOn(btn2);
    disabledOff(btn1);
    disabledOn(btn3);
}
function stopTime(){
    clearTimeout(t);
    clearTimeout(t2);
    clearInterval(t3);
    setMystatus('倒數已暫停');
    disabledOn(btn3);
    disabledOn(btn2);
    disabledOff(btn1);
}

function setMystatus(tex){
    var mystatus=document.getElementById('mystatus');
    var text= mystatus.textContent=tex;
    return text;
}
function disabledOn(on){
    on.setAttribute('disabled','');    
}
function disabledOff(off){
    off.removeAttribute('disabled','');
}

