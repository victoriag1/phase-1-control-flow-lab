function scuberGreetingForFeet(sample) { 
  if (sample <= 400) {
    return "This one is on me!"
  } else if (sample > 2000 && sample <2500) {
    return "I will gladly take your thirty bucks."
    }
    else 
    return "No can do."
  }
function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good."
  } else 
  return "No go."
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much."
      case "not as generous":
        return "Thank you."
        default:
          return "Bye."
  }
}