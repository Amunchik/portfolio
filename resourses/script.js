let showInfo = document.getElementById("open");
let hideInfo = document.getElementById("close");
let moreInfo = document.getElementById("more-info");

let open = () => {
    moreInfo.style.display = "flex";
    showInfo.style.display = "none";
}
 let close = () => {
    moreInfo.style.display = "none";
    showInfo.style.display = "block";
 }

 showInfo.addEventListener("click", open);
 hideInfo.addEventListener("click", close);


 let teaShop = document.getElementById("tea-shop");
 let scrap = document.getElementById("scrap");
 let company = document.getElementById("company");

 let firstProject = () => {
    let firstImage = document.getElementById("first-image");
    if(firstImage.style.display === "block"){
        firstImage.style.display = "none";
    } else {
        firstImage.style.display = "block";
    }
 }
  
  let secondProject = () => {
    let secondImage = document.getElementById("second-image");
    if(secondImage.style.display === "block"){
        secondImage.style.display = "none";
    } else {
        secondImage.style.display = "block";
    }
 }
 let thirdProject = () => {
    let thirdImage = document.getElementById("third-image");
    if(thirdImage.style.display === "block"){
        thirdImage.style.display = "none";
    } else {
        thirdImage.style.display = "block";
    }
 }

    teaShop.addEventListener("click", firstProject);
    scrap.addEventListener("click", secondProject);
    company.addEventListener("click", thirdProject);