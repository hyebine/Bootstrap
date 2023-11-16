
$(document).ready(function () {

  let targetnm = '';

  $("a.scrolla").click(function (e) {
    e.preventDefault(); //원래기능 죽여줘
    targetnm = $(this).attr('href'); //속성접근 메서드 this a태그 값이없으면 가져와라
    console.log(targetnm, $(targetnm).offset().top) //문자
    //offset 위치를 말함
    // $('a').attr('href','#none') // 모든 a 태그에 #none을 넣어라 
    $("body, html").stop(true, true).animate({ scrollTop: $(targetnm).offset().top })

    //불켜줘 (네비게이션에만 해당)
    // $(this).addClass("act").parent().siblings().find('a').removeClass("act")

    $("a.scrolla").removeClass('act')
    $(this).addClass('act');

    console.log($(this).parent().index(), $(this).addClass('act').parent().index())
    //부모가 몇째인지 알려줘


  })
})
