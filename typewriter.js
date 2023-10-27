
const sentence = "hello there from lighthouse labs";
const typewriter = function(string) {
  for (const char of string) {
    setTimeout(function() {
       process.stdout.write(char)// print the char here
    }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
  }
};


typewriter(sentence);  