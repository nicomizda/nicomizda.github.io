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

//作品ページヘッダー
fetch("/component/work-header.html")
  .then(response => response.text())
  .then(data => {
    const container = document.getElementById("work-header");
    if (container) {
      
      // HTMLを読み込む
      container.innerHTML = data;

      // データ取得
      const title = container.dataset.title;
      
      /*const titleEl = container.querySelector(".work-title");
      if (titleEl) {
        titleEl.textContent = title;*/
        
      const desc = container.dataset.description;
      const prev = container.dataset.prev;
      const next = container.dataset.next;

      // 要素に反映
      container.querySelector(".work-title").textContent = title;
      container.querySelector(".work-description").textContent = desc;
      container.querySelector(".nav-left").href = prev;
      container.querySelector(".nav-right").href = next;
      }
    });
