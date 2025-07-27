const directLink = "https://otieu.com/4/9630825";
const popup = window.open(directLink, "_blank");

if (!popup || popup.closed || typeof popup.closed === "undefined") {
  const overlay = document.querySelector(".overlay");
  const blockerMsg = document.getElementById("blocker-message");

  if (overlay) overlay.style.display = "none";
  if (blockerMsg) blockerMsg.classList.remove("hidden");
}
