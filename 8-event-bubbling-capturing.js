//? Event Bubbling [EB]            -> Bubbles up the DOM tree
//? Event Capturing/Trickling [EC] -> Trickles down the DOM tree

//!                                                             ←
//!  div #grandparent       -> onClickGP()                    |   ↑
//!      div #parent        -> onClickP()                     |   |     {Event Propagation Cycle}
//!          div #child     -> onClickC()     <click_here>    ↓   |
//!                                                             →
//*                                                          EC   EB
//*                                                              (default)

//* As per W3C, event cycle `always` continues, events will always trickle down
//* and bubble up. But it is upto the developer in which phase they want to use.

//?Example

let useCapture = true; // capturing on
useCapture = false; // bubbling on  [default]
document.addEventListener("click", function () {}, useCapture);

//?Working Example-----------------------------------------------------------------

document.querySelector("#grandparent").addEventListener("click", function (e) {
  console.log("GrandParent Clicked");
});

document.querySelector("#parent").addEventListener(
  "click",
  function (e) {
    console.log("Parent Clicked");
  },
  true //! use capture
);

document.querySelector("#child").addEventListener("click", function (e) {
  console.log("Child Clicked");
  //e.stopPropagation(); //! event wont bubble out
});

/*
Output for above -
    Click on child       ->  Parent {C}, Child {B}, GrandParent {B}
    Click on parent      ->  Parent {C}, GrandParent {B}
    Click on grandparent ->  GrandParent {B}
*/

//! Bubbling & Capturing are expensive operations
//* Can attach same eventHandler in `both` phases as well, technically, will fire in
//* both the cases
