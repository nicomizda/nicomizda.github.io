/*FOR HEADER*/
fetch("/component/header.html")
  .then(response => response.text())
  .then(data => {
  document.getElementById("header").innerHTML = data;
});

fetch("/component/footer.html")
  .then(response => response.text())
  .then(data => {
  document.getElementById("footer").innerHTML = data;
});

function openModal(img){
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = img.src;
  modal.classList.add("active");
}

function closeModal(){
  /*document.getElementById("modal").style.display = "none";*/
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
}
