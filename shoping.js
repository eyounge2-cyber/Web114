let favMonth = prompt("What is your favorite month?").toLocaleLowerCase();
switch (favMonth) {
  case "january":
    console.log("You love the winter months!");
    break;
  case "febuary":
    console.log("You love the winter months!");
    break;
    case "march":
    console.log("Other months are interesting too!");
    break;
    case "april":
    console.log("Other months are interesting too!");
    break;
    case "may":
    console.log("Other months are interesting too!");
    break;
    case "june":
    console.log("You love the summer months!");
    break;
    case "july":
    console.log("You love the summer months!");
    break;
    case "august":
    console.log("You love the summer months!");
    break;
    case "september":
    console.log("Other months are interesting too!");
    break;
    case "october":
    console.log("Other months are interesting too!");
    break;
    case "november":
    console.log("Other months are interesting too!");
    break;
    case "december":
    console.log("You love the winter months!");
    break;
  default:
    isNaN(favMonth);
    console.log("Please enter a valid month, not numbers!");
}