const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      const second = res;
      writeFile(
        "./content/result-async.txt",

        `Here is the result: ${first},${second}`,
        { flag: "a" },
        (err, res) => {
          if (err) {
            console.log(err);
            return err;
          } else {
            console.log(res);
          }
        }
      );
    }
  });
});
