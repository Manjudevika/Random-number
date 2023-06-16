var b=Math.ceil(Math.random()*100); 
var c=0;
var view="";
document.getElementById("answer").onclick =function(){
    var a = parseInt(document.getElementById("n1").value); 
    
    if(a==b){
        view="congrats you won with in "+c+" trails";
        document.getElementById("wait").textContent =view;
        
        }
    else if(a<b)  {
    c++;
    view="try greater number";
    document.getElementById("wait").textContent =view;
  
    }
    else{
    c++;
    view="try smaller number";
    document.getElementById("wait").textContent =view;
}

    
}