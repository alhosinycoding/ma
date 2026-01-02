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

// تسجيل الدخول وحفظ الجلسة
function login(){
  let u = username.value.trim();
  let p = password.value;
  if(users[u]===p){
    localStorage.setItem("loggedIn","true");
    localStorage.setItem("currentUser",u);
    alert("نورت المنصة ✨");
    accountName.innerText = "الاسم: "+u;
    show("home");
  } else { alert("بيانات غير صحيحة"); }
}

// تسجيل الخروج ومسح الجلسة
function logout(){
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
  alert("باي 👋 مستنيك تنورنا تاني");
  show("login");
}

function goHome(){ show("home"); }
function openScreen(id){ show(id); }

// التفاعل الذكي
function playLesson(){ alert("عاش يا بطل 💪"); }
function openExam(){ alert("شد حيلك 💥 وربنا معاك"); }

// Dark / Light Mode
const toggle = document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="light"){ document.body.classList.add("light"); }
toggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light")?"light":"dark");
};

// حماية الموقع
document.addEventListener("contextmenu",e=>e.preventDefault());
document.onkeydown = e=>{if(e.keyCode===123)return false;}

// فحص الجلسة عند التحميل
window.onload = ()=>{
  const loggedIn = localStorage.getItem("loggedIn");
  const user = localStorage.getItem("currentUser");
  if(loggedIn==="true" && users[user]){
    accountName.innerText = "الاسم: "+user;
    show("home");
  } else { show("login"); }
};
