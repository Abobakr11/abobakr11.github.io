// يعمل فقط على index.html
if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
  const directLink = "https://otieu.com/4/9630825";
  const popup = window.open(directLink, "_blank");

  if (!popup || popup.closed || typeof popup.closed == "undefined") {
    document.querySelector(".overlay").style.display = "none";
    document.getElementById("blocker-message").classList.remove("hidden");
  }
}
