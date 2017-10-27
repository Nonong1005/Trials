var count;


function getName() {
    var x = document.forms["form1"]["username"].value;
    
    if (x == "") {
        alert("Please Enter Your Name.");
        return false;
    }
    else
    {
    	localStorage.setItem("name",x);
    	document.forms["form1"]["username"].value="";
       	location.href = 'quiz1.html';
       	count = 0; 
    }
}

function question1(){
	location.href = 'quiz2.html';
	count = 0;
}
function question2(){
	location.href = 'quiz3.html';
	count = 1;
}
function question3(){
	location.href = 'quiz4.html';
	count = 2;
}
function question4(){
	location.href = 'quiz5.html';
	count = 3;
}
function question5(){
	location.href = 'quiz6.html';
	count = 4;
}
function question6(){
	location.href = 'quiz7.html';
	count = 5;
}
function question7(){
	location.href = 'quiz8.html';
	count = 6;
}
function question8(){
	location.href = 'quiz9.html';
	count = 7;
}
function question9(){
	location.href = 'quiz10.html';
	count = 8;
}
function question10(){
	location.href = 'result.html';
	count = 9;
}

function result(){var answer = [localStorage.getItem('1'),localStorage.getItem('2'),localStorage.getItem('3'),localStorage.getItem('4'),localStorage.getItem('5'),
localStorage.getItem('6'),localStorage.getItem('7'),localStorage.getItem('8'),localStorage.getItem('9'),localStorage.getItem('10')];

var correct = 0;

if(answer[0]==48){
	correct++;
}
if(answer[1]==4){
	correct++;
}
if(answer[2]==24){
	correct++;
}
if(answer[3]==324){
	correct++;
}
if(answer[4]==50){
	correct++;
}
if(answer[5]==17){
	correct++;
}
if(answer[6]==14){
	correct++;
}
if(answer[7]==-1){
	correct++;
}
if(answer[8]==3){
	correct++;
}
if(answer[9]==-2){
	correct++;
}

var user=localStorage.getItem('name');
if(correct>=5){
document.getElementById('output').innerHTML = "<br>"+user+"<br>You got "+correct+" correct answers. <br> Good Job!";
}
else if(correct<=4 && correct >= 1){
document.getElementById('output').innerHTML = "<br>"+user+"<br>You got "+correct+" correct answers. <br> Bobo ka!";
}
else if(correct==0){
document.getElementById('output').innerHTML = "<br>"+user+"<br>You got "+correct+" correct answers. <br> Ikaw ba yan James Miller Garcia?! Kabobo!";	
}
}

function quit(){
	location.href = 'index.html';
}
		
document.addEventListener('click',function(e){
	var x = e.target.value;
	count = parseInt(count)+parseInt(1);
	if(x==null||x=='High Scores'||x=='Exit'){
		count--;
		localStorage.setItem(count,x);
	}
	else{
		localStorage.setItem(count,x);
	}
});
