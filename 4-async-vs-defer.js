/*

Load a webpage -
1. HTML parsing
2. Loading of scripts
   a) Fetching script from Network
   b) Executing script

*/

//? <script src="..."/>

//* HTML parsing ->  ---------               ----------
//* Scripts      ->           --get-- --exe--

//! HTML parsing is PAUSED during script get & execution duration
//! Scripts fetched synchronously
//! Scripts executed synchronously

//? <script async src="..."/>

//* HTML parsing ->  -----------          ------------        -------
//* Scripts      ->     --get1-- --exe1--    --get2-- --exe2--

//! HTML parsing PAUSED during script execution ONLY
//! Scripts fetched asynchronously
//! Scripts executed after fetch while HTML parsing is paused
//~ Async does not guarantee execution order
//~ Load external scripts which do not have dependency on other scripts

//? <script defer src="..."/>

//* HTML parsing ->  -----------------------------
//* Scripts      ->     --get1--  --get2--        --exe1-- --exe2--

//! HTML parsing NOT PAUSED AT ALL
//! Scripts fetched asynchronously
//! Scripts executed once HTML parsing is over.
//~ Defer guarantees execution order

//?-------------------------
//* Defer > Async > Default
//?-------------------------


// Both async and defer in a script tag
// Modern browsers run async
// Old browsers run as defer [ instead of default ]