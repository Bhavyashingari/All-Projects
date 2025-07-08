const beginBtn = document.getElementById("begin-btn");
const planBtn = document.getElementById("plan-btn");
const formSection = document.getElementById("form-section");
const tripDetails = document.getElementById("trip-details");

beginBtn.addEventListener("click", () => {
  formSection.classList.remove("hidden");
});

planBtn.addEventListener("click", () => {
  tripDetails.classList.remove("hidden");

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  document.getElementById("route").innerText = `${from} → ${to}`;
});

let travellerCount = 1;
const travellerDisplay = document.getElementById("travellers");
document.getElementById("increase").addEventListener("click", () => {
  travellerCount++;
  travellerDisplay.innerText = travellerCount;
});
document.getElementById("decrease").addEventListener("click", () => {
  if (travellerCount > 1) {
    travellerCount--;
    travellerDisplay.innerText = travellerCount;
  }
});
