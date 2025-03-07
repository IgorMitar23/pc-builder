function toAsk() {
  var pitanje = document.getElementById("sinan").value;
  if (pitanje === null || pitanje === "") {
    alert("Niste uneli pitanje!");
  } else {
    alert("Hvala vam na postavljenom pitanju!");
  }
  document.getElementById("sinan").value = "";
}

function uvecanaSlika(ImgLink) {
  document.getElementById("FullImage").src = ImgLink;
  document.getElementById("FullImageView").style.display = "block";
}
function smanjiSliku() {
  document.getElementById("FullImageView").style.display = "none";
}
function ukupnaSuma() {
  document.getElementById("rezultatkonfigurator").value = "";
  document.getElementById("error-message").innerHTML = "";
  document.getElementById("cilj").innerHTML = "";
  var item1Cena = parseInt(document.getElementById("procesorlista").value);
  var item2Cena = parseInt(document.getElementById("ramlista").value);
  var item3Cena = parseInt(document.getElementById("plocalista").value);
  var item4Cena = parseInt(document.getElementById("grafickakartalista").value);
  var item5Cena = parseInt(document.getElementById("kucistelista").value);
  var item6Cena = parseInt(document.getElementById("napajanjelista").value);
  var cena =
    item1Cena + item2Cena + item3Cena + item4Cena + item5Cena + item6Cena;

  var select1 = document.getElementById("procesorlista");
  var select2 = document.getElementById("plocalista");
  var poruka = document.getElementById("error-message");
  var selectedOption1 = select1.options[select1.selectedIndex];
  var selectedOption2 = select2.options[select2.selectedIndex];

  var optgroup1 = selectedOption1.parentElement.label;
  var optgroup2 = selectedOption2.parentElement.label;

  if (
    document.getElementById("procesorlista").value === "" ||
    document.getElementById("ramlista").value === "" ||
    document.getElementById("plocalista").value === "" ||
    document.getElementById("grafickakartalista").value === "" ||
    document.getElementById("kucistelista").value === "" ||
    document.getElementById("napajanjelista").value === ""
  ) {
    document.getElementById("rezultatkonfigurator").value =
      "Niste izabrali sve komponente!";
  } else if (optgroup1 !== optgroup2) {
    poruka.innerHTML =
      "Greška! Ne možete kombinovati Intel procesor sa AMD pločom i obrnuto!";
  } else {
    var resenje = document.getElementById("cilj");
    document.getElementById("rezultatkonfigurator").value = cena + " dinara";
    resenje.innerHTML =
      "Vaša konfiguracija je sačuvana, javićemo vam se u što kraćem vremenskom periodu!";
  }
}
