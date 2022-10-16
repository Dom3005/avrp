let slide = 0;
let slideAmount = 2;
let activeFeature = 0;

let features = [["Polizei", "images/polizei.jpg", "Unser Polizei System ist angepasst und hat paar Besonderheiten. Bisschen steht hier, bisschen auf Tiktok bro"],
["Gangs", "images/gangs.png", "Yo, also unser Gang Script ist auch besonders, glaube ich"],
["Team", "images/logo.png", "Team ist sehr freundlich glaube ich, bin mir da aber nicht so sicher"]]
showSlides();
setupFeatureSelector();

function showSlides() {
  let section1 = $("#home");
  section1.css("background-image",`linear-gradient(rgba(10,10,10, 0.9), rgba(29, 29, 29, 0.5)), url('images/background${slide+1}.jpg')`);
  slide = (slide + 1) % slideAmount;
  setTimeout(showSlides, 10000);
}

function setupFeatureSelector(){
    let children = document.getElementById('featureSelector').children;
    for (let i = 0; children[i]; i++) {
        children[i].innerHTML = features[i][0];
        children[i].onclick = function () {
            setFeature(i);
        }
    }
    setFeature(activeFeature);
    // $("#featureSelector").on('click', 'a', setFeature(0));
}

function setFeature(index){
    $(`#featureSelector > *`).css('transform', 'translateY(-5%)')
    $(`#featureSelector > *`).css('background-color', 'rgb(59, 109, 206)')
    $(`#featureSelector`).children().eq(index).css('transform', 'translateY(5%)')
    $(`#featureSelector`).children().eq(index).css('background-color', 'rgb(50, 100, 200)')
    console.log($(`#featureSelector`).children().eq(index))
    let img = $('#featureTable img');
    let txt = $('#featureTable a');
    img.attr('src', features[index][1]);
    txt.text(features[index][2]);
    activeFeature = index;
}