var file_number=13
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
var path="assets/portraits/"
var c=0;

//----------------------------Edit Only Here--------------------------
/*
1>Add Image number to corresponding lists by adding a comma and putting the number in '' quotes.
2> Images in Portrait orientation to portrait_imgs list.
3> Images in Landscape orientation to landscape_imgs list. 

To remove an image simply delete that number from the list.
*/
var portrait_imgs=[
                {
                    name:"portrait1.jpg",
                    description:"test"
                },
                {
                    name:"portrait2.jpg",
                    description:"test"
                },
                {
                    name:"portrait3.jpg",
                    description:"test"
                },
                {
                    name:"portrait4.jpg",
                    description:"test"
                },
                {
                    name:"portrait5.jpg",
                    description:"test"
                },
                {
                    name:"portrait6.jpg",
                    description:"test"
                },
                {
                    name:"portrait7.jpg",
                    description:"test"
                },
                {
                    name:"portrait8.jpg",
                    description:"test"
                },
                {
                    name:"portrait9.jpg",
                    description:"test"
                },
                {
                    name:"portrait10.jpg",
                    description:"test"
                },
                {
                    name:"portrait11.jpg",
                    description:"test"
                },
                {
                    name:"portrait13.jpg",
                    description:"test"
                }
            ];
var landscape_imgs=[
                {
                    name:"portrait12.jpg",
                    description:"test"
                }
            ];
//--------------------------------------------------------------------

for(i=0;i<portrait_imgs.length;i++){
    var im=document.createElement("img");
    im.setAttribute("title",portrait_imgs[i].description);
    im.setAttribute("class","materialboxed portrait");
    im.setAttribute("src",path+portrait_imgs[i].name);
    col_array_portrait[i%4].appendChild(im)
    c+=1;
}
c=0;
for(i=0;i<landscape_imgs.length;i++){
    var im=document.createElement("img");
    im.setAttribute("class","materialboxed landscape");
    im.setAttribute("title",landscape_imgs[i].description);
    im.setAttribute("src",path+landscape_imgs[i].name);
    col_array_landscape[i%4].appendChild(im)
    c+=1;
}

