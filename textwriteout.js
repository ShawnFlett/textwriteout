/*
textwriteout.js
Jquery Plugin
Version 1.0.0
Released 22/11/2016
Created by Shawn Flett

Demo Site: https://shawnflett.github.io/textwriteout/
Documentation Page: https://github.com/ShawnFlett/textwriteout
*/
(function( $ ) {
  $.fn.textWriteout = function( options ){
    var settings = $.extend({
      messages          : ["Hello ", "World! "],
      loop              : true,
      startWord         : 0,
      letterWait        : 250,
      wordWait          : 1000,
      deleteWord        : false,
      deleteWords       : true,
      deleteLastWord    : true,
      deleteWait        : 1000,
      selectWord        : false,
      selectWait        : 1000,
      wordCursor        : false,
      cursorTag         : 'span',
      cursorClasses     : '',
      cursorBlink       : false,
      cursorBlinkWait   : 1000,
      cursorBlinkWrite  : true,
      selectCursor      : true,
      outroWait         : 0,
      introWait         : 0,
    }, options);
    var currentWord = settings.startWord;
    wordCursor(this);
    wordLoop(this, currentWord);

    function wordCursor(element){
      if (settings.wordCursor == true){
        $(element).after( "<" + settings.cursorTag + " class=\" word-cursor " + settings.cursorClasses + "\">|</" + settings.cursorTag + ">" );
        if (settings.cursorBlink == true) {
          $('.word-cursor').addClass('cursor-blink');
          var wordBlinkVar = window.setInterval( function() { wordBlink(element); }, settings.cursorBlinkWait / 2);
        }
      }
      return;
    };

    function wordBlink(element){
      if ($('.cursor-blink').css("opacity") == "1"){
        $('.cursor-blink').css("opacity", "0");
        return;
      } else{
        $('.cursor-blink').css("opacity", "1");
        return;
      }
    };

    function wordLoop(element, currentWord){
      wordIntro();
      function wordIntro(){
        if ( currentWord >= settings.messages.length ){
          currentWord = 0;
        }
        $(element).removeClass('word-selected');
        var wordWriteVar = window.setTimeout(wordWrite, settings.wordWait);
      };

      function wordWrite(){
        var i = 0;
        var letterWriteVar = window.setInterval( letterWrite, settings.letterWait);

        function letterWrite(){
          if (settings.cursorBlink == true && settings.cursorBlinkWrite == false) {
            $('.cursor-blink').css("opacity", "1");
            $('.word-cursor').removeClass('cursor-blink');
          }
          if ( i >= settings.messages[currentWord].length ){
            i = 0;
            window.clearInterval( letterWriteVar );
            if (settings.cursorBlink == true && settings.cursorBlinkWrite == false) {
              $('.word-cursor').addClass('cursor-blink');
            }
            if (settings.selectWord == true){
              var wordSelectVar = window.setTimeout(wordSelecting, settings.selectWait);
            } else if (settings.deleteWord == true) {
              var wordDeleteVar = window.setTimeout(wordDelete, settings.deleteWait);
            } else if (settings.deleteWords == true && currentWord + 1 >= settings.messages.length) {
              var wordDeleteVar = window.setTimeout(wordDelete, settings.deleteWait);
            } else{
              var wordOutroVar = window.setTimeout(wordOutro, settings.outroWait);
            }
          } else{
            $(element).append(settings.messages[currentWord][i]);
            i++;
          }
        };

      };

      function wordSelecting(){
        if (settings.deleteWord == true) {
          $(element).addClass('word-selected');
          if (settings.selectCursor == false){
            $('.word-cursor').addClass('cursor-hide');
          }
          var wordDeleteVar = window.setTimeout(wordDelete, settings.deleteWait);
        } else if (settings.deleteWords == true && currentWord + 1 >= settings.messages.length) {
          $(element).addClass('word-selected');
          if (settings.selectCursor == false){
            $('.word-cursor').addClass('cursor-hide');
          }
          var wordDeleteVar = window.setTimeout(wordDelete, settings.deleteWait);
        } else{
          $(element).addClass('word-selected');
          if (settings.selectCursor == false){
            $('.word-cursor').addClass('cursor-hide');
          }
          var wordOutroVar = window.setTimeout(wordOutro, settings.outroWait);
        }
      };

      function wordDelete(){
        if (settings.deleteWord == true){
          if (settings.deleteLastWord == false && currentWord + 1 >= settings.messages.length){
          }
          else {
            $(element).text("");
          }
        } else if (settings.deleteWords == true && currentWord + 1 >= settings.messages.length) {
          $(element).text("");
        }
        $('.word-cursor').removeClass('cursor-hide');
        var wordOutroVar = window.setTimeout( wordOutro, settings.outroWait );
      };

      function wordOutro(){
        currentWord++;
        if ( settings.loop == false && currentWord >= settings.messages.length ){
          return;
        }
        var wordIntroVar = window.setTimeout( wordIntro, settings.introWait );
      };

    };
  };
}(jQuery));
