
 gsap.from(".KdoHr", {
   scrollTrigger: {
     trigger: ".About",
     start: "top 20%",
     toggleActions: "play reverse play reverse", // Reversuje animaci při scrollování zpět
   },
   x: 5000, // Posun dolů
   opacity: 0, // Skrytí
   duration: 0.5, // Délka animace
   });

   gsap.from(".KdoHr2", {
     scrollTrigger: {
       trigger: ".About",
       start: "top 20%",
       markers: false,
       toggleActions: "play reverse play reverse", // Reversuje animaci při scrollování zpět
     },
     x: -5000, // Posun dolů
     opacity: 0, // Skrytí
     duration: 0.5, // Délka animace
   });

gsap.to(".first", {
  filter: "blur(8px)",
  "-webkit-filter": "blur(8px)",
  scrollTrigger: {
    trigger: ".firstPage",
    start: "top top", 
    endtrigger: ".kdo",       // Začne, když je .first na vrchu obrazovky
    end: "120% top",       // Skončí, když .first opustí obrazovku
    scrub: true,             // Plynulý efekt při scrollování
    pin: true,               // Drží .first na místě, dokud přes ni neprojde WelcomeText
    pinSpacing: false,
    markers: false,      // Odstraní extra odsazení pod prvkem
  }
});


gsap.from(".nadpis-hr", {
  scrollTrigger: {
    trigger: ".Projects",
    start: "top 60%",
    markers: false,
    toggleActions: "play reverse play reverse", // Reversuje animaci při scrollování zpět
  },
  x: 5000, // Posun dolů
  opacity: 0, // Skrytí
  duration: 0.5, // Délka animace
});

function ShowSideBar() {
  document.querySelector('.sidebar').style.display = 'flex'; // Zobrazí sidebar
  document.documentElement.classList.add('no-scroll'); // Zakáže scrollování
}

function HideSideBar() {
  document.querySelector('.sidebar').style.display = 'none'; // Skryje sidebar
  document.documentElement.classList.remove('no-scroll'); // Povolení scrollování
}
const cursor = document.querySelector('.cursor');
    
document.addEventListener('mousemove', (e) => {
  // Použijeme pageX a pageY pro správné sledování pozice i při scrollování
  cursor.style.top = (e.pageY - 5) + 'px'; // Pozice na ose Y
  cursor.style.left = (e.pageX - 10) + 'px'; // Pozice na ose X
});


function show() {
  console.log("ahoj");
  const a = document.querySelector('.About');
  if (a) {
      // Nastavení GIFu jako pozadí
      a.style.backgroundImage = 'url(./Images/1.gif)';
      console.log("GIF nastaven jako pozadí");

      // Nastavení timeoutu na dobu trvání GIFu (např. 3 sekundy)
      setTimeout(() => {
          resetBackground(a);
      }, 7000); // 3000 ms = 3 sekundy, upravte podle délky GIFu
  } else {  
      console.log("Element s třídou 'About' nebyl nalezen.");
  }
}


function resetBackground(element) {
  // Odstraníme GIF z pozadí a vrátíme výchozí styl
  element.style.backgroundImage = '';
  console.log("Pozadí resetováno po skončení GIFu.");
}


let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('nav a')


window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector('nav a[href*=' + id + ']');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};

navlinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 

    document.documentElement.style.scrollBehavior = 'smooth';

    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView();
    }

    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'auto';
    }, 1000);
  });
});



// gsap.from("#B1", {
//   scrollTrigger: {
//     trigger: ".Project-Box1",
//     start: "center center",
//     markers: false,
//     pin: true,
//     toggleActions: "play reverse play reverse", // Reversuje animaci při scrollování zpět
//   },
//   duration: 0.5, // Délka animace
// });

gsap.from(".Website-projekt1", {
  scrollTrigger: {
    trigger: ".Website-projekt1",
    start: "top 80%",
    endtrigger: ".Website-projekt1",
    end:"bottom 80%",
    toggleActions: "play reverse play reverse",
    scrub: 1,
    markers:false, // Reversuje animaci při scrollování zpět
  },
  duration: 0.5, // Délka animace
  x: 800
});
gsap.from(".Website-projekt2", {
  scrollTrigger: {
    trigger: ".Website-projekt2",
    start: "top 80%",
    endtrigger: ".Website-projekt2",
    end:"bottom 80%",
    toggleActions: "play reverse play reverse",
    scrub: 1,
    markers: false, // Reversuje animaci při scrollování zpět
  },
  duration: 0.5, // Délka animace
  x: 800
});
gsap.from(".Website-projekt3", {
  scrollTrigger: {
    trigger: ".Website-projekt3",
    start: "top 80%",
    endtrigger: ".Website-projekt3",
    end:"bottom 80%",
    toggleActions: "play reverse play reverse",
    scrub: 1,
    markers:false, // Reversuje animaci při scrollování zpět
  },
  duration: 0.5, // Délka animace
  x: 800
});

gsap.from(".Website-projekt4", {
  scrollTrigger: {
    trigger: ".Website-projekt4",
    start: "top 80%",
    endtrigger: ".Website-projekt4",
    end:"bottom 80%",
    toggleActions: "play reverse play reverse",
    scrub: 1,
    markers:false, // Reversuje animaci při scrollování zpět
  },
  duration: 0.5, // Délka animace
  x: -800
});

gsap.from(".Website-projekt5", {
  scrollTrigger: {
    trigger: ".Website-projekt5",
    start: "top 80%",
    endtrigger: ".Website-projekt5",
    end:"bottom 80%",
    toggleActions: "play reverse play reverse",
    scrub: 1,
    markers: false, // Reversuje animaci při scrollování zpět
  },
  duration: 0.5, // Délka animace
  x: -800
});

gsap.from(".Website-projekt6", {
  scrollTrigger: {
    trigger: ".Website-projekt6",
    start: "top 80%",
    endtrigger: ".Website-projekt6",
    end:"bottom 80%",
    toggleActions: "play reverse play reverse",
    scrub: 1,
    markers:false, // Reversuje animaci při scrollování zpět
  },
  duration: 0.5, // Délka animace
  x: -800
});
gsap.from(".Website-projekt7", {
  scrollTrigger: {
    trigger: ".Website-projekt7",
    start: "top 80%",
    endtrigger: ".Website-projekt7",
    end:"bottom 80%",
    toggleActions: "play reverse play reverse",
    scrub: 1,
    markers: false, // Reversuje animaci při scrollování zpět
  },
  duration: 0.5, // Délka animace
  x: 800
});

gsap.from(".Website-projekt8", {
  scrollTrigger: {
    trigger: ".Website-projekt8",
    start: "top 80%",
    endtrigger: ".Website-projekt8",
    end:"bottom 80%",
    toggleActions: "play reverse play reverse",
    scrub: 1,
    markers: false, // Reversuje animaci při scrollování zpět
  },
  duration: 0.5, // Délka animace
  x: 800
});



// Animace odpočtu pro Nadpis-h2
gsap.to(".Nadpis-h2", {
  textContent: 0, // Konečná hodnota
  duration: 1,    // Doba trvání animace v sekundách
  ease: "linear", // Typ animace
  snap: { textContent: 1 }, // Zaokrouhlování na celá čísla
  onUpdate: function () {
    // Funkce, která se spustí při každém snímku animace
    const value = Math.ceil(this.targets()[0].textContent);
    this.targets()[0].textContent = value;
  },
  scrollTrigger: {
    trigger: ".Nadpis-h2",
    start: "top 80%", // Spustí animaci, když se element dostane na 80 % výšky okna
    end: "top 50%",   // Ukončí animaci na 50 % výšky okna
  }
});



gsap.to(".Nadpis-h4", {
  textContent: 100, // Konečná hodnota
  duration: 1,    // Doba trvání animace v sekundách
  ease: "linear", // Typ animace
  snap: { textContent: 1 }, // Zaokrouhlování na celá čísla
  onUpdate: function () {
    // Funkce, která se spustí při každém snímku animace
    const value = Math.ceil(this.targets()[0].textContent);
    this.targets()[0].textContent = value;
  },
  scrollTrigger: {
    trigger: ".Nadpis-h3",
    start: "top center", // Spustí animaci, když se element dostane na 80 % výšky okna
    end: "top 50%",   // Ukončí animaci na 50 % výšky okna   // Zobrazení značek pro ladění
  }
});


window.onload = function() {
  // Zavolání funkce, která manipuluje s elementem sekce home
  callHomeSection();
};

function callHomeSection() {
  var homeSection = document.getElementById('home');
  
  // Příklad akce: změna pozadí sekce 'home'
  if (homeSection) {
      homeSection.style.backgroundColor = "#f0f0f0"; // Nastaví pozadí na světle šedou
      console.log("Sekce home byla načtena a pozadí bylo změněno.");
  }
}