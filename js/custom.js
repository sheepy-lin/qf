$(document).ready(function () {

  //輪播


  var slideItems = $(".slideItem");
  var thumbBtn = $(".thumb");
  var nowImag = 0;

  function bannerHeight() {
    var BannerHeight = $(".slideItem").height();
    // var BannerWidth = $(".slideItem").width();
    $(".slideShowWrap").css("height", BannerHeight)
    // $(".slideGruop").css("width", BannerWidth)
    // console.log(BannerWidth)
  }

  bannerHeight()
  $(window).resize(bannerHeight);

  function autoFade() {
    if (nowImag == 0) {
      slideItems.eq(4).fadeOut(800);
      slideItems.eq(nowImag).fadeIn(800);
      thumbBtn.removeClass("in")
      thumbBtn.eq(nowImag).addClass("in")
      nowImag += 1;
      console.log(nowImag);
    } else if (nowImag < 5) {
      slideItems.eq(nowImag - 1).fadeOut(800);
      slideItems.eq(nowImag).fadeIn(800);
      thumbBtn.removeClass("in")
      thumbBtn.eq(nowImag).addClass("in")
      nowImag += 1;
      console.log(nowImag);
    } else if (nowImag == 5) {
      slideItems.eq(nowImag).fadeIn(800);
      thumbBtn.eq(nowImag).addClass("in");
      nowImag = 0;
    }
  }

  autoFade();
  var cycle = setInterval(autoFade, 5000);

  thumbBtn.click(thumbClick)

  function thumbClick() {
    clearInterval(cycle);

    var visiblePic = $('.slideItem:visible').index()
    var callPic = $(this).index();

    if (visiblePic != callPic) {
      slideItems.fadeOut(800);
      slideItems.eq(callPic).fadeIn(800)
      thumbBtn.removeClass("in")
      thumbBtn.eq(callPic).addClass("in")
      console.log(callPic)
    }
  }

  var arrowBtnLeft = $(".arrowBtn.left")
  var arrowBtnRight = $(".arrowBtn.right")
  arrowBtnLeft.click(btnLeft)
  arrowBtnRight.click(btnRight)

  function btnLeft() {

    clearInterval(cycle);
    var visiblePic = $('.slideItem:visible').index()
    var CallNew = visiblePic - 1

    if (visiblePic > 0) {
      slideItems.eq(visiblePic).fadeOut(800);
      slideItems.eq(CallNew).fadeIn(800);
      thumbBtn.removeClass("in")
      thumbBtn.eq(CallNew).addClass("in")
    }

    console.log(visiblePic)

  }

  function btnRight() {

    clearInterval(cycle);

    var visiblePic = $('.slideItem:visible').index()
    var CallNew = visiblePic + 1

    if (visiblePic < 4) {
      slideItems.eq(visiblePic).fadeOut(800);
      slideItems.eq(CallNew).fadeIn(800);
      thumbBtn.removeClass("in")
      thumbBtn.eq(CallNew).addClass("in")
    }

    console.log(visiblePic)

  }


  //選單

  var menuCon = $(".menuCon")
  var subButton = $(".button")
  var classesListWrap = $(".classesListWrap")
  var searchButtonShow = $(".searchButtonShow")
  var searchBar = $(".searchBarWrap")

  // menuCon.hide();
  classesListWrap.hide();
  // searchBar.hide();


  function global() {

    var windowWidth = screen.width

    if (windowWidth < 1024) {

      var menuBtnDefault = $(".menuBtn.Default")
      var menuWord = $(".menu")
      var menuState = false;

      menuBtnDefault.click(openMenuForM)
      
      //案例作品次選單

      subButton.click(function () {
        classesListWrap.stop().slideToggle("slow");
        console.log($(window).width())
      })

      function openMenuForM() {

        if (menuState == false) {

          console.log("開")

          menuCon.fadeIn(800).css("display", "flex")
          menuBtnDefault.css("z-index", "1000").removeClass("Default").addClass("Close")
          menuWord.addClass("XX")

          $(".line:nth-child(1),.line:nth-child(4)").hide();
          $(".close_1").addClass("XX_line_1 XX_postion")
          $(".close_2").addClass("XX_line_2 XX_postion").show();


          menuState = true;
          $("body").addClass("scrollbarNone")
          console.log("確認開啟")
          console.log("menuState")

        } else {

          console.log("關")

          menuCon.css("display","flex").fadeOut(800)
          menuBtnDefault.css("z-index", "0").addClass("Default").addClass("Close")
          menuWord.removeClass("XX")

          $(".line:nth-child(1),.line:nth-child(4)").show();
          $(".close_1").removeClass("XX_line_1 XX_postion")
          $(".close_2").removeClass("XX_line_2 XX_postion").hide();

          menuState = false;

          console.log("確認關閉")
          $("body").removeClass("scrollbarNone")


        }
      }

      ;

      //搜尋bar點選

      searchButtonShow.click(function () {
        searchBar.stop().slideToggle("800");


      });

    } else {

      var menuBtnDefault = $(".menuBtn.Default")
      var menuWord = $(".menu")
      var header = $("header")
      var menuState = false;



      $(".line:nth-child(1),.line:nth-child(4)").show();
      $(".close_1").removeClass("XX_line_1 XX_postion")
      // $(".close_2").removeClass("XX_line_2 XX_postion").hide();

      // header.addClass("lineMoveToClose")


      function openMenuForD() {
        if (menuState == false) {

          console.log("開")

          // menuCon.removeClass("close").addClass("open").css("display", "flex")
          menuCon.css("display", "flex")
          menuBtnDefault.css("z-index", "1000").removeClass("Default").addClass("Close")
          menuWord.addClass("XX")

          $(".line:nth-child(1),.line:nth-child(4)").fadeOut(800);
          $(".close_1").addClass("XX_line_1 XX_postion").removeClass("XX_line_1_reverse");
          $(".close_2").fadeIn().addClass("XX_line_2 XX_postion").removeClass("XX_line_2_reverse");;

          header.removeClass("lineMoveToClose").addClass("lineMoveToOpen")

          menuState = true;
          console.log("確定開啟")
          // classesListWrap.hide();

        } else {

          console.log("關")

          // menuCon.removeClass("open").addClass("close")
          menuCon.css("display", "flex")
          menuBtnDefault.css("z-index", "0").addClass("Default")
          menuWord.removeClass("XX")

          $(".line:nth-child(1),.line:nth-child(4)").fadeIn(800);
          $(".close_1").addClass("XX_line_1_reverse").removeClass("XX_line_1 XX_postion");
          $(".close_2").addClass("XX_line_2_reverse").removeClass("XX_line_2").fadeOut(800);

          header.removeClass("lineMoveToOpen").addClass("lineMoveToClose")

          console.log("確認關閉")
          menuState = false;

        }
      }

      menuBtnDefault.click(openMenuForD)
      classesListWrap.show();

    }

  }


  global()
  $(window).resize(global)


  //呼叫地圖

  var mapSetionIcon = $(".mapSetionIcon")
  mapSetionIcon.click(loadMap)

  function loadMap() {
    $(".loadMap").load("../map.html").animate({ "height": "100%" }, 500)
    console.log("Map")
    $("body").addClass("scrollbarNone")
  }

  //呼叫寫信表單

  var mailIcon = $(".mailIcon")
  mailIcon.click(loadEmail)

  function loadEmail() {
    $(".loadMap").load("../email.html").animate({ "height": "100%" }, 500)
    console.log("Map")
    $("body").addClass("scrollbarNone")
  }

  

  function serviceBtn(){
    var btn =$(this)
    var nowCllickSort = btn.index()
    var list = $(".sideServiceList ul li")
    var thum = $(".thum")
    var img = $(".serviceImg img")
    var conList = $(".sideServiceConList")
    
    list.removeClass("drColor").eq(nowCllickSort).addClass("drColor")

    thum.removeClass("drBg").eq(nowCllickSort).addClass("drBg")

    img.removeClass("drOpacity").eq(nowCllickSort).addClass("drOpacity")

    conList.removeClass("conOpacity").css("display","none").eq(nowCllickSort).addClass("conOpacity").css("display","block")

    console.log(nowCllickSort)
  }

  $(".sideServiceList ul li").click(serviceBtn)
  $(".thum").click(serviceBtn)
  $(".serviceItem").click(serviceBtn)
})