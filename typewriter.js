
const sentence = "hello there from lighthouse labs";

const typewriter = function(string) {
  let delay = 0;
  for (const char of string) {
    setTimeout(function() {
      process.stdout.write(char);
    }, delay);
    //adjust delay for each character.
    delay += 50;
  }
  setTimeout(() => {
    //add a new line after the last character.
    process.stdout.write("\n");
  }, delay);
};


typewriter(sentence);  