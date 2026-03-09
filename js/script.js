/*FOR HEADER*/
fetch("/header.html")
.then(response => response.text())
.then(data => {
document.getElementById("header").innerHTML = data;
});

function openModal(img){
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}
