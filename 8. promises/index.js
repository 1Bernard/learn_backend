function delayFn(time) {
  return new Promise((resolve)=> setTimeout(resolve, time));
}

console.log("Promise lecture start")
delayFn(2000).then(() => console.log("after 2 seconds promise resolved"));
console.log("Promise lecture end");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject(new Error("Cannot divide by zero"));
    }
    resolve(num1 / num2);
  });

}

divideFn(10, 0)
  .then((result) => console.log(result, "result"))
  .catch((err) => console.log(err.message, "error"));
