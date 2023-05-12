// problem:
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// solution:
  function likeOrDislike(buttons) {
    let state = 'Nothing';
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === state) {
        state = 'Nothing'
      } else {
        state = buttons[i]
      }
    }
  
    return state
  }

likeOrDislike(["Dislike"]); //dislike
likeOrDislike(["Like", "Like"]); //nothing
likeOrDislike(["Dislike", "Like"]); //like
likeOrDislike(["Like", "Dislike", "Dislike"]); //nothing
likeOrDislike(["Dislike", "Dislike"]); //nothing
likeOrDislike(["Like", "Like", "Like"]); //like
likeOrDislike(["Like", "Dislike"]); //dislike
likeOrDislike(["Dislike", "Like", "Dislike"]);
likeOrDislike([
  "Like",
  "Like",
  "Dislike",
  "Like",
  "Like",
  "Like",
  "Like",
  "Dislike",
]); //dislike
likeOrDislike("[]"); //nothing
