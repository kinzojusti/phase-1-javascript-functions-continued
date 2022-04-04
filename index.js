// code your solution here

//In JavaScript, the most common way to define functions is with a FUNCTION DECLARATION:
// razzle is a pointer. we use the pointer to call or invoke the function by adding () after the pointer.

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  
  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }}