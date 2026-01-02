// الحسابات
const users = {
  "يحيى حسين":"Yehia@2026",
  "مروان حسن":"Marwan@2026",
  "مروان طاهر":"Taher@2026",
  "سارة محمد":"Sara@2026",
  "مشرف المنصة":"Admin@2026"
};

// عرض شاشة
function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Toast notification
function showToast(msg){
  const toast=document.createElement('div');
  toast.className='toast';
  toast.innerText=msg;
  document.getElementById('toastContainer').appendChild(toast);
  toast.onclick=()=>toast.remove();
  setTimeout(()=>{toast.remove()},2000);
}

// تسجيل الدخول
function login(){
  let u=username.value.trim(), p=password.value;
  if(users[u]===p){
    localStorage.setItem("loggedIn","true");
    localStorage.setItem("currentUser",u);
    accountName.innerText="الاسم: "+u;
    showToast("نورت المنصة ✨");
    show("home");
  } else showToast("بيانات غير صحيحة ❌");
}

// تسجيل الخروج
function logout(){
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
  showToast("باي 👋 مستنيك تنورنا تاني");
  show("login");
}

function goHome(){ show("home"); }
function openScreen(id){ show(id); }

// تشغيل الفيديو داخل المنصة
function playLesson(link){
  document.getElementById("videoBox").innerHTML=`<iframe src="${link}" frameborder="0" allowfullscreen></iframe>`;
  showToast("عاش يا بطل 💪");
}

// فتح الاختبارات
function openExam(link){
  showToast("شد حيلك 💥 وربنا معاك");
  window.open(link,'_blank');
}

// Dark / Light Mode
const toggle=document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="light"){ document.body.classList.add("light"); }
toggle.onclick=()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
};

// حماية
document.addEventListener("contextmenu",e=>e.preventDefault());
document.onkeydown=e=>{if(e.keyCode===123)return false;}

// الجلسة عند التحميل
window.onload=()=>{
  const loggedIn=localStorage.getItem("loggedIn");
  const user=localStorage.getItem("currentUser");
  if(loggedIn==="true" && users[user]){
    accountName.innerText="الاسم: "+user;
    show("home");
  } else show("login");
};
