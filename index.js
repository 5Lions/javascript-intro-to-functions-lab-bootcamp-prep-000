function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log("logShout " + shout(string));
}

logShout('HEllO');

function logWhisper(string) {
  console.log("logWhisper " + whisper(string));
}

logWhisper("hellO");

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return ("I can't hear you!");
  } if (string === string.toUpperCase()) {
    return ("YES INDEED!");
  } if (string === "I love you, Grandma.") {
    return ("I love you, too.");
  }
}

console.log("condition 1 " + sayHiToGrandma(whisper('heLlo')));
console.log("condition 2 " + sayHiToGrandma(shout('HEllO')));
console.log("condition 3 " + sayHiToGrandma("I love you, Grandma."));