/*FOR HEADER*/
/* HEADER読み込み */
document.addEventListener('DOMContentLoaded', function() {
fetch("/component/header.html")
  .then(response => response.text())
  .then(data => {
    const header = document.getElementById("header");
    if (header !== null) {
      header.innerHTML = data;
    } else {
      console.error("header要素が見つかりません");
    }
  });
});

/* FOOTER読み込み */
document.addEventListener('DOMContentLoaded', function() {
fetch("/component/footer.html")
  .then(response => response.text())
  .then(data => {
    const footer = document.getElementById("footer");
    if (footer !== null) {
      footer.innerHTML = data;
    } else {
      console.error("footer要素が見つかりません");
    }
  }); 
});

/*　旧ヘッダーフッター読み込み 
fetch("/component/header.html")
  .then(response => response.text())
  .then(data => {
  document.getElementById("header").innerHTML = data;
});

fetch("/component/footer.html")
  .then(response => response.text())
  .then(data => {
  document.getElementById("footer").innerHTML = data;
});*/

function openModal(img){
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  if (modal && modalImg) {
    modalImg.src = img.src;
    modal.classList.add("active");
  } else {
    console.error("modal要素が見つかりません");
  }
}

function closeModal(){
  const modal = document.getElementById("modal");
  if (modal) {
    modal.classList.remove("active");
  }
}
