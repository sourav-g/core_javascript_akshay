//? Event delegation [ Possible only because of event bubbling ]

/*

<ul id="categories">
   <li> Laptop <li> 
   <li> Cameras </li>
   <li> Shoes  </li>
    ...
    ...
    ...
</div>

! Instead of attaching event handlers to each of the <li> ,
! give the event handling job to the parent div.

*/

document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});

//? Achieving behaviour patterns using Event Delegation

document.querySelector("#form").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

//* Pros & Cons of Event Delegation

/*

Pros - 

1. Memory -> saves memory since attach only 1 event-handler instead of many
2. Writing less code
3. DOM manipulation is easier

Cons/Checks -

1. All events are NOT bubbled up ( blur, focus, resize, scroll, etc. )
2. Dont use stopPropagation if we want to use event delegation

*/
