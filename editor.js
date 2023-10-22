document.addEventListener("DOMContentLoaded", function() {
  const copyButton = document.querySelector(".copy-button");
  const lockButton = document.querySelector(".lock-button");
  const codeTextarea = document.getElementById("code");

  let isLocked = false;

  copyButton.addEventListener("click", function() {
      codeTextarea.select();
      alert("copy code");
      window.getSelection().removeAllRanges();
  });

  lockButton.addEventListener("click", function() {
      isLocked = !isLocked;
      if (isLocked) {
          lockButton.textContent = "Unlock";
          codeTextarea.setAttribute("readonly", "true");
          codeTextarea.classList.add("locked");
      } else {
          lockButton.textContent = "Lock";
          codeTextarea.removeAttribute("readonly");
          codeTextarea.classList.remove("locked");
      }
  });
});
