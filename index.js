document.onreadystatechange = function () {

  if (document.readyState == 'complete') {

    setTimeout(
      function () {
        document.getElementById("tlo").style.setProperty("opacity", "1", "important");
      },
      200
    );

    setTimeout(
      function () {
        document.getElementById("warstwa").style.setProperty("opacity", ".075", "important");
      },
      1200
    );

    setTimeout(
      function () {
        document.getElementById("ramka").style.setProperty("opacity", "1", "important");
        document.getElementById("ramka").style.setProperty("margin-top", "0", "important");
        document.getElementById("ramka").classList.add("rotate");
      },
      1000
    );

  }

};