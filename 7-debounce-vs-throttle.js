// Web Performace Optimization techniques

//* Debouncing & Throttling -> limiting rate of execution of a function call

//! Debouncing -> function calls at variable time interval,depending on event ocurrence,
//!               which is based on user behaviour. Use when you want to base it on user
//!               behaviour.
//! Throttling -> function calls at fixed time interval always. Use for very 'high frequency'
//!               event.

//? Example 1 -> Search Bar for suggestions [ Use Debouncing]

//* Debouncing -> Make network call, after every 'x' ms from 'previous keypress (or any event)'

// | | | | | | |          | | | |
// s a m s u n g          n o t e
//             ^          ^
//             | x=300 ms |
//             K          K

//* Throttling -> Make network call, after every 'x' ms from 'previous call' (or any action)

// | | | | | | |        | | | |
// s a m s u n g        n o t e
// ^         ^          ^
// |x=300 ms | x=300 ms |
// FC        FC         FC

//? Example 2 -> Track resize of browser window [ Use Throttling or Debouncing]

//? Example 3 -> Clicking a button repeateadly         [ User Action -> Use Debouncing]

//? Example 4 -> Shooting game, rate limit gun firing   [ Use Throttling ]
//machine gun -> |||||||||||||||||||   {Use throttling}
//pistol      -> |  |    |   |   |     {Use debouncing}
