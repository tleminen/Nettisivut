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

  //Piilota valikko klikkaamalla linkkiä
  const valikonLinkit = document.querySelectorAll(".valikon-sisalto");

  valikonLinkit.forEach((link) => {
    link.addEventListener("click", () => {
      valikkoSisalto.classList.remove("show");
    });
  });
});
