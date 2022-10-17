let slide = 0;
let slideAmount = 2;
let activeFeature = 0;

let features = [["Polizei", "images/lspd.jpeg", "Unser 'LSPD' überzeugt durch eine große einzigartige Polizeistation." +
    "Die Polizei sorgt für die Sicherheit der Bürger von Los Santos. in der Polizeistation gibt es viele einzigartige coole Scripts, zum Beispiel"+
    "können kriminelle Banden die Eingangstüren und die Tür des Chief-Büros aufbrechen anschließend können sie ihr Talent im Safe knacken beweisen."],
["Gangs", "images/gand.webp", "Unsere Gangs in Los Santos haben viel Möglichkeiten ihre Größe in Los Santos unter Beweis zu stellen."+ 
    "Die Gangs können spannende Missionen absolvieren, zum Beispiel können sie unseren einzigartigen 'Staatsbank-Raub' machen mehr Dazu in unserem TikTok über den Server." +
    "Gangs kann jeder gründen. Gangs können sich ihr eigenes Anwesen etc. gegen Geld kaufen."],
["Team", "images/logo.png", "Unser Team ist immer für jeden da und erreichbar sie helfen gerne bei Fragen rund um GTA 5 oder FiveM. Die Teamler sind im Spiel/Roleplay auch"+ 
    "Mitspieler. Die Teamler spielen auch Roleplay und sie sind der Staat bzw die Stadtverwaltung. Wir helfen bei Frahen immer gerne mit Motivation und Freude euch"+ 
    "guten Spielspaß zu ermöglichen weiter. "]]
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