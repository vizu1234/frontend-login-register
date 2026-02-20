document.addEventListener("DOMContentLoaded", () => {

  // Tabs
  const tabs = document.querySelectorAll(".tab");
  const forms = document.querySelectorAll(".form");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t=>t.classList.remove("active"));
      forms.forEach(f=>f.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // 3D Tilt Card
  const card = document.getElementById("card");
  document.addEventListener("mousemove", e => {
    const x = (window.innerWidth/2 - e.clientX)/50;
    const y = (window.innerHeight/2 - e.clientY)/50;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });

  // Cursor Glow
  const glow = document.getElementById("glow");
  document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  // Remember Device
  const rememberCheckbox = document.getElementById("rememberMe");
  const emailInput = document.querySelector("#login input[type='email']");
  const loginForm = document.getElementById("login");

  const savedEmail = localStorage.getItem("rememberedEmail");
  if(savedEmail){
    emailInput.value = savedEmail;
    rememberCheckbox.checked = true;
  }

  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    if(rememberCheckbox.checked){
      localStorage.setItem("rememberedEmail", emailInput.value);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
    alert("Login submitted (Demo)");
  });

});