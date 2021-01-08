var file_number=15
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
var c4=document.getElementById('c4');
var c5=document.getElementById('c5');
var c6=document.getElementById('c6');
var c7=document.getElementById('c7');
var c8=document.getElementById('c8');
var col_array_portrait=[c1,c2,c3,c4];
var col_array_landscape=[c5,c6,c7,c8];
var path="assets/paintings/painting";
var c=0;
var p=['1','2','4','5','6','8','9','12','14','15'];
var l=['3','7','10','11','13'];
for(i=0;i<p.length;i++){
    var im=document.createElement("img");
    im.setAttribute("class","materialboxed portrait");
    //im.setAttribute("class","");
    im.setAttribute("src",path+p[i]+'.jpg');
    col_array_portrait[c%4].appendChild(im)
    c+=1;
}
c=0;
for(i=0;i<l.length;i++){
    var im=document.createElement("img");
    im.setAttribute("class","materialboxed landscape");
    //im.setAttribute("class","");
    im.setAttribute("src",path+l[i]+'.jpg');
    col_array_landscape[c%4].appendChild(im)
    c+=1;
}