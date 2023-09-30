for (let i = 1; i <= 11; i++) {
  let div = document.getElementById(`div${i}`);
  div.style.height = "75px";
  div.style.width = "220px";
  div.style.background = "var(--clr)";
  div.style.transform = "skewY(-5deg)";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  
  const computedStyle = getComputedStyle(div);
  const langValue = computedStyle.getPropertyValue("--lang");
  const image1 = computedStyle.getPropertyValue("--img");

  let language = document.createElement("div");
  language.style.width = "40px";
  language.style.height = "30px";
  language.style.background = "black";
  language.style.position = "relative";
  language.style.left = "45px";
  div.appendChild(language);

  if (langValue == "british") {
      language.style.backgroundImage = `url("uk.jpeg")`;
      language.style.backgroundSize = "40px 30px";
  }

  if (langValue == "spanish") {
    language.style.backgroundImage = `url("spain.jpeg")`;
    language.style.backgroundSize = "40px 30px";
}


  if (langValue == "german") {
      language.style.backgroundImage = `url("germany.jpeg")`;
      language.style.backgroundSize = "40px 30px";
  }

  if (langValue == "serbian") {
      language.style.backgroundImage = `url("serbia.jpeg")`;
      language.style.backgroundSize = "40px 30px";
  }

  if (langValue == "italian") {
      language.style.backgroundImage = `url("italy.jpeg")`;
      language.style.backgroundSize = "40px 30px";
  }

  if (langValue == "french") {
      language.style.backgroundImage = `url("france.jpeg")`;
      language.style.backgroundSize = "40px 30px";
  }

  if (langValue == "portugal") {
    language.style.backgroundImage = `url("portugal.jpeg")`;
    language.style.backgroundSize = "40px 30px";
}

  var imgElements = div.querySelectorAll("img");

  imgElements.forEach(function (img) {
      if (image1 == "boat") {
          img.src = "boat.png";
          img.style.position = "relative";
          img.style.right = "100px";
          img.style.width = "80px";
      }
  });

  imgElements.forEach(function (img) {
    if (image1 == "car") {
        img.src = "car.png";
        img.style.position = "relative";
        img.style.right = "100px";
        img.style.width = "80px";
    }
});

  imgElements.forEach(function (img) {
    if (image1 == "car2") {
      img.src = "car2.png";
      img.style.position = "relative";
      img.style.right = "100px";
      img.style.width = "80px";
    }
  });

  imgElements.forEach(function (img) {
    if (image1 == "car3") {
      img.src = "car3.png";
      img.style.position = "relative";
      img.style.right = "100px";
      img.style.width = "80px";
    }
  });

  imgElements.forEach(function (img) {
    if (image1 == "tank") {
      img.src = "tank.png";
      img.style.position = "relative";
      img.style.right = "100px";
      img.style.width = "80px";
    }
  });

  imgElements.forEach(function (img) {
    if (image1 == "helicopter") {
      img.src = "helicopter.png";
      img.style.position = "relative";
      img.style.right = "100px";
      img.style.width = "80px";
      img.style.height = "50px";
    }
  });

  imgElements.forEach(function (img) {
    if (image1 == "car4") {
      img.src = "car4.png";
      img.style.position = "relative";
      img.style.right = "100px";
      img.style.width = "80px";
    }
  });

  imgElements.forEach(function (img) {
    if (image1 == "car5") {
      img.src = "car5.png";
      img.style.position = "relative";
      img.style.right = "100px";
      img.style.width = "80px";
    }
  });

  imgElements.forEach(function (img) {
    if (image1 == "van") {
      img.src = "van.png";
      img.style.position = "relative";
      img.style.right = "100px";
      img.style.width = "80px";
    }
  });

  imgElements.forEach(function (img) {
    if (image1 == "moneytruck") {
      img.src = "moneytruck.png";
      img.style.position = "relative";
      img.style.right = "100px";
      img.style.width = "80px";
    }
  });

  imgElements.forEach(function (img) {
    if (image1 == "car6") {
      img.src = "car6.png";
      img.style.position = "relative";
      img.style.right = "100px";
      img.style.width = "80px";
    }
  });
}
