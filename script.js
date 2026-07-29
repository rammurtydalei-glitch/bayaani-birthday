const photos=[1,2,3,4,5,6,7,8,9,10].map(i=>'images/photo'+i+'.jpg');
let i=0;const img=document.getElementById('slide');
setInterval(()=>{i=(i+1)%photos.length;img.src=photos[i]},2500);
