$(function()
{
	var play_btn=$(".play_btn");


 var retry_btn=$('#retry');
  var retry_btn1=$('#retry1');
 
    var time_tag=$("#times_tag");


  var no=0;
  var sequencno=0;
  var times=4;
  var intervalTime;

    var myArray = [1,2,3,4,5,6,7,8,9];
    shuffle(myArray);

    play_btn.click(function()
      {
         intervalTime=setInterval(timestart,1000);
         $(".first_screen").hide();
		$(".game_screen").show();
        $(".final_container").hide();
        $(".final_container1").hide();
       
        //$(".container-fluid").;
      });

  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

  var click_count=0;
  

      
  

  $('#div1').html(myArray[0]+ '<div id="div_1" class="slides"></div>');
  $('#div2').html(myArray[1]+ '<div id="div_2" class="slides"></div>');
  $('#div3').html(myArray[2]+ '<div id="div_3" class="slides"></div>');
  $('#div4').html(myArray[3]+ '<div id="div_4" class="slides"></div>');
  $('#div5').html(myArray[4]+ '<div id="div_5" class="slides"></div>');
  $('#div6').html(myArray[5]+ '<div id="div_6" class="slides"></div>');
  $('#div7').html(myArray[6]+ '<div id="div_7" class="slides"></div>');
  $('#div8').html(myArray[7]+ '<div id="div_8" class="slides"></div>');
  $('#div9').html(myArray[8]+ '<div id="div_9" class="slides"></div>');
  

  $("#div1").click(function()
    {
      sequencno++;
      times--;
      no=$('#div1').text();
      $("#div_1").slideUp("slow",function()
        {
          if(sequencno!=no)
          {
            slidedown();
          }
          else
          {
            check();
          }
          //alert($('#div1').html());
        });
      
      
      
    });


  $("#div2").click(function()
    {
      sequencno++;
      times--;
      no=$('#div2').text();
      $("#div_2").slideUp("slow",function()
        {
          if(sequencno!=no)
          {
            slidedown();
          }
          else
          {
            check();
          }
        });
      //slidedown();
    });

  $("#div3").click(function()
    {
      sequencno++;
      times--;
      no=$('#div3').text();
      $("#div_3").slideUp("slow",function()
        {
          if(sequencno!=no)
          {
            slidedown();
          }
          else
          {
            check();
          }
        });
      //slidedown();
    });

  $("#div4").click(function()
    {
      sequencno++;
      times--;
      no=$('#div4').text();
      $("#div_4").slideUp("slow",function()
        {
          if(sequencno!=no)
          {
            slidedown();
          }
          else
          {
            check();
          }
        });
      //slidedown();
    });

  $("#div5").click(function()
    {
      sequencno++;
      times--;
      no=$('#div5').text();
      $("#div_5").slideUp("slow",function()
        {
          if(sequencno!=no)
          {
            slidedown();
          }
          else
          {
            check();
          }
        });
      //slidedown();
    });

  $("#div6").click(function()
    {
      sequencno++;
      times--;
      no=$('#div6').text();
      $("#div_6").slideUp("slow",function()
        {
          if(sequencno!=no)
          {
            slidedown();
          }
          else
          {
            check();
          }
        });
      //slidedown();
    });


  $("#div7").click(function()
    {
      sequencno++;
      times--;
      no=$('#div7').text();
      $("#div_7").slideUp("slow",function()
        {
          if(sequencno!=no)
          {
            slidedown();
          }
          else
          {
            check();
          }
        });
      //slidedown();
    });


  $("#div8").click(function()
    {
      sequencno++;
      times--;
      no=$('#div8').text();
      $("#div_8").slideUp("slow",function()
        {
          if(sequencno!=no)
          {
            slidedown();
          }
          else
          {
            check();
          }
        });
      //slidedown();
    });


  $("#div9").click(function()
    {
      sequencno++;
      times--;
      no=$('#div9').text();
      $("#div_9").slideUp("slow",function()
        {
         // numberequalornot(sequencno,no);
          if(sequencno!=no)
          {
            slidedown();
          }
          else
          {
            check();
          }
        });
      //slidedown();
    });


 /* numberequalornot=function(var sequencno,var no)
  {
    if(sequencno!=no)
          {
            slidedown();
          }
          else
          {
            check();
          }
  }*/

  check=function()
  {
    if(sequencno==9)
    {
     
      $(".first_screen").hide();
		$(".game_screen").hide();
        $(".final_container").show();
        $(".final_container1").hide();
     
      $("#time_display").text(times);
      clearInterval(intervalTime);
             
    }
  }


    slidedown=function()
    {
      $("#div_1").slideDown("slow");
      $("#div_2").slideDown("slow");
      $("#div_3").slideDown("slow");
      $("#div_4").slideDown("slow");
      $("#div_5").slideDown("slow");
      $("#div_6").slideDown("slow");
      $("#div_7").slideDown("slow");
      $("#div_8").slideDown("slow");
      $("#div_9").slideDown("slow");

      sequencno=0;

    }

     retry_btn.click(function()
      {
        location.reload();
      });
     retry_btn1.click(function()
      {
        location.reload();
      });
    

     
     // intervalTime=setInterval(timestart,1000);
     


     function timestart()
     {
      times--;
        time_tag.text(times);
        if( times<=0)
      {
       
         $(".first_screen").hide();
		$(".game_screen").hide();
          $(".final_container").hide();
        $(".final_container1").show();
        
       clearInterval(intervalTime);
      }
      
    
      
     }




});