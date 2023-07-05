/*

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

*/

let counter = 0;
const getData = () => {
  //calls an API and get data
  console.log("Fetching Data ...", counter++);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer); //! clearing is IMPORTANT; to reset delay
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

//call only if the difference in time of 2 keypress
//events is greater than 300ms.
const betterFunc = debounce(getData, 500);

document.getElementById("debounceMe").addEventListener("click", function (e) {
  betterFunc();
});
/*

If the debounce button is clicked only once, the debounce function gets called after the delay. However, if the debounce button is clicked once, and again clicked prior to the end of the delay, the initial delay is cleared and a fresh delay timer is started. The clearTimeout function is being used to achieve it. 

The general idea for debouncing is: 

* Start with 0 timeout 
! If the debounced function is called again, reset the timer to the specified delay 
* In case of timeout, call the debounced function Thus every call to a debounce function, resets the timer and delays the call. 

*/

//?  Application--->

/*
1. Implementing suggestive text / typeahead
2. Infinite scrolling
*/
