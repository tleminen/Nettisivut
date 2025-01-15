window.addEventListener("DOMContentLoaded", (event) => {
  //navigointipalkin pienentäminen funktio
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  //pienennä navigointipalkkia

  navbarShrink();

  //pienennä navigointipalkkia kun sivu on scrollattu

  document.addEventListener("scroll", navbarShrink);

  const valikko = document.querySelector(".valikko");
  const valikkoSisalto = document.querySelector(".valikon-sisalto");

  valikko.addEventListener("click", () => {
    valikkoSisalto.classList.toggle("show");
  });

  //Piilota valikko klikkaamalla linkkiä projektit.html
  const valikonLinkit = document.querySelectorAll(".valikon-sisalto");

  valikonLinkit.forEach((link) => {
    link.addEventListener("click", () => {
      valikkoSisalto.classList.remove("show");
    });
  });

  //kuvien vaihtaminen toiminto

  //Haetaan nappien elementit
  const slider = document.querySelector(".slider");
  const edellinenNappi = document.getElementById("edellinen");
  const seuraavaNappi = document.getElementById("seuraava");
  let currentKuva = 0;

  //Kuvien vaihtamisen funktio, jossa se ottaa parametrina suunta-arvon (edellinen tai seuraava)
  function vaihdaKuva(suunta) {
    if (suunta === "seuraava") {
      currentKuva++;
      if (currentKuva >= slider.children.length) {
        currentKuva = 0;
      }
    } else if (suunta === "edellinen") {
      currentKuva--;
      if (currentKuva < 0) {
        currentKuva = slider.children.length - 1;
      }
    }

    //Lasketaan, kuinka paljon slider-elementtiä pitää siirtää, jotta oikea kuva näkyy.
    const translateX = -currentKuva * slider.offsetWidth;
    //Siirtää slider-elementtiä CSS:n transform`-ominaisuuden avulla.
    slider.style.transform = `translateX(${translateX}px)`;
  }

  //Lisätään tpahtumakuuntelijat
  edellinenNappi.addEventListener("click", () => vaihdaKuva("edellinen"));
  seuraavaNappi.addEventListener("click", () => vaihdaKuva("seuraava"));

  //MUNA CLICKER

  let munia = 0;
  let klikkauksenTeho = 1;
  let taso = 50;
  let voittoRaja = 30000;
  const muna = document.getElementById("muna");
  const laskuri = document.getElementById("laskuri");
  const upgradeButton = document.getElementById("upgrade");

  // Värit, joita muna käyttää
  const varit = ["#000000", "#CD7F32", "#c0c0c0", " #ffd700"];
  let variIndeksi = 0; // Alkuväri

  //Lisätään tapahtumakuuntelija
  muna.addEventListener("click", () => {
    munia += klikkauksenTeho;
    laskuri.textContent = munia;

    // Tarkistetaan, onko saavutettu 5000 munan raja
    //console.log(munia);
    if (munia > taso) {
      taso *= 2;
      variIndeksi = (variIndeksi + 1) % varit.length; // Vaihdetaan väriä
      //console.log("uudestaan: ", variIndeksi);
      muna.style.backgroundColor = varit[variIndeksi];
    }

    // Tarkistetaan, onko pelaaja voittanut pelin
    if (munia >= voittoRaja) {
      alert("Voitit pelin!");
      // Asetetaan muuttujat alkuarvoihin
      munia = 0;
      klikkauksenTeho = 1;
      klikkauksia = 0;
      variIndeksi = 0;
      muna.style.backgroundColor = varit[variIndeksi];
      laskuri.textContent = munia;
      upgradeButton.textContent = `Upgrade (${1 + klikkauksenTeho}x)`;
    }
  });

  //Lisätään tapahtumakuuntelija

  upgradeButton.addEventListener("click", () => {
    if (munia >= 10) {
      munia -= 10;
      klikkauksenTeho++;
      laskuri.textContent = munia;
      upgradeButton.textContent = `Upgrade (${1 + klikkauksenTeho}x)`;
    }
  });


});
