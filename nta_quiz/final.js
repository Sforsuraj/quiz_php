
var sec = 59;
var min=59;
var hr=2;
var timer = setInterval(function(){
document.getElementById('time').innerHTML=hr+":"+min+':'+sec;
sec--;
if (sec < 0) {
    sec+=60;
    min-=1;
    setInterval(timer);
//clearInterval(timer);
}
if (min<0){
    min+=60;
    hr--;
    setInterval(timer);
}
if(hr<0){
    clearInterval(timer);
}
}, 1000);

document.getElementById("clear_page01").onclick=function(){
    if (document.getElementById("page01").style.display==='block'){
        document.getElementById("v1_page01").checked = false;
        document.getElementById("v2_page01").checked = false;
        document.getElementById("v3_page01").checked = false;
        document.getElementById("v4_page01").checked = false;
        delete answer[0];
        delete mar[0];
        delete ansmar[0];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page02").onclick=function(){
    if (document.getElementById("page02").style.display==='block'){
        document.getElementById("v1_page02").checked = false;
        document.getElementById("v2_page02").checked = false;
        document.getElementById("v3_page02").checked = false;
        document.getElementById("v4_page02").checked = false;
        delete answer[1];
        delete mar[1];
        delete ansmar[1];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page03").onclick=function(){
    if (document.getElementById("page03").style.display==='block'){
        document.getElementById("v1_page03").checked = false;
        document.getElementById("v2_page03").checked = false;
        document.getElementById("v3_page03").checked = false;
        document.getElementById("v4_page03").checked = false;
        delete answer[2];
        delete mar[2];
        delete ansmar[2];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

    }
}
document.getElementById("clear_page04").onclick=function(){
    if (document.getElementById("page04").style.display==='block'){
        document.getElementById("v1_page04").checked = false;
        document.getElementById("v2_page04").checked = false;
        document.getElementById("v3_page04").checked = false;
        document.getElementById("v4_page04").checked = false;
        delete answer[3];
        delete mar[3];
        delete ansmar[3];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page05").onclick=function(){
    if (document.getElementById("page05").style.display==='block'){
        document.getElementById("v1_page05").checked = false;
        document.getElementById("v2_page05").checked = false;
        document.getElementById("v3_page05").checked = false;
        document.getElementById("v4_page05").checked = false;
        delete answer[4];
        delete mar[4];
        delete ansmar[4];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page06").onclick=function(){
    if (document.getElementById("page06").style.display==='block'){
        document.getElementById("v1_page06").checked = false;
        document.getElementById("v2_page06").checked = false;
        document.getElementById("v3_page06").checked = false;
        document.getElementById("v4_page06").checked = false;
        delete answer[5];
        delete mar[5];
        delete ansmar[5];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page07").onclick=function(){
    if (document.getElementById("page07").style.display==='block'){
        document.getElementById("v1_page07").checked = false;
        document.getElementById("v2_page07").checked = false;
        document.getElementById("v3_page07").checked = false;
        document.getElementById("v4_page07").checked = false;
        delete answer[6];
        delete mar[6];
        delete ansmar[6];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page08").onclick=function(){
    if (document.getElementById("page08").style.display==='block'){
        document.getElementById("v1_page08").checked = false;
        document.getElementById("v2_page08").checked = false;
        document.getElementById("v3_page08").checked = false;
        document.getElementById("v4_page08").checked = false;
        delete answer[7];
        delete mar[7];
        delete ansmar[7];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page09").onclick=function(){
    if (document.getElementById("page09").style.display==='block'){
        document.getElementById("v1_page09").checked = false;
        document.getElementById("v2_page09").checked = false;
        document.getElementById("v3_page09").checked = false;
        document.getElementById("v4_page09").checked = false;
        delete answer[8];
        delete mar[8];
        delete ansmar[8];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page10").onclick=function(){
    if (document.getElementById("page10").style.display==='block'){
        document.getElementById("v1_page10").checked = false;
        document.getElementById("v2_page10").checked = false;
        document.getElementById("v3_page10").checked = false;
        document.getElementById("v4_page10").checked = false;
        delete answer[9];
        delete mar[9];
        delete ansmar[9];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page11").onclick=function(){
    if (document.getElementById("page11").style.display==='block'){
        document.getElementById("v1_page11").checked = false;
        document.getElementById("v2_page11").checked = false;
        document.getElementById("v3_page11").checked = false;
        document.getElementById("v4_page11").checked = false;
        delete answer[10];
        delete mar[10];
        delete ansmar[10];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page12").onclick=function(){
    if (document.getElementById("page12").style.display==='block'){
        document.getElementById("v1_page12").checked = false;
        document.getElementById("v2_page12").checked = false;
        document.getElementById("v3_page12").checked = false;
        document.getElementById("v4_page12").checked = false;
        delete answer[11];
        delete mar[11];
        delete ansmar[11];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page13").onclick=function(){
    if (document.getElementById("page13").style.display==='block'){
        document.getElementById("v1_page13").checked = false;
        document.getElementById("v2_page13").checked = false;
        document.getElementById("v3_page13").checked = false;
        document.getElementById("v4_page13").checked = false;
        delete answer[12];
        delete mar[12];
        delete ansmar[12];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page14").onclick=function(){
    if (document.getElementById("page14").style.display==='block'){
        document.getElementById("v1_page14").checked = false;
        document.getElementById("v2_page14").checked = false;
        document.getElementById("v3_page14").checked = false;
        document.getElementById("v4_page14").checked = false;
        delete answer[13];
        delete mar[13];
        delete ansmar[13];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page15").onclick=function(){
    if (document.getElementById("page15").style.display==='block'){
        document.getElementById("v1_page15").checked = false;
        document.getElementById("v2_page15").checked = false;
        document.getElementById("v3_page15").checked = false;
        document.getElementById("v4_page15").checked = false;
        delete answer[14];
        delete mar[14];
        delete ansmar[14];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page16").onclick=function(){
    if (document.getElementById("page16").style.display==='block'){
        document.getElementById("v1_page16").checked = false;
        document.getElementById("v2_page16").checked = false;
        document.getElementById("v3_page16").checked = false;
        document.getElementById("v4_page16").checked = false;
        delete answer[15];
        delete mar[15];
        delete ansmar[15];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page17").onclick=function(){
    if (document.getElementById("page17").style.display==='block'){
        document.getElementById("v1_page17").checked = false;
        document.getElementById("v2_page17").checked = false;
        document.getElementById("v3_page17").checked = false;
        document.getElementById("v4_page17").checked = false;
        delete answer[16];
        delete mar[16];
        delete ansmar[16];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page18").onclick=function(){
    if (document.getElementById("page18").style.display==='block'){
        document.getElementById("v1_page18").checked = false;
        document.getElementById("v2_page18").checked = false;
        document.getElementById("v3_page18").checked = false;
        document.getElementById("v4_page18").checked = false;
        delete answer[17];
        delete mar[17];
        delete ansmar[17];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page19").onclick=function(){
    if (document.getElementById("page19").style.display==='block'){
        document.getElementById("v1_page19").checked = false;
        document.getElementById("v2_page19").checked = false;
        document.getElementById("v3_page19").checked = false;
        document.getElementById("v4_page19").checked = false;
        delete answer[18];
        delete mar[18];
        delete ansmar[18];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page20").onclick=function(){
    if (document.getElementById("page20").style.display==='block'){
        document.getElementById("v1_page20").checked = false;
        document.getElementById("v2_page20").checked = false;
        document.getElementById("v3_page20").checked = false;
        document.getElementById("v4_page20").checked = false;
        delete answer[19];
        delete mar[19];
        delete ansmar[19];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page21").onclick=function(){
    if (document.getElementById("page21").style.display==='block'){
        document.getElementById("v1_page21").checked = false;
        document.getElementById("v2_page21").checked = false;
        document.getElementById("v3_page21").checked = false;
        document.getElementById("v4_page21").checked = false;
        delete answer[20];
        delete mar[20];
        delete ansmar[20];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page22").onclick=function(){
    if (document.getElementById("page22").style.display==='block'){
        document.getElementById("v1_page22").checked = false;
        document.getElementById("v2_page22").checked = false;
        document.getElementById("v3_page22").checked = false;
        document.getElementById("v4_page22").checked = false;
        delete answer[21];
        delete mar[21];
        delete ansmar[21];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page23").onclick=function(){
    if (document.getElementById("page23").style.display==='block'){
        document.getElementById("v1_page23").checked = false;
        document.getElementById("v2_page23").checked = false;
        document.getElementById("v3_page23").checked = false;
        document.getElementById("v4_page23").checked = false;
        delete answer[22];
        delete mar[22];
        delete ansmar[22];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page24").onclick=function(){
    if (document.getElementById("page24").style.display==='block'){
        document.getElementById("v1_page24").checked = false;
        document.getElementById("v2_page24").checked = false;
        document.getElementById("v3_page24").checked = false;
        document.getElementById("v4_page24").checked = false;
        delete answer[23];
        delete mar[23];
        delete ansmar[23];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}
document.getElementById("clear_page25").onclick=function(){
    if (document.getElementById("page25").style.display==='block'){
        document.getElementById("v1_page25").checked = false;
        document.getElementById("v2_page25").checked = false;
        document.getElementById("v3_page25").checked = false;
        document.getElementById("v4_page25").checked = false;
        delete answer[24];
        delete mar[24];
        delete ansmar[24];

        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;

        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
    }
}







var ans=0;
var notans=25;
document.getElementById("answer").innerHTML=ans;

document.getElementById("save_next_page01").onclick=function(){
    if (document.querySelector('input[name="op_page01"]:checked')!=null){
        delete mar[0];
        delete ansmar[0];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[0]=document.querySelector('input[name="op_page01"]:checked').value;
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn1").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn1").style.color='white';
        document.getElementById("page01").style.display='none';
        document.getElementById("page02").style.display='block';
        if (document.getElementById("btn2").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn2").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn2").style.color='white';
        }
        not[1]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page02();
    }
}

document.getElementById("save_next_page02").onclick=function(){
    if (document.querySelector('input[name="op_page02"]:checked')!=null){
        delete mar[1];
        delete ansmar[1];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[1]=document.querySelector('input[name="op_page02"]:checked').value;
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn2").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn2").style.color='white';
        document.getElementById("page02").style.display='none';
        document.getElementById("page03").style.display='block';
        if (document.getElementById("btn3").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn3").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn3").style.color='white';
        }
        not[2]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page03();
    }
}

document.getElementById("save_next_page03").onclick=function(){
    if (document.querySelector('input[name="op_page03"]:checked')!=null){
        delete mar[2];
        delete ansmar[2];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[2]=document.querySelector('input[name="op_page03"]:checked').value;
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length); 
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn3").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn3").style.color='white';
        document.getElementById("page03").style.display='none';
        document.getElementById("page04").style.display='block';
        if (document.getElementById("btn4").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn4").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn4").style.color='white';
        }
        not[3]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page04();
    }
}

document.getElementById("save_next_page04").onclick=function(){
    if (document.querySelector('input[name="op_page04"]:checked')!=null){
        delete mar[3];
        delete ansmar[3];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[3]=document.querySelector('input[name="op_page04"]:checked').value;
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn4").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn4").style.color='white';
        document.getElementById("page04").style.display='none';
        document.getElementById("page05").style.display='block';
        if (document.getElementById("btn5").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn5").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn5").style.color='white';
        }
        not[4]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page05();
    }
}

document.getElementById("save_next_page05").onclick=function(){
    if (document.querySelector('input[name="op_page05"]:checked')!=null){
        delete mar[4];
        delete ansmar[4];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[4]=document.querySelector('input[name="op_page05"]:checked').value;
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn5").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn5").style.color='white';
        document.getElementById("page05").style.display='none';
        document.getElementById("page06").style.display='block';
        if (document.getElementById("btn6").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn6").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn6").style.color='white';
        }
        not[5]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page06();
    }
}

document.getElementById("save_next_page06").onclick=function(){
    if (document.querySelector('input[name="op_page06"]:checked')!=null){
        delete mar[5];
        delete ansmar[5];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[5]=document.querySelector('input[name="op_page06"]:checked').value;
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn6").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn6").style.color='white';
        document.getElementById("page06").style.display='none';
        document.getElementById("page07").style.display='block';
        if (document.getElementById("btn7").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn7").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn7").style.color='white';
        }
        not[6]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page07();
    }
}

document.getElementById("save_next_page07").onclick=function(){
    if (document.querySelector('input[name="op_page07"]:checked')!=null){
        delete mar[6];
        delete ansmar[6];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[6]=(document.querySelector('input[name="op_page07"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn7").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn7").style.color='white';
        document.getElementById("page07").style.display='none';
        document.getElementById("page08").style.display='block';
        if (document.getElementById("btn8").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn8").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn8").style.color='white';
        }
        not[7]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page08();
    }
}

document.getElementById("save_next_page08").onclick=function(){
    if (document.querySelector('input[name="op_page08"]:checked')!=null){
        delete mar[7];
        delete ansmar[7];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[7]=(document.querySelector('input[name="op_page08"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);  
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn8").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn8").style.color='white';
        document.getElementById("page08").style.display='none';
        document.getElementById("page09").style.display='block';
        if (document.getElementById("btn9").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn9").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn9").style.color='white';
        }
        not[8]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page09();
    }
}

document.getElementById("save_next_page09").onclick=function(){
    delete mar[8];
        delete ansmar[8];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

    if (document.querySelector('input[name="op_page09"]:checked')!=null){
        answer[8]=(document.querySelector('input[name="op_page09"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn9").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn9").style.color='white';
        document.getElementById("page09").style.display='none';
        document.getElementById("page10").style.display='block';
        if (document.getElementById("btn10").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn10").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn10").style.color='white';
        }
        not[9]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page10();
    }
}
document.getElementById("save_next_page10").onclick=function(){
    if (document.querySelector('input[name="op_page10"]:checked')!=null){
        delete mar[9];
        delete ansmar[9];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[9]=(document.querySelector('input[name="op_page10"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn10").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn10").style.color='white';
        document.getElementById("page10").style.display='none';
        document.getElementById("page11").style.display='block';
        if (document.getElementById("btn11").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn11").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn11").style.color='white';
        }
        not[10]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page11();
    }
}

document.getElementById("save_next_page11").onclick=function(){
    if (document.querySelector('input[name="op_page11"]:checked')!=null){
        delete mar[10];
        delete ansmar[10];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[10]=(document.querySelector('input[name="op_page11"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn11").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn11").style.color='white';
        document.getElementById("page11").style.display='none';
        document.getElementById("page12").style.display='block';
        if (document.getElementById("btn12").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn12").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn12").style.color='white';
        }
        not[11]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page12();
    }
}

document.getElementById("save_next_page12").onclick=function(){
    if (document.querySelector('input[name="op_page12"]:checked')!=null){
        delete mar[11];
        delete ansmar[11];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[11]=(document.querySelector('input[name="op_page12"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn12").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn12").style.color='white';
        document.getElementById("page12").style.display='none';
        document.getElementById("page13").style.display='block';
        if (document.getElementById("btn13").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn13").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn13").style.color='white';
        }
        not[12]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page13();
    }
}

document.getElementById("save_next_page13").onclick=function(){
    if (document.querySelector('input[name="op_page13"]:checked')!=null){
        delete mar[12];
        delete ansmar[12];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[12]=(document.querySelector('input[name="op_page13"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn13").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn13").style.color='white';
        document.getElementById("page13").style.display='none';
        document.getElementById("page14").style.display='block';
        if (document.getElementById("btn14").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn14").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn14").style.color='white';
        }
        not[13]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page14();
    }
}

document.getElementById("save_next_page14").onclick=function(){
    if (document.querySelector('input[name="op_page14"]:checked')!=null){
        delete mar[13];
        delete ansmar[13];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[13]=(document.querySelector('input[name="op_page14"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn14").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn14").style.color='white';
        document.getElementById("page14").style.display='none';
        document.getElementById("page15").style.display='block';
        if (document.getElementById("btn15").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn15").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn15").style.color='white';
        }
        not[14]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page15();
    }
}

document.getElementById("save_next_page15").onclick=function(){
    if (document.querySelector('input[name="op_page15"]:checked')!=null){
        delete mar[14];
        delete ansmar[14];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[14]=(document.querySelector('input[name="op_page15"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn15").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn15").style.color='white';
        document.getElementById("page15").style.display='none';
        document.getElementById("page16").style.display='block';
        if (document.getElementById("btn16").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn16").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn16").style.color='white';
        }
        not[15]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page16();
    }
}

document.getElementById("save_next_page16").onclick=function(){
    if (document.querySelector('input[name="op_page16"]:checked')!=null){
        delete mar[15];
        delete ansmar[15];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[15]=(document.querySelector('input[name="op_page16"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn16").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn16").style.color='white';
        document.getElementById("page16").style.display='none';
        document.getElementById("page17").style.display='block';
        if (document.getElementById("btn17").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn17").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn17").style.color='white';
        }
        not[16]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page17();
    }
}

document.getElementById("save_next_page17").onclick=function(){
    if (document.querySelector('input[name="op_page17"]:checked')!=null){
        delete mar[16];
        delete ansmar[16];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[16]=(document.querySelector('input[name="op_page17"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn17").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn17").style.color='white';
        document.getElementById("page17").style.display='none';
        document.getElementById("page18").style.display='block';
        if (document.getElementById("btn18").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn18").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn18").style.color='white';
        }
        not[17]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page18();
    }
}

document.getElementById("save_next_page18").onclick=function(){
    if (document.querySelector('input[name="op_page18"]:checked')!=null){
        delete mar[17];
        delete ansmar[17];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[17]=(document.querySelector('input[name="op_page18"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn18").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn18").style.color='white';
        document.getElementById("page18").style.display='none';
        document.getElementById("page19").style.display='block';
        if (document.getElementById("btn19").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn19").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn19").style.color='white';
        }
        not[18]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page19();
    }
}

document.getElementById("save_next_page19").onclick=function(){
    if (document.querySelector('input[name="op_page19"]:checked')!=null){
        delete mar[18];
        delete ansmar[18];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[18]=(document.querySelector('input[name="op_page19"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn19").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn19").style.color='white';
        document.getElementById("page19").style.display='none';
        document.getElementById("page20").style.display='block';
        if (document.getElementById("btn20").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn20").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn20").style.color='white';
        }
        not[19]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page20();
    }
}

document.getElementById("save_next_page20").onclick=function(){
    if (document.querySelector('input[name="op_page20"]:checked')!=null){
        delete mar[19];
        delete ansmar[19];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[19]=(document.querySelector('input[name="op_page20"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn20").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn20").style.color='white';
        document.getElementById("page20").style.display='none';
        document.getElementById("page21").style.display='block';
        if (document.getElementById("btn21").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn21").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn21").style.color='white';
        }
        not[20]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page21();
    }
}

document.getElementById("save_next_page21").onclick=function(){
    if (document.querySelector('input[name="op_page21"]:checked')!=null){
        delete mar[20];
        delete ansmar[20];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[20]=(document.querySelector('input[name="op_page21"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn21").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn21").style.color='white';
        document.getElementById("page21").style.display='none';
        document.getElementById("page22").style.display='block';
        if (document.getElementById("btn22").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn22").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn22").style.color='white';
        }
        not[21]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page22();
    }
}

document.getElementById("save_next_page22").onclick=function(){
    if (document.querySelector('input[name="op_page22"]:checked')!=null){
        delete mar[21];
        delete ansmar[21];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[21]=(document.querySelector('input[name="op_page22"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn22").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn22").style.color='white';
        document.getElementById("page22").style.display='none';
        document.getElementById("page23").style.display='block';
        if (document.getElementById("btn23").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn23").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn23").style.color='white';
        }
        not[22]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page23();
    }
}
document.getElementById("save_next_page23").onclick=function(){

    if (document.querySelector('input[name="op_page23"]:checked')!=null){
        delete mar[22];
        delete ansmar[22];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[22]=(document.querySelector('input[name="op_page23"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn23").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn23").style.color='white';
        document.getElementById("page23").style.display='none';
        document.getElementById("page24").style.display='block';
        if (document.getElementById("btn24").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn24").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn24").style.color='white';
        }
        not[23]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page24();
    }
}
document.getElementById("save_next_page24").onclick=function(){
    if (document.querySelector('input[name="op_page24"]:checked')!=null){
        delete mar[23];
        delete ansmar[23];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[23]=(document.querySelector('input[name="op_page24"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn24").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn24").style.color='white';
        document.getElementById("page24").style.display='none';
        document.getElementById("page25").style.display='block';
        if (document.getElementById("btn25").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn25").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn25").style.color='white';
        }
        not[24]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page25();
    }
}
document.getElementById("save_next_page25").onclick=function(){
    if (document.querySelector('input[name="op_page25"]:checked')!=null){
        delete mar[24];
        delete ansmar[24];
        
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;

        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;

        answer[24]=(document.querySelector('input[name="op_page25"]:checked').value);
        ans=answer.length-(answer.length-answer.filter(function(x){ return true }).length);
        document.getElementById("notanswered").innerHTML=notans-ans;
        document.getElementById("answer").innerHTML=ans;
        document.getElementById("btn25").style.backgroundImage='url("logo3.png")';
        document.getElementById("btn25").style.color='white';
        document.getElementById("page25").style.display='none';
        document.getElementById("page01").style.display='block';
    }
}
//["","","","","","","","","","","","","","","","","","","","","","","","",""]
var answer=[];





document.getElementById("p_next").onclick=function(){
    if (document.getElementById("page01").style.display==='block'){
        document.getElementById("page01").style.display='none';
        document.getElementById("page02").style.display='block';
        if (document.getElementById("btn2").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn2").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn2").style.color='white';
        }
        not[1]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page02();

    }
    else if(document.getElementById("page02").style.display==='block'){
        document.getElementById("page02").style.display='none';
        document.getElementById("page03").style.display='block';
        if (document.getElementById("btn3").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn3").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn3").style.color='white';
        }
        not[2]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page03();

    }
    else if(document.getElementById("page03").style.display==='block'){
        document.getElementById("page03").style.display='none';
        document.getElementById("page04").style.display='block';
        if (document.getElementById("btn4").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn4").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn4").style.color='white';
        }
        not[3]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page04();

    }
    else if(document.getElementById("page04").style.display==='block'){
        document.getElementById("page04").style.display='none';
        document.getElementById("page05").style.display='block';
        if (document.getElementById("btn5").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn5").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn5").style.color='white';
        }
        not[4]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page05();

    }
    else if(document.getElementById("page05").style.display==='block'){
        document.getElementById("page05").style.display='none';
        document.getElementById("page06").style.display='block';
        if (document.getElementById("btn6").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn6").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn6").style.color='white';
        }
        not[5]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page06();

    }
    else if(document.getElementById("page06").style.display==='block'){
        document.getElementById("page06").style.display='none';
        document.getElementById("page07").style.display='block';
        if (document.getElementById("btn7").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn7").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn7").style.color='white';
        }
        not[6]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page07();
    }
    else if(document.getElementById("page07").style.display==='block'){
        document.getElementById("page07").style.display='none';
        document.getElementById("page08").style.display='block';
        if (document.getElementById("btn8").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn8").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn8").style.color='white';
        }
        not[7]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page08();

    }
    else if(document.getElementById("page08").style.display==='block'){
        document.getElementById("page08").style.display='none';
        document.getElementById("page09").style.display='block';
        if (document.getElementById("btn9").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn9").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn9").style.color='white';
        }
        not[8]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page09();

    }
    else if(document.getElementById("page09").style.display==='block'){
        document.getElementById("page09").style.display='none';
        document.getElementById("page10").style.display='block';
        if (document.getElementById("btn10").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn10").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn10").style.color='white';
        }
        not[9]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page10();;
    }
    else if(document.getElementById("page10").style.display==='block'){
        document.getElementById("page10").style.display='none';
        document.getElementById("page11").style.display='block';
        if (document.getElementById("btn11").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn11").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn11").style.color='white';
        }
        not[10]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page11();
    }
    else if(document.getElementById("page11").style.display==='block'){
        document.getElementById("page11").style.display='none';
        document.getElementById("page12").style.display='block';
        if (document.getElementById("btn12").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn12").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn12").style.color='white';
        }
        not[11]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page12();
    }
    else if(document.getElementById("page12").style.display==='block'){
        document.getElementById("page12").style.display='none';
        document.getElementById("page13").style.display='block';
        if (document.getElementById("btn13").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn13").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn13").style.color='white';
        }
        not[12]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page13();
    }
    else if(document.getElementById("page13").style.display==='block'){
        document.getElementById("page13").style.display='none';
        document.getElementById("page14").style.display='block';
        if (document.getElementById("btn14").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn14").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn14").style.color='white';
        }
        not[13]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page14();

    }
    else if(document.getElementById("page14").style.display==='block'){
        document.getElementById("page14").style.display='none';
        document.getElementById("page15").style.display='block';
        if (document.getElementById("btn15").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn15").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn15").style.color='white';
        }
        not[14]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page15();

    }
    else if(document.getElementById("page15").style.display==='block'){
        document.getElementById("page15").style.display='none';
        document.getElementById("page16").style.display='block';
        if (document.getElementById("btn16").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn16").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn16").style.color='white';
        }
        not[15]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page16();
    }
    else if(document.getElementById("page16").style.display==='block'){
        document.getElementById("page16").style.display='none';
        document.getElementById("page17").style.display='block';
        if (document.getElementById("btn17").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn17").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn17").style.color='white';
        }
        not[16]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page17();
    }
    else if(document.getElementById("page17").style.display==='block'){
        document.getElementById("page17").style.display='none';
        document.getElementById("page18").style.display='block';
        if (document.getElementById("btn18").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn18").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn18").style.color='white';
        }
        not[17]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page18();

    }
    else if(document.getElementById("page18").style.display==='block'){
        document.getElementById("page18").style.display='none';
        document.getElementById("page19").style.display='block';
        if (document.getElementById("btn19").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn19").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn19").style.color='white';
        }
        not[18]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page19();

    }
    else if(document.getElementById("page19").style.display==='block'){
        document.getElementById("page19").style.display='none';
        document.getElementById("page20").style.display='block';
        if (document.getElementById("btn20").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn20").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn20").style.color='white';
        }
        not[19]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page20();
    }
    else if(document.getElementById("page20").style.display==='block'){
        document.getElementById("page20").style.display='none';
        document.getElementById("page21").style.display='block';
        if (document.getElementById("btn21").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn21").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn21").style.color='white';
        }
        not[20]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page21();
    }
    else if(document.getElementById("page21").style.display==='block'){
        document.getElementById("page21").style.display='none';
        document.getElementById("page22").style.display='block';
        if (document.getElementById("btn22").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn22").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn22").style.color='white';
        }
        not[21]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page22();
    }
    else if(document.getElementById("page22").style.display==='block'){
        document.getElementById("page22").style.display='none';
        document.getElementById("page23").style.display='block';
        if (document.getElementById("btn23").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn23").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn23").style.color='white';
        }
        not[22]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page23();
    }
    else if(document.getElementById("page23").style.display==='block'){
        document.getElementById("page23").style.display='none';
        document.getElementById("page24").style.display='block';
        if (document.getElementById("btn24").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn24").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn24").style.color='white';
        }
        not[23]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page24();
    }
    else if(document.getElementById("page24").style.display==='block'){
        document.getElementById("page24").style.display='none';
        document.getElementById("page25").style.display='block';
        if (document.getElementById("btn25").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn25").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn25").style.color='white';
        }
        not[24]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page25();

    }
    /*else if(document.getElementById("page25").style.display==='block'){
        document.getElementById("page25").style.display='none';
        document.getElementById("page01").style.display='block';
        page01();

    }*/

}





document.getElementById("p_back").onclick=function(){
    /*if (document.getElementById("page01").style.display==='block'){
        document.getElementById("page01").style.display='none';
        document.getElementById("page25").style.display='block';
        page25();
    }
    */
    if(document.getElementById("page02").style.display==='block'){
        document.getElementById("page02").style.display='none';
        document.getElementById("page01").style.display='block';
        if (document.getElementById("btn1").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn1").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn1").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn1").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn1").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn1").style.color='white';
        }
        not[0]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page01();

    }
    else if(document.getElementById("page03").style.display==='block'){
        document.getElementById("page03").style.display='none';
        document.getElementById("page02").style.display='block';
        if (document.getElementById("btn2").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn2").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn2").style.color='white';
        }
        not[1]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page02();

    }
    else if(document.getElementById("page04").style.display==='block'){
        document.getElementById("page04").style.display='none';
        document.getElementById("page03").style.display='block';
        if (document.getElementById("btn3").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn3").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn3").style.color='white';
        }
        not[2]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page03();

    }
    else if(document.getElementById("page05").style.display==='block'){
        document.getElementById("page05").style.display='none';
        document.getElementById("page04").style.display='block';
        if (document.getElementById("btn4").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn4").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn4").style.color='white';
        }
        not[3]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page04();

    }
    else if(document.getElementById("page06").style.display==='block'){
        document.getElementById("page06").style.display='none';
        document.getElementById("page05").style.display='block';
        if (document.getElementById("btn5").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn5").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn5").style.color='white';
        }
        not[4]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page05();
    }
    else if(document.getElementById("page07").style.display==='block'){
        document.getElementById("page07").style.display='none';
        document.getElementById("page06").style.display='block';
        if (document.getElementById("btn6").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn6").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn6").style.color='white';
        }
        not[5]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page06();

    }
    else if(document.getElementById("page08").style.display==='block'){
        document.getElementById("page08").style.display='none';
        document.getElementById("page07").style.display='block';
        if (document.getElementById("btn7").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn7").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn7").style.color='white';
        }
        not[6]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page07();

    }
    else if(document.getElementById("page09").style.display==='block'){
        document.getElementById("page09").style.display='none';
        document.getElementById("page08").style.display='block';
        if (document.getElementById("btn8").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn8").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn8").style.color='white';
        }
        not[7]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page08();;
    }
    else if(document.getElementById("page10").style.display==='block'){
        document.getElementById("page10").style.display='none';
        document.getElementById("page09").style.display='block';
        if (document.getElementById("btn9").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn9").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn9").style.color='white';
        }
        not[8]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page09();
    }
    else if(document.getElementById("page11").style.display==='block'){
        document.getElementById("page11").style.display='none';
        document.getElementById("page10").style.display='block';
        if (document.getElementById("btn10").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn10").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn10").style.color='white';
        }
        not[9]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page10();
    }
    else if(document.getElementById("page12").style.display==='block'){
        document.getElementById("page12").style.display='none';
        document.getElementById("page11").style.display='block';
        if (document.getElementById("btn11").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn11").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn11").style.color='white';
        }
        not[10]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page11();
    }
    else if(document.getElementById("page13").style.display==='block'){
        document.getElementById("page13").style.display='none';
        document.getElementById("page12").style.display='block';
        if (document.getElementById("btn12").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn12").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn12").style.color='white';
        }
        not[11]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page12();

    }
    else if(document.getElementById("page14").style.display==='block'){
        document.getElementById("page14").style.display='none';
        document.getElementById("page13").style.display='block';
        if (document.getElementById("btn13").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn13").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn13").style.color='white';
        }
        not[12]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page13();

    }
    else if(document.getElementById("page15").style.display==='block'){
        document.getElementById("page15").style.display='none';
        document.getElementById("page14").style.display='block';
        if (document.getElementById("btn14").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn14").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn14").style.color='white';
        }
        not[13]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page14();
    }
    else if(document.getElementById("page16").style.display==='block'){
        document.getElementById("page16").style.display='none';
        document.getElementById("page15").style.display='block';
        if (document.getElementById("btn15").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn15").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn15").style.color='white';
        }
        not[14]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page15();
    }
    else if(document.getElementById("page17").style.display==='block'){
        document.getElementById("page17").style.display='none';
        document.getElementById("page16").style.display='block';
        if (document.getElementById("btn16").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn16").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn16").style.color='white';
        }
        not[15]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page16();

    }
    else if(document.getElementById("page18").style.display==='block'){
        document.getElementById("page18").style.display='none';
        document.getElementById("page17").style.display='block';
        if (document.getElementById("btn17").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn17").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn17").style.color='white';
        }
        not[16]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page17();

    }
    else if(document.getElementById("page19").style.display==='block'){
        document.getElementById("page19").style.display='none';
        document.getElementById("page18").style.display='block';
        if (document.getElementById("btn18").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn18").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn18").style.color='white';
        }
        not[17]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page18();
    }
    else if(document.getElementById("page20").style.display==='block'){
        document.getElementById("page20").style.display='none';
        document.getElementById("page19").style.display='block';
        if (document.getElementById("btn19").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn19").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn19").style.color='white';
        }
        not[18]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page19();
    }
    else if(document.getElementById("page21").style.display==='block'){
        document.getElementById("page21").style.display='none';
        document.getElementById("page20").style.display='block';
        if (document.getElementById("btn20").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn20").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn20").style.color='white';
        }
        not[19]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page20();
    }
    else if(document.getElementById("page22").style.display==='block'){
        document.getElementById("page22").style.display='none';
        document.getElementById("page21").style.display='block';
        if (document.getElementById("btn21").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn21").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn21").style.color='white';
        }
        not[20]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page21();
    }
    else if(document.getElementById("page23").style.display==='block'){
        document.getElementById("page23").style.display='none';
        document.getElementById("page22").style.display='block';
        if (document.getElementById("btn22").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn22").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn22").style.color='white';
        }
        not[21]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page22();
    }
    else if(document.getElementById("page24").style.display==='block'){
        document.getElementById("page24").style.display='none';
        document.getElementById("page23").style.display='block';
        if (document.getElementById("btn23").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn23").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn23").style.color='white';
        }
        not[22]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page23();

    }
    else if(document.getElementById("page25").style.display==='block'){
        document.getElementById("page25").style.display='none';
        document.getElementById("page24").style.display='block';
        if (document.getElementById("btn24").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn24").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn24").style.color='white';
        }
        not[23]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page24();
    }

}



