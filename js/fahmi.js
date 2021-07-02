const countEl = document.getElementById('visit');
updateVisitCount();
function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/fahmiapis/3dec3a40-753e-4c32-8c92-b61f49dfeef5/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}

$.getJSON("https://api.ipify.org?format=json", 
function(data) { 
    $("#ip").html(data.ip); 
}) 


let text_el=document.querySelector('span#browser_info')
let hSalam=document.querySelector('span#browser_sholat')
setInterval(()=>{var d=new Date();const jam=d.getHours().toString().padStart(2,0)
const menit=d.getMinutes().toString().padStart(2,0)
const detik=d.getSeconds().toString().padStart(2,0)
if(hSalam<4){hSalam.innerHTML="Selamat Malam"}else if(hSalam<11){hSalam.innerHTML="Selamat Pagi"}else if(hSalam<16){hSalam.innerHTML="Selamat Siang"}else if(hSalam<20){hSalam.innerHTML="Selamat Sore"}
else{hSalam.innerHTML="Selamat Malam";}
text_el.innerHTML=jam+":"+menit+":"+detik},250)