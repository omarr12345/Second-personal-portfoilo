

var L1=document.getElementById("link1");
var L2=document.getElementById("link2");
var L3=document.getElementById("link3");
var L4=document.getElementById("link4");
var all=document.getElementById("all");
var graphic=document.getElementById("graphic");
var webdesign=document.getElementById("webdesign");
var branding=document.getElementById("branding");
/*--------------------*/
var p1=document.getElementById("counter-p1");
var p2=document.getElementById("counter-p2");
var p3=document.getElementById("counter-p3");
var p4=document.getElementById("counter-p4");

p1.innerHTML=0;
p2.innerHTML=0;
p3.innerHTML=0;
p4.innerHTML=0
/*--------------------*/
var rarrow=document.getElementById("r-arrow");
var larrow=document.getElementById("l-arrow");
var feedback1=document.getElementById("clients-feedback1");
var feedback2=document.getElementById("clients-feedback2");
/*---------------------*/
var productsheight=document.getElementById("products");
/*--------------------*/
var navname=document.getElementById("name");
var navfun=document.getElementById("functions");
var navbar=document.getElementById("navbar");



















L2.addEventListener("click",function(){    // fe goz2yya na2sa bta3et ta8yeer el height bta3 el div el keber wel div eli ta7tu lma el sewarr btt8yarrr mattenshash
    
graphic.style.display="block";
all.style.display="none";
webdesign.style.display="none";
branding.style.display="none";
L2.style.color="red";
L3.style.color="black"; 
L4.style.color="black"; 
L1.style.color="black"; 
productsheight.style.height="970px";
setTimeout(function(){
	
	
var travimg1=document.getElementById("pd3");
var travimg2=document.getElementById("pd4");
var cont=travimg2.innerHTML;
travimg2.innerHTML=travimg1.innerHTML;
travimg1.innerHTML=cont;
},500)

})


L3.addEventListener("click",function(){
    
graphic.style.display="none";
all.style.display="none";
webdesign.style.display="block";
branding.style.display="none";
L2.style.color="black";
L3.style.color="red"; 
L4.style.color="black"; 
L1.style.color="black"; 
productsheight.style.height="750px";

setTimeout(function(){
	
	
var travimg1=document.getElementById("pd1");
var travimg2=document.getElementById("pd2");
var cont=travimg2.innerHTML;
travimg2.innerHTML=travimg1.innerHTML;
travimg1.innerHTML=cont;
},500)

})
L4.addEventListener("click",function(){
    
graphic.style.display="none";
all.style.display="none";
webdesign.style.display="none";
branding.style.display="block";
L2.style.color="black";
L3.style.color="black"; 
L4.style.color="red"; 
L1.style.color="black";       
productsheight.style.height="750px";
})

L1.addEventListener("click",function(){
    
graphic.style.display="none";
all.style.display="block";
webdesign.style.display="none";
branding.style.display="none";
L2.style.color="black";
L3.style.color="black"; 
L4.style.color="black"; 
L1.style.color="red"; 
productsheight.style.height="970px";
})


window.setInterval(function(){
if(p1.innerHTML<100){
p1.innerHTML++;    
}    

if(p2.innerHTML<200){
p2.innerHTML++;    
}
    
if(p3.innerHTML<300){
p3.innerHTML++;    
}  

if(p4.innerHTML<400){
p4.innerHTML++;    
}  


},2)


rarrow.addEventListener("click",function(){
 
feedback1.style.display="none";
feedback2.style.display="block";	
    
    
})

larrow.addEventListener("click",function(){
    
feedback1.style.display="block";
feedback2.style.display="none";
     
   
    
})




setInterval(function(){
	
	if(document.body.scrollTop>100){
		
		navbar.style.backgroundColor="black";
        
	
	}
	
	else if(document.body.scrollTop<100){
		
		
		navbar.style.backgroundColor="rgba(0,0,0,0)";
	}
	else if(document.body.onscroll) {
		navname.style.display="block";
		navfun.style.display="block";
	}
},500)










































/*
window.addEventListener("load",setInterval(function(){
if(p1.innerHTML<100){
p1.innerHTML++;    
}    

if(p2.innerHTML<200){
p2.innerHTML++;    
}
    
if(p3.innerHTML<300){
p3.innerHTML++;    
}  

if(p4.innerHTML<400){
p4.innerHTML++;    
}  


},2))

*/