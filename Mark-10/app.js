const billAmount = document.querySelector("#Bill-Amount");
const cashGiven = document.querySelector("#Cash-Given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillandCashAmount() {
  hideMessage();
  if (Number(billAmount.value) > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const AmountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(Number(AmountToBeReturned));
    } else {
      showMessage("Do you want to wash Plates? ");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(AmountToBeReturned) {

  for (let i = 0; i < availableNotes.length; i++) {
    // no of notes needed
    const numberOfNotes = Math.trunc(AmountToBeReturned / availableNotes[i]);

    // amount left
    AmountToBeReturned = AmountToBeReturned % availableNotes[i];

    // fill respective blocks
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}


