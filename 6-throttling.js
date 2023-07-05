/*

 Throttling implies limiting the number of times a function gets called in a certain time period. It will prohibit a function from executing if we have invoked it “recently.” Throttling also guarantees that a function runs at a consistent rate.

 *We are rate-limiting a function execution over a period of time.
 
 */
(function () {
  let counter = 0;
  const resizeWindow = (name) => {
    console.log("Resizing Window By " + name, counter++);
  };

  const throttle = function (fn, delay) {
    let isDelayOver = true;
    return function () {
      let context = this;
      let args = arguments;
      if (isDelayOver) {
        fn.apply(context, args);
        isDelayOver = false;
        setTimeout(() => {
          isDelayOver = true;
        }, delay);
      }
    };
  };

  const betterFunc = throttle(resizeWindow, 500);

  window.addEventListener("resize", function (e) {
    betterFunc("Sourav");
  });
})(window);
