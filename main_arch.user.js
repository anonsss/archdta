// ==UserScript==
// @name        sample
// @namespace   TA
// @description testing_ground
// @description:en    Fuck it

// @author            anon
// @version           0.1
// @license           MIT

// @homepageURL       https://*/
// @supportURL        https://*/
// @include     *://*/*
// @grant       none
// @grant       GM_getValue
// @grant       GM_setValue

// ==/UserScript==

$(document).ready(function(){

  var bcdb="'font-weight: bold;top:100px;right:100px;float: right;color: darkblue;'";
  var bcre="'font-weight: bold;top:100px;right:100px;float: right;color: red;'";
  var bcgr="'font-weight: bold;top:100px;right:100px;float: right;color: green;'";
  //b4
  $(".navbar").append("<button class=btn01 style="+bcdb+">Clearing</button>");
  $("article").parent().find('.post_file_controls').closest(".post").prepend("<button class=btn03 style="+bcgr+">Expand</button>");
  //aft$("article").append("<button id=btn01>Click</button>");
  $("article").prepend("<button class=btn02 style="+bcre+">Delete</button>"
                      );
  
  $(".btn01").click(function(){
    $('span.post_file_controls').remove();
    $('div.post_file_controls').remove();
    //$("article").append("<b>Appended text</b>");
  }); 
  
  $(".btn02").click(function(){
    $(this).parent().find('.post_wrapper').remove();
    //$(this).parent().find('.thread_image_box').remove();
    $(this).parent().find('.btn03').remove();
    $(this).remove();
    }); 
  
  $(".btn03").click(function(){
    var ccc=$(this).parent().find('.post_file_filename').attr('href');
    $(this).parent().find('.lazyload').attr('src',ccc).css('width', 'auto').css('height', 'auto');
    }); 
$('#thumbs img').click(function(){
    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
    $('#description').html($(this).attr('alt'));
});	

});



/*


if (!$(this).parent().hasClass('post_file_controls'))
{
    $("article").prepend("<button class=btn02 style="+bcre+">Delete</button>");
}
if ($("article").parent().hasClass('post_file_controls'))
{
    $("article").
}


if $(this).parent().hasClass('.post_file_controls'){
*/

//

