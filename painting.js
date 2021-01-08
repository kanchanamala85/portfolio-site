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
//----------------------------Edit Only Here--------------------------
/*
1>Add Image number to corresponding lists by adding a comma and putting the number in '' quotes as shown.
2> Images in Portrait orientation to portrait_imgs list.
3> Images in Landscape orientation to landscape_imgs list. 
*/
var portrait_imgs=['1','2','4','5','6','8','9','12','14','15'];
var landscape_imgs=['3','7','10','11','13'];
//--------------------------------------------------------------------
for(i=0;i<portrait_imgs.length;i++){
    var im=document.createElement("img");
    im.setAttribute("class","materialboxed portrait");
    //im.setAttribute("class","");
    im.setAttribute("src",path+portrait_imgs[i]+'.jpg');
    col_array_portrait[i%4].appendChild(im)
    c+=1;
}
c=0;
for(i=0;i<landscape_imgs.length;i++){
    var im=document.createElement("img");
    im.setAttribute("class","materialboxed landscape");
    //im.setAttribute("class","");
    im.setAttribute("src",path+landscape_imgs[i]+'.jpg');
    col_array_landscape[i%4].appendChild(im)
    c+=1;
}