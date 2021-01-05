var file_number=15
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
var c4=document.getElementById('c4');
var c5=document.getElementById('c5');
var c6=document.getElementById('c6');
var col_array_portrait=[c1,c2,c3];
var col_array_landscape=[c4,c5,c6];
var path="assets/paintings/painting";
var c=0;
var p=['1','2','4','5','6','8','9','12','14','15'];
var l=['3','7','10','11','13'];
var state=1;
function rerender(state){
    console.log("Hey");
    c1.innerHTML="";
    c2.innerHTML="";
    c3.innerHTML="";
    c4.innerHTML="";
    c5.innerHTML="";
    c6.innerHTML="";
    var w= window.innerWidth;
    if ((w>750)&&(state!=3)){
        render(3);
        state=3;
    }
    else if ((w<=750 && w>500)&&(state!=2)){
        render(2);
        state=2;
    }
    else if(state!=1){
        render(1);
        state=1;
    }
}
function render(state){
    var c=0;
    console.log(state);
    for(i=0;i<p.length;i++){
        var im=document.createElement("img");
        im.setAttribute("class","materialboxed portrait");
        //im.setAttribute("class","");
        im.setAttribute("src",path+p[i]+'.jpg');
        col_array_portrait[c%state].appendChild(im)
        c+=1;
    }
    c=0;
    for(i=0;i<l.length;i++){
        var im=document.createElement("img");
        im.setAttribute("class","materialboxed landscape");
        //im.setAttribute("class","");
        im.setAttribute("src",path+l[i]+'.jpg');
        col_array_landscape[c%state].appendChild(im)
        c+=1;
    }
}

window.addEventListener("resize",rerender(state));
