const directLink = "https://otieu.com/4/9630825";

// تأخير نصف ثانية
setTimeout(() => {
  // نحاول فتح النافذة المنبثقة
  const popup = window.open(directLink, "_blank");

  // التحقق إذا تم حظرها
  if (!popup || popup.closed || typeof popup.closed === "undefined") {
    const overlay = document.querySelector(".overlay");
    const blockerMsg = document.getElementById("blocker-message");

    if (overlay) overlay.style.display = "none";
    if (blockerMsg) blockerMsg.classList.remove("hidden");
  }
}, 500); // ← تأخير 500 مللي ثانية (نصف ثانية)
