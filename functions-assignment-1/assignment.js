const sayHello = (pre = "Hi", name = "no name") => {
  console.log(pre + ", "+ name);
};

const checkInput = (cb, ...strings) => {
  let concat = "";
  if (!strings) {
    cb();
    return;
  } else {
    for (const string of strings) {
      if (typeof(string) !== "string") {
        cb();
        return;
      }
      concat = concat + string;

    }
  }
  return concat;
}

sayHello();
