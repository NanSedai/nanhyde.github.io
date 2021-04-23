let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("theYear").textContent = myYear;

document.getElementById("lastUpdated").textContent = "Last Updated: " + document.lastModified;