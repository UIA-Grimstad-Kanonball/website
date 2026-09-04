/* Language switch. Both languages are already in index.html — setting
   lang/data-lang on <html> tells style.css which one to show. */

document.querySelectorAll(".lang button").forEach(function (button) {
  button.addEventListener("click", function () {
    document.documentElement.lang = button.value;
    document.documentElement.dataset.lang = button.value;
  });
});
