// الحسابات
const users = {
  "يحيى حسين": "Yehia@2026",
  "مروان حسن": "Marwan@2026",
  "مروان طاهر": "Taher@2026",
  "سارة محمد": "Sara@2026"
};

function login(){
  let u = username.value.trim();
  let p = password.value;

  if(users[u] === p){
    alert("نورت المنصة ✨");
    document.getElementById("accountName").innerText = "الاسم: " + u;
    show("home");
  } else {
    alert("بيانات غير صحيحة");
  }
}

function logout(){
  alert("باي 👋 مستنيك تنورنا تاني");
  show("login");
}

function openScreen(id){
  show(id);
}

function goHome(){
  show("home");
}

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// تفاعل
function playLesson(){
  alert("عاش يا بطل 💪");
}

function openExam(){
  alert("شد حيلك 💥 وربنا معاك");
  // ضع رابط الفورم هنا
}

// أمان
document.addEventListener("contextmenu", e=>e.preventDefault());
document.onkeydown = e=>{
  if(e.keyCode==123){return false;}
};
