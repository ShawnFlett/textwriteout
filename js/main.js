$(document).ready(function(){
  $('.nav-controls').click(function(){
    $('.nav-element').toggleClass('nav-active');
  });

  $('#text-writeout-1').textWriteout({
    messages: ["Hello ", "World! "],
  });

  $('#text-writeout-2-1').textWriteout({
    messages: ["5", "4", "3", "2", "1", "0"],
    deleteWord: true,
    deleteWords: true,
  });

  $('#text-writeout-2-2').textWriteout({
    messages: ["5", "4", "3", "2", "1", "0"],
    deleteWord: false,
    deleteWords: false,
  });

  $('#text-writeout-3').textWriteout({
    messages: ["ready, ", "get set, ", "go!"],
    deleteWord: true,
    deleteWords: false,
    deleteLastWord: false,
    loop: false,
  });

  $('#text-writeout-4-1').textWriteout({
    messages: ["A ", "need ", "for ", "speed!"],
    letterWait: 50,
  });

  $('#text-writeout-4-2').textWriteout({
    messages: ["A ", "need ", "for ", "speed!"],
    wordWait: 200,
  });

  $('#text-writeout-4-3').textWriteout({
    messages: ["A ", "need ", "for ", "speed!"],
    deleteWait: 200,
  });

  $('#text-writeout-5-1').textWriteout({
    messages: ["First Title", "Second Title", "Third Title"],
    deleteWord: true,
    deleteWords: false,
    deleteLastWord: false,
    loop: false,
    wordCursor: true,
    cursorBlink: true,
  });

  $('#text-writeout-5-2').textWriteout({
    messages: ["First Title", "Second Title", "Third Title"],
    deleteWord: true,
    deleteWords: false,
    deleteLastWord: false,
    loop: false,
    selectWord: true,
  });
});
