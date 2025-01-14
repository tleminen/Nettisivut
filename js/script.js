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

  //Haettiin nappien elementit
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
});
