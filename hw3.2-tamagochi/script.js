var hunger = 100;
var higiene = 100;
var rested = 100;
var fun = 100;
var ennui = 100;
var social = 100;
var pover = 100;
function Loop(time = 2){
	var total = hunger + higiene + rested + fun + ennui + social + pover;
	
	if(hunger <=0 || higiene <=0 || rested <=0 || fun <=0 || ennui <=0 || social <=0 || pover){
		document.getElementByID('being').src="img/black.png";
		document.getElementByID('being').innerHTML='You let your pet die, refresh the page.';
	}elseif(total >400){
		document.getElementByID('being').src="img/blue.png";
	}elseif(total >300){
		document.getElementByID('being').src="img/green.png";
	}elseif(total >200){
		document.getElementByID('being').src="img/gray.png";
	}elseif(total >100){
		document.getElementByID('being').src="img/yellow.png";
	}elseif(total >50){
		document.getElementByID('being').src="img/red.png";
	}
	hunger = hunger - parseInt(time);
	higiene = higiene - parseInt(time);
	rested = rested - parseInt(time);
	fun = fun - parseInt(time);
	ennui = ennui - parseInt(time);
	social = social - parseInt(time);
	pover = pover - parseInt(time);
	
	document.getElementByID('hunger').innerHTML = hunger +'%';
	document.getElementByID('higiene').innerHTML = higiene +'%';
	document.getElementByID('rested').innerHTML = rested +'%';
	document.getElementByID('fun').innerHTML = fun +'%';
	document.getElementByID('ennui').innerHTML = ennui +'%';
	document.getElementByID('social').innerHTML = social +'%';
	document.getElementByID('pover').innerHTML = pover +'%';
}

function Start(){
	var timer = setInterval(Loop, 1000);
}
function Eat(){
	hunger = 100;
	document.getElementByID('hunger').innerHTML = hunger +'%';
	document.getElementByID('hunger').style.width = hunger +'px';
}
function Bathe(){
	higiene = 100;
	document.getElementByID('higiene').innerHTML = higiene +'%';
	document.getElementByID('higiene').style.width = higiene +'px';
}
function Bed(){
	rested = 100;
	document.getElementByID('rested').innerHTML = rested +'%';
	document.getElementByID('rested').style.width = rested +'px';
}
function Play(){
	fun = 100;
	document.getElementByID('fun').innerHTML = fun +'%';
	document.getElementByID('fun').style.width = fun +'px';
}
function Socialize(){
	ennui = 100;
	document.getElementByID('ennui').innerHTML = ennui +'%';
	document.getElementByID('ennui').style.width = ennui +'px';
}
function Taech(){
	social = 100;
	document.getElementByID('social').innerHTML = social +'%';
	document.getElementByID('social').style.width = social +'px';
}
function Kill(){
	pover = 100;
	document.getElementByID('pover').innerHTML = pover +'%';
	document.getElementByID('pover').style.width = pover +'px';
}

Start();
