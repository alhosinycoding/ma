const users = {
  "يحيى حسين":"Yehia@2026",
  "مروان حسن":"Marwan@2026",
  "مروان طاهر":"Taher@2026",
  "سارة محمد":"Sara@2026"
};

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function login(){
  let u=username.value.trim(), p=password.value;
  if(users[u]===p){
    localStorage.setItem("loggedIn","true");
    localStorage.setItem("currentUser",u);
    alert("نورت المنصة ✨");
    accountName.innerText = "الاسم: "+u;
    show("home");
  } else alert("بيانات غير صحيحة");
}

function logout(){
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
  alert("باي 👋 مستنيك تنورنا تاني");
  show("login");
}

function goHome(){ show("home"); }
function openScreen(id){ show(id); }

function playLesson(link){
  document.getElementById("videoBox").innerHTML=`<iframe src="${link}" frameborder="0" allowfullscreen></iframe>`;
  alert("عاش يا بطل 💪");
}

function openExam(link){
  alert("شد حيلك 💥 وربنا معاك");
  window.open(link,'_blank');
}

// Dark / Light Mode
const toggle=document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="light"){ document.body.classList.add("light"); }
toggle.onclick=()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
};

// أمان
document.addEventListener("contextmenu",e=>e.preventDefault());
document.onkeydown=e=>{if(e.keyCode===123)return false;}

// جلسة محفوظة
window.onload=()=>{
  const loggedIn=localStorage.getItem("loggedIn");
  const user=localStorage.getItem("currentUser");
  if(loggedIn==="true" && users[user]){
    accountName.innerText = "الاسم: "+user;
    show("home");
  } else show("login");
};