var not=[];
not[0]='clicked';
notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
document.getElementById("notvisited").innerHTML=notvisit;



var markfor=0;
var mar=[];
document.getElementById("save_mark_page01").onclick=function(event){
    if (document.querySelector('input[name="op_page01"]:checked')!=null){
        mar[0]=(document.querySelector('input[name="op_page01"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn1").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn1").style.backgroundColor='white';
        document.getElementById("btn1").style.color='white';
        document.getElementById("page01").style.display='none';
        document.getElementById("page02").style.display='block';
        if (document.getElementById("btn2").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn2").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn2").style.color='white';
        }
        not[1]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page02();
    }
}

document.getElementById("save_mark_page02").onclick=function(event){
    if (document.querySelector('input[name="op_page02"]:checked')!=null){
        mar[1]=(document.querySelector('input[name="op_page02"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn2").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn2").style.backgroundColor='white';
        document.getElementById("btn2").style.color='white';
        document.getElementById("page02").style.display='none';
        document.getElementById("page03").style.display='block';
        if (document.getElementById("btn3").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn3").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn3").style.color='white';
        }
        not[2]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page03();
    }
}

document.getElementById("save_mark_page03").onclick=function(){
    if (document.querySelector('input[name="op_page03"]:checked')!=null){
        mar[2]=(document.querySelector('input[name="op_page03"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn3").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn3").style.color='white';
        document.getElementById("btn3").style.backgroundColor='white';
        document.getElementById("page03").style.display='none';
        document.getElementById("page04").style.display='block';
        if (document.getElementById("btn4").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn4").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn4").style.color='white';
        }
        not[3]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page04();
    }
}

document.getElementById("save_mark_page04").onclick=function(){
    if (document.querySelector('input[name="op_page04"]:checked')!=null){
        mar[3]=(document.querySelector('input[name="op_page04"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn4").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn4").style.color='white';
        document.getElementById("btn4").style.backgroundColor='white';
        document.getElementById("page04").style.display='none';
        document.getElementById("page05").style.display='block';
        if (document.getElementById("btn5").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn5").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn5").style.color='white';
        }
        not[4]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page05();
    }
}

document.getElementById("save_mark_page05").onclick=function(){
    if (document.querySelector('input[name="op_page05"]:checked')!=null){
        mar[4]=(document.querySelector('input[name="op_page05"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn5").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn5").style.color='white';
        document.getElementById("btn5").style.backgroundColor='white';
        document.getElementById("page05").style.display='none';
        document.getElementById("page06").style.display='block';
        if (document.getElementById("btn6").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn6").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn6").style.color='white';
        }
        not[5]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page06();
    }
}

document.getElementById("save_mark_page06").onclick=function(){
    if (document.querySelector('input[name="op_page06"]:checked')!=null){
        mar[5]=(document.querySelector('input[name="op_page06"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn6").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn6").style.color='white';
        document.getElementById("btn6").style.backgroundColor='white';
        document.getElementById("page06").style.display='none';
        document.getElementById("page07").style.display='block';
        if (document.getElementById("btn7").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn7").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn7").style.color='white';
        }
        not[6]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page07();
    }
}

document.getElementById("save_mark_page07").onclick=function(){
    if (document.querySelector('input[name="op_page07"]:checked')!=null){
        mar[6]=(document.querySelector('input[name="op_page07"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn7").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn7").style.color='white';
        document.getElementById("btn7").style.backgroundColor='white';
        document.getElementById("page07").style.display='none';
        document.getElementById("page08").style.display='block';
        if (document.getElementById("btn8").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn8").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn8").style.color='white';
        }
        not[7]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page08();
    }
}

document.getElementById("save_mark_page08").onclick=function(){
    if (document.querySelector('input[name="op_page08"]:checked')!=null){
        mar[7]=(document.querySelector('input[name="op_page08"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn8").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn8").style.color='white';
        document.getElementById("btn8").style.backgroundColor='white';
        document.getElementById("page08").style.display='none';
        document.getElementById("page09").style.display='block';
        if (document.getElementById("btn9").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn9").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn9").style.color='white';
        }
        not[8]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page09();
    }
}

document.getElementById("save_mark_page09").onclick=function(){
    if (document.querySelector('input[name="op_page09"]:checked')!=null){
        mar[8]=(document.querySelector('input[name="op_page09"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn9").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn9").style.color='white';
        document.getElementById("btn9").style.backgroundColor='white';
        document.getElementById("page09").style.display='none';
        document.getElementById("page10").style.display='block';
        if (document.getElementById("btn10").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn10").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn10").style.color='white';
        }
        not[9]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page10();
    }
}
document.getElementById("save_mark_page10").onclick=function(){
    if (document.querySelector('input[name="op_page10"]:checked')!=null){
        mar[9]=(document.querySelector('input[name="op_page10"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn10").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn10").style.color='white';
        document.getElementById("btn10").style.backgroundColor='white';
        document.getElementById("page10").style.display='none';
        document.getElementById("page11").style.display='block';
        if (document.getElementById("btn11").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn11").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn11").style.color='white';
        }
        not[10]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page11();
    }
}

document.getElementById("save_mark_page11").onclick=function(){
    if (document.querySelector('input[name="op_page11"]:checked')!=null){
        mar[10]=(document.querySelector('input[name="op_page11"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn11").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn11").style.color='white';
        document.getElementById("btn11").style.backgroundColor='white';
        document.getElementById("page11").style.display='none';
        document.getElementById("page12").style.display='block';
        if (document.getElementById("btn12").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn12").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn12").style.color='white';
        }
        not[11]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page12();
    }
}

document.getElementById("save_mark_page12").onclick=function(){
    if (document.querySelector('input[name="op_page12"]:checked')!=null){
        mar[11]=(document.querySelector('input[name="op_page12"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn12").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn12").style.color='white';
        document.getElementById("btn12").style.backgroundColor='white';
        document.getElementById("page12").style.display='none';
        document.getElementById("page13").style.display='block';
        if (document.getElementById("btn13").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn13").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn13").style.color='white';
        }
        not[12]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page13();
    }
}

document.getElementById("save_mark_page13").onclick=function(){
    if (document.querySelector('input[name="op_page13"]:checked')!=null){
        mar[12]=(document.querySelector('input[name="op_page13"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn13").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn13").style.color='white';
        document.getElementById("btn13").style.backgroundColor='white';
        document.getElementById("page13").style.display='none';
        document.getElementById("page14").style.display='block';
        if (document.getElementById("btn14").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn14").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn14").style.color='white';
        }
        not[13]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page14();
    }
}

document.getElementById("save_mark_page14").onclick=function(){
    if (document.querySelector('input[name="op_page14"]:checked')!=null){
        mar[13]=(document.querySelector('input[name="op_page14"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn14").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn14").style.color='white';
        document.getElementById("btn14").style.backgroundColor='white';
        document.getElementById("page14").style.display='none';
        document.getElementById("page15").style.display='block';
        if (document.getElementById("btn15").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn15").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn15").style.color='white';
        }
        not[14]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page15();
    }
}

document.getElementById("save_mark_page15").onclick=function(){
    if (document.querySelector('input[name="op_page15"]:checked')!=null){
        mar[14]=(document.querySelector('input[name="op_page15"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn15").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn15").style.color='white';
        document.getElementById("btn15").style.backgroundColor='white';
        document.getElementById("page15").style.display='none';
        document.getElementById("page16").style.display='block';
        if (document.getElementById("btn16").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn16").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn16").style.color='white';
        }
        not[15]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page16();
    }
}

document.getElementById("save_mark_page16").onclick=function(){
    if (document.querySelector('input[name="op_page16"]:checked')!=null){
        mar[15]=(document.querySelector('input[name="op_page16"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn16").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn16").style.color='white';
        document.getElementById("btn16").style.backgroundColor='white';
        document.getElementById("page16").style.display='none';
        document.getElementById("page17").style.display='block';
        if (document.getElementById("btn17").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn17").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn17").style.color='white';
        }
        not[16]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page17();
    }
}

document.getElementById("save_mark_page17").onclick=function(){
    if (document.querySelector('input[name="op_page17"]:checked')!=null){
        mar[16]=(document.querySelector('input[name="op_page17"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn17").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn17").style.color='white';
        document.getElementById("btn17").style.backgroundColor='white';
        document.getElementById("page17").style.display='none';
        document.getElementById("page18").style.display='block';
        if (document.getElementById("btn18").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn18").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn18").style.color='white';
        }
        not[17]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page18();
    }
}

document.getElementById("save_mark_page18").onclick=function(){
    if (document.querySelector('input[name="op_page18"]:checked')!=null){
        mar[17]=(document.querySelector('input[name="op_page18"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn18").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn18").style.color='white';
        document.getElementById("btn18").style.backgroundColor='white';
        document.getElementById("page18").style.display='none';
        document.getElementById("page19").style.display='block';
        if (document.getElementById("btn19").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn19").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn19").style.color='white';
        }
        not[18]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page19();
    }
}

document.getElementById("save_mark_page19").onclick=function(){
    if (document.querySelector('input[name="op_page19"]:checked')!=null){
        mar[18]=(document.querySelector('input[name="op_page19"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn19").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn19").style.color='white';
        document.getElementById("btn19").style.backgroundColor='white';
        document.getElementById("page19").style.display='none';
        document.getElementById("page20").style.display='block';
        if (document.getElementById("btn20").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn20").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn20").style.color='white';
        }
        not[19]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page20();
    }
}

document.getElementById("save_mark_page20").onclick=function(){
    if (document.querySelector('input[name="op_page20"]:checked')!=null){
        mar[19]=(document.querySelector('input[name="op_page20"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn20").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn20").style.color='white';
        document.getElementById("btn20").style.backgroundColor='white';
        document.getElementById("page20").style.display='none';
        document.getElementById("page21").style.display='block';
        if (document.getElementById("btn21").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn21").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn21").style.color='white';
        }
        not[20]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page21();
    }
}

document.getElementById("save_mark_page21").onclick=function(){
    if (document.querySelector('input[name="op_page21"]:checked')!=null){
        mar[20]=(document.querySelector('input[name="op_page21"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn21").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn21").style.color='white';
        document.getElementById("btn21").style.backgroundColor='white';
        document.getElementById("page21").style.display='none';
        document.getElementById("page22").style.display='block';
        if (document.getElementById("btn22").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn22").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn22").style.color='white';
        }
        not[21]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page22();
    }
}

document.getElementById("save_mark_page22").onclick=function(){
    if (document.querySelector('input[name="op_page22"]:checked')!=null){
        mar[21]=(document.querySelector('input[name="op_page22"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn22").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn22").style.color='white';
        document.getElementById("btn22").style.backgroundColor='white';
        document.getElementById("page22").style.display='none';
        document.getElementById("page23").style.display='block';
        if (document.getElementById("btn23").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn23").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn23").style.color='white';
        }
        not[22]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page23();
    }
}
document.getElementById("save_mark_page23").onclick=function(){

    if (document.querySelector('input[name="op_page23"]:checked')!=null){
        mar[22]=(document.querySelector('input[name="op_page23"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn23").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn23").style.color='white';
        document.getElementById("btn23").style.backgroundColor='white';
        document.getElementById("page23").style.display='none';
        document.getElementById("page24").style.display='block';
        if (document.getElementById("btn24").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn24").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn24").style.color='white';
        }
        not[23]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page24();
    }
}
document.getElementById("save_mark_page24").onclick=function(){
    if (document.querySelector('input[name="op_page24"]:checked')!=null){
        mar[23]=(document.querySelector('input[name="op_page24"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn24").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn24").style.color='white';
        document.getElementById("btn24").style.backgroundColor='white';
        document.getElementById("page24").style.display='none';
        document.getElementById("page25").style.display='block';
        if (document.getElementById("btn25").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn25").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn25").style.color='white';
        }
        not[24]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page25();
    }
}
document.getElementById("save_mark_page25").onclick=function(){
    if (document.querySelector('input[name="op_page25"]:checked')!=null){
        mar[24]=(document.querySelector('input[name="op_page25"]:checked').value);
        markfor=mar.length-(mar.length-mar.filter(function(x){ return true }).length);
        document.getElementById("mark_for_review").innerHTML=markfor;
        document.getElementById("btn25").style.backgroundImage='url("logo4.png")';
        document.getElementById("btn25").style.color='white';
        document.getElementById("btn25").style.backgroundColor='white';
        document.getElementById("page25").style.display='none';
        document.getElementById("page01").style.display='block';
    }
}








var answermark=0;
var ansmar=[];
document.getElementById("mark_next_page01").onclick=function(event){
    if (document.querySelector('input[name="op_page01"]:checked')!=null){
        ansmar[0]=(document.querySelector('input[name="op_page01"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn1").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn1").style.backgroundColor='white';
        document.getElementById("btn1").style.color='white';
        document.getElementById("page01").style.display='none';
        document.getElementById("page02").style.display='block';
        if (document.getElementById("btn2").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn2").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn2").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn2").style.color='white';
        }
        not[1]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page02();
    }
}

document.getElementById("mark_next_page02").onclick=function(event){
    if (document.querySelector('input[name="op_page02"]:checked')!=null){
        ansmar[1]=(document.querySelector('input[name="op_page02"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn2").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn2").style.backgroundColor='white';
        document.getElementById("btn2").style.color='white';
        document.getElementById("page02").style.display='none';
        document.getElementById("page03").style.display='block';
        if (document.getElementById("btn3").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn3").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn3").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn3").style.color='white';
        }
        not[2]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page03();
    }
}

document.getElementById("mark_next_page03").onclick=function(){
    if (document.querySelector('input[name="op_page03"]:checked')!=null){
        ansmar[2]=(document.querySelector('input[name="op_page03"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn3").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn3").style.color='white';
        document.getElementById("btn3").style.backgroundColor='white';
        document.getElementById("page03").style.display='none';
        document.getElementById("page04").style.display='block';
        if (document.getElementById("btn4").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn4").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn4").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn4").style.color='white';
        }
        not[3]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page04();
    }
}

document.getElementById("mark_next_page04").onclick=function(){
    if (document.querySelector('input[name="op_page04"]:checked')!=null){
        ansmar[3]=(document.querySelector('input[name="op_page04"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn4").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn4").style.color='white';
        document.getElementById("btn4").style.backgroundColor='white';
        document.getElementById("page04").style.display='none';
        document.getElementById("page05").style.display='block';
        if (document.getElementById("btn5").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn5").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn5").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn5").style.color='white';
        }
        not[4]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page05();
    }
}

document.getElementById("mark_next_page05").onclick=function(){
    if (document.querySelector('input[name="op_page05"]:checked')!=null){
        ansmar[4]=(document.querySelector('input[name="op_page05"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn5").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn5").style.color='white';
        document.getElementById("btn5").style.backgroundColor='white';
        document.getElementById("page05").style.display='none';
        document.getElementById("page06").style.display='block';
        if (document.getElementById("btn6").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn6").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn6").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn6").style.color='white';
        }
        not[5]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page06();
    }
}

document.getElementById("mark_next_page06").onclick=function(){
    if (document.querySelector('input[name="op_page06"]:checked')!=null){
        ansmar[5]=(document.querySelector('input[name="op_page06"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn6").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn6").style.color='white';
        document.getElementById("btn6").style.backgroundColor='white';
        document.getElementById("page06").style.display='none';
        document.getElementById("page07").style.display='block';
        if (document.getElementById("btn7").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn7").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn7").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn7").style.color='white';
        }
        not[6]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page07();
    }
}

document.getElementById("mark_next_page07").onclick=function(){
    if (document.querySelector('input[name="op_page07"]:checked')!=null){
        ansmar[6]=(document.querySelector('input[name="op_page07"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn7").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn7").style.color='white';
        document.getElementById("btn7").style.backgroundColor='white';
        document.getElementById("page07").style.display='none';
        document.getElementById("page08").style.display='block';
        if (document.getElementById("btn8").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn8").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn8").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn8").style.color='white';
        }
        not[7]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page08();
    }
}

document.getElementById("mark_next_page08").onclick=function(){
    if (document.querySelector('input[name="op_page08"]:checked')!=null){
        ansmar[7]=(document.querySelector('input[name="op_page08"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn8").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn8").style.color='white';
        document.getElementById("btn8").style.backgroundColor='white';
        document.getElementById("page08").style.display='none';
        document.getElementById("page09").style.display='block';
        if (document.getElementById("btn9").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn9").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn9").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn9").style.color='white';
        }
        not[8]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page09();
    }
}

document.getElementById("mark_next_page09").onclick=function(){
    if (document.querySelector('input[name="op_page09"]:checked')!=null){
        ansmar[8]=(document.querySelector('input[name="op_page09"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn9").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn9").style.color='white';
        document.getElementById("btn9").style.backgroundColor='white';
        document.getElementById("page09").style.display='none';
        document.getElementById("page10").style.display='block';
        if (document.getElementById("btn10").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn10").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn10").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn10").style.color='white';
        }
        not[9]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page10();
    }
}
document.getElementById("mark_next_page10").onclick=function(){
    if (document.querySelector('input[name="op_page10"]:checked')!=null){
        ansmar[9]=(document.querySelector('input[name="op_page10"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn10").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn10").style.color='white';
        document.getElementById("btn10").style.backgroundColor='white';
        document.getElementById("page10").style.display='none';
        document.getElementById("page11").style.display='block';
        if (document.getElementById("btn11").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn11").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn11").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn11").style.color='white';
        }
        not[10]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page11();
    }
}

document.getElementById("mark_next_page11").onclick=function(){
    if (document.querySelector('input[name="op_page11"]:checked')!=null){
        ansmar[10]=(document.querySelector('input[name="op_page11"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn11").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn11").style.color='white';
        document.getElementById("btn11").style.backgroundColor='white';
        document.getElementById("page11").style.display='none';
        document.getElementById("page12").style.display='block';
        if (document.getElementById("btn12").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn12").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn12").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn12").style.color='white';
        }
        not[11]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page12();
    }
}

document.getElementById("mark_next_page12").onclick=function(){
    if (document.querySelector('input[name="op_page12"]:checked')!=null){
        ansmar[11]=(document.querySelector('input[name="op_page12"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn12").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn12").style.color='white';
        document.getElementById("btn12").style.backgroundColor='white';
        document.getElementById("page12").style.display='none';
        document.getElementById("page13").style.display='block';
        if (document.getElementById("btn13").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn13").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn13").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn13").style.color='white';
        }
        not[12]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page13();
    }
}

document.getElementById("mark_next_page13").onclick=function(){
    if (document.querySelector('input[name="op_page13"]:checked')!=null){
        ansmar[12]=(document.querySelector('input[name="op_page13"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn13").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn13").style.color='white';
        document.getElementById("btn13").style.backgroundColor='white';
        document.getElementById("page13").style.display='none';
        document.getElementById("page14").style.display='block';
        if (document.getElementById("btn14").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn14").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn14").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn14").style.color='white';
        }
        not[13]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page14();
    }
}

document.getElementById("mark_next_page14").onclick=function(){
    if (document.querySelector('input[name="op_page14"]:checked')!=null){
        ansmar[13]=(document.querySelector('input[name="op_page14"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn14").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn14").style.color='white';
        document.getElementById("btn14").style.backgroundColor='white';
        document.getElementById("page14").style.display='none';
        document.getElementById("page15").style.display='block';
        if (document.getElementById("btn15").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn15").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn15").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn15").style.color='white';
        }
        not[14]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page15();
    }
}

document.getElementById("mark_next_page15").onclick=function(){
    if (document.querySelector('input[name="op_page15"]:checked')!=null){
        ansmar[14]=(document.querySelector('input[name="op_page15"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn15").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn15").style.color='white';
        document.getElementById("btn15").style.backgroundColor='white';
        document.getElementById("page15").style.display='none';
        document.getElementById("page16").style.display='block';
        if (document.getElementById("btn16").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn16").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn16").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn16").style.color='white';
        }
        not[15]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page16();
    }
}

document.getElementById("mark_next_page16").onclick=function(){
    if (document.querySelector('input[name="op_page16"]:checked')!=null){
        ansmar[15]=(document.querySelector('input[name="op_page16"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn16").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn16").style.color='white';
        document.getElementById("btn16").style.backgroundColor='white';
        document.getElementById("page16").style.display='none';
        document.getElementById("page17").style.display='block';
        if (document.getElementById("btn17").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn17").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn17").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn17").style.color='white';
        }
        not[16]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page17();
    }
}

document.getElementById("mark_next_page17").onclick=function(){
    if (document.querySelector('input[name="op_page17"]:checked')!=null){
        ansmar[16]=(document.querySelector('input[name="op_page17"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn17").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn17").style.color='white';
        document.getElementById("btn17").style.backgroundColor='white';
        document.getElementById("page17").style.display='none';
        document.getElementById("page18").style.display='block';
        if (document.getElementById("btn18").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn18").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn18").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn18").style.color='white';
        }
        not[17]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page18();
    }
}

document.getElementById("mark_next_page18").onclick=function(){
    if (document.querySelector('input[name="op_page18"]:checked')!=null){
        ansmar[17]=(document.querySelector('input[name="op_page18"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn18").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn18").style.color='white';
        document.getElementById("btn18").style.backgroundColor='white';
        document.getElementById("page18").style.display='none';
        document.getElementById("page19").style.display='block';
        if (document.getElementById("btn19").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn19").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn19").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn19").style.color='white';
        }
        not[18]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page19();
    }
}

document.getElementById("mark_next_page19").onclick=function(){
    if (document.querySelector('input[name="op_page19"]:checked')!=null){
        ansmar[18]=(document.querySelector('input[name="op_page19"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn19").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn19").style.color='white';
        document.getElementById("btn19").style.backgroundColor='white';
        document.getElementById("page19").style.display='none';
        document.getElementById("page20").style.display='block';
        if (document.getElementById("btn20").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn20").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn20").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn20").style.color='white';
        }
        not[19]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page20();
    }
}

document.getElementById("mark_next_page20").onclick=function(){
    if (document.querySelector('input[name="op_page20"]:checked')!=null){
        ansmar[19]=(document.querySelector('input[name="op_page20"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn20").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn20").style.color='white';
        document.getElementById("btn20").style.backgroundColor='white';
        document.getElementById("page20").style.display='none';
        document.getElementById("page21").style.display='block';
        if (document.getElementById("btn21").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn21").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn21").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn21").style.color='white';
        }
        not[20]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page21();
    }
}

document.getElementById("mark_next_page21").onclick=function(){
    if (document.querySelector('input[name="op_page21"]:checked')!=null){
        ansmar[20]=(document.querySelector('input[name="op_page21"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn21").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn21").style.color='white';
        document.getElementById("btn21").style.backgroundColor='white';
        document.getElementById("page21").style.display='none';
        document.getElementById("page22").style.display='block';
        if (document.getElementById("btn22").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn22").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn22").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn22").style.color='white';
        }
        not[21]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page22();
    }
}

document.getElementById("mark_next_page22").onclick=function(){
    if (document.querySelector('input[name="op_page22"]:checked')!=null){
        ansmar[21]=(document.querySelector('input[name="op_page22"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn22").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn22").style.color='white';
        document.getElementById("btn22").style.backgroundColor='white';
        document.getElementById("page22").style.display='none';
        document.getElementById("page23").style.display='block';
        if (document.getElementById("btn23").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn23").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn23").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn23").style.color='white';
        }
        not[22]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page23();
    }
}
document.getElementById("mark_next_page23").onclick=function(){

    if (document.querySelector('input[name="op_page23"]:checked')!=null){
        ansmar[22]=(document.querySelector('input[name="op_page23"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn23").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn23").style.color='white';
        document.getElementById("btn23").style.backgroundColor='white';
        document.getElementById("page23").style.display='none';
        document.getElementById("page24").style.display='block';
        if (document.getElementById("btn24").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn24").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn24").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn24").style.color='white';
        }
        not[23]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page24();
    }
}
document.getElementById("mark_next_page24").onclick=function(){
    if (document.querySelector('input[name="op_page24"]:checked')!=null){
        ansmar[23]=(document.querySelector('input[name="op_page24"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn24").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn24").style.color='white';
        document.getElementById("btn24").style.backgroundColor='white';
        document.getElementById("page24").style.display='none';
        document.getElementById("page25").style.display='block';
        if (document.getElementById("btn25").style.backgroundImage==='url("logo3.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo4.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo5.png")') {return;}
        else if (document.getElementById("btn25").style.backgroundImage==='url("logo1.png")') {return;}
        else{
            document.getElementById("btn25").style.backgroundImage='url("logo2.png")';
            document.getElementById("btn25").style.color='white';
        }
        not[24]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;
        page25();
    }
}
document.getElementById("mark_next_page25").onclick=function(){
    if (document.querySelector('input[name="op_page25"]:checked')!=null){
        ansmar[24]=(document.querySelector('input[name="op_page25"]:checked').value);
        answermark=ansmar.length-(ansmar.length-ansmar.filter(function(x){ return true }).length);
        document.getElementById("answermarked").innerHTML=answermark;
        document.getElementById("btn25").style.backgroundImage='url("logo5.png")';
        document.getElementById("btn25").style.color='white';
        document.getElementById("btn25").style.backgroundColor='white';
        document.getElementById("page25").style.display='none';
        document.getElementById("page01").style.display='block';
    }
}


let button=document.querySelectorAll(".button");
for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",function(){

        not[i]='clicked';
        notvisit=25-(not.length-(not.length-not.filter(function(x){ return true }).length));
        document.getElementById("notvisited").innerHTML=notvisit;

        if (button[i].style.backgroundImage==='url("logo3.png")') {return;}
        else if (button[i].style.backgroundImage==='url("logo4.png")') {return;}
        else if (button[i].style.backgroundImage==='url("logo5.png")') {return;}
        else if (button[i].style.backgroundImage==='url("logo1.png")') {return;}
        else{
            button[i].style.backgroundImage='url("logo2.png")';
            button[i].style.color='white';
        }

    });
}

/*var arr = [1,,2,5,6,,4,5,6,,];
var empties = arr.length - arr.filter(function(x){ return true }).length;*/
/*let fruits = ['Apple', 'Banana', 'Mango', 'Orange']
let removed = delete fruits[2];*/

document.getElementById("physics").onclick=function(){
    document.getElementById("phy").style.display='block';
    document.getElementById("chem").style.display='none';
    document.getElementById("math").style.display='none';
}

document.getElementById("chemistry").onclick=function(){
    document.getElementById("phy").style.display='none';
    document.getElementById("chem").style.display='block';
    document.getElementById("math").style.display='none';
}

document.getElementById("mathematics").onclick=function(){
    document.getElementById("phy").style.display='none';
    document.getElementById("chem").style.display='none';
    document.getElementById("math").style.display='block';
}