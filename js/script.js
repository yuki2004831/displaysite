const form = document.getElementById("messageForm");
  const input = document.getElementById("messageInput");
  const scrollText = document.getElementById("scrollText");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const message = input.value.trim();
    if (message) {
      scrollText.textContent = message;
      scrollText.style.animation = "none"; // アニメーションリセット
      scrollText.offsetHeight;             // DOM強制再計算
      scrollText.style.animation = null;
      input.value = "";
    }
  });

  function goFullscreen() {
    const elem = document.querySelector('.top-half');  // ここをdocument.documentElementから変更
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }

  function addCss() {
    scrollText.style.color = "blue";
  }

  function addCss2(){
    scrollText.style.color = "red";
  }
  function addCss3(){
    scrollText.style.color = "green";
  }
  function addCss4(){
    scrollText.style.color = "yellow";
  }