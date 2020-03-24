$(document).ready(function() {
  $('.jsinit').click(function() {
      mode = 'js';
      $(".language").toggleClass("hide")
      $(".tabjs").toggleClass("hide")
      $(".console").toggleClass("hide")
      $(".title h2").html("TYPE WHEN READY!")
      $(".title h1").html("YOU HAVE 60 SECONDS!");
      codeArray(randomCode);
      typeCheck(splitArray);
      createSpanStructure(splitArray);
      countDown();
  });
  $('.cssinit').click(function() {
      mode = 'css';
      $(".language").toggleClass("hide")
      $(".tabcss").toggleClass("hide")
      $(".console").toggleClass("hide")
      $(".title h2").html("TYPE WHEN READY!")
      $(".title h1").html("YOU HAVE 60 SECONDS!");
      codeArray(csCode);
      typeCheck(cssArray);
      createSpanStructure(cssArray);
      countDown();
  });
  $('.htmlinit').click(function() {
      mode = 'html';
      $(".language").toggleClass("hide")
      $(".tabindex").toggleClass("hide")
      $(".console").toggleClass("hide")
      $(".title h2").html("TYPE WHEN READY!")
      $(".title h1").html("YOU HAVE 60 SECONDS!");
      codeArray(htmlCode);
      typeCheck(htmlArray);
      createSpanStructure(htmlArray);
      countDown();
  });
});
$(document).ready(function() {
  $('.restart').click(function() {
      location.reload();
  });
});
$(document).one('keypress', function(event) {
  $('.start').addClass('hide');
  $(".title h2").addClass("disappear");
});
$('.btn-danger').click(function() {
  $('.btn-danger').popover('toggle');
});
$(document).ready(function() {
  $('.results').click(function() {
      $('#myModal').modal('show');
  });
});
function speedPerMin(speed) {
  if (speed <= 149) {
      $('.rank').text("Your rank: Beginner.");
      $('.nextrank').text("Next rank at 150 CPM");
      $('.rankgif').attr('src', './images/noob.gif');
  } else if (speed <= 169) {
      $('.rank').text("Your rank: Average.");
      $('.nextrank').text("Next rank at 170 CPM");
      $('.rankgif').attr('src', './images/grandpa.gif');
  } else if (speed <= 199) {
      $('.rank').text("Your rank: Master.");
      $('.nextrank').text("Next rank at 200 CPM");
      $('.rankgif').attr('src', './images/notgood.gif');
  } else if (speed <= 229) {
      $('.rank').text("Your rank: Typemaster.");
      $('.nextrank').text("Next rank at 230 CPM");
      $('.rankgif').attr('src', './images/busy.gif');
  } else if (speed <= 249) {
      $('.rank').text("Your rank: Megaracer.");
      $('.nextrank').text("Next rank at 250 CPM");
      $('.rankgif').attr('src', './images/jim.gif');
  } else {
      $('.rank').text("Your rank: Sageracer.");
      $('.nextrank').text("");
      $('.rankgif').attr('src', './images/sage.gif');
  }
  statistics(speed);
}
function statistics(speed) {
  if (mode === "html") {
      if (speed > localStorage.htmlSpeed || localStorage.htmlSpeed === undefined) {
          localStorage.removeItem("htmlSpeed");
          localStorage.removeItem("htmlRank");
          localStorage.setItem("htmlRank", $('.rank').text().slice(11));
          localStorage.setItem("htmlSpeed", speed);
      }
  } else if (mode === "css") {
      if (speed > localStorage.cssSpeed || localStorage.cssSpeed === undefined) {
          localStorage.removeItem("cssSpeed");
          localStorage.removeItem("cssRank");
          localStorage.setItem("cssRank", $('.rank').text().slice(11));
          localStorage.setItem("cssSpeed", speed);

      }
  } else if (mode === "js") {
      if (speed > localStorage.jsSpeed || localStorage.jsSpeed === undefined) {
          localStorage.removeItem("jsSpeed");
          localStorage.removeItem("jsRank");
          localStorage.setItem("jsRank", $('.rank').text().slice(11));
          localStorage.setItem("jsSpeed", speed);
      }
  }
}
$('.htmlrank').text(localStorage.htmlRank);
$('.htmlspeed').text(localStorage.htmlSpeed);
$('.cssrank').text(localStorage.cssRank);
$('.cssspeed').text(localStorage.cssSpeed);
$('.jsrank').text(localStorage.jsRank);
$('.jsspeed').text(localStorage.jsSpeed);
var mode = "";