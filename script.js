/*
 * PLACEHOLDER LINKS
 * Replace these two values when the final form URL and phone number are ready.
 */
const DELIVERY_REQUEST_URL = "https://constructioncourierservice.com";
const PHONE_NUMBER = "+15749046108";

const iframeWrap = document.querySelector("#iframe-wrap");
const iframe = document.querySelector("#delivery-iframe");
const placeholder = document.querySelector("#embed-placeholder");

if (DELIVERY_REQUEST_URL) {
  iframe.src = DELIVERY_REQUEST_URL;
  iframeWrap.hidden = false;
  placeholder.hidden = true;
}

if (PHONE_NUMBER) {
  document.querySelectorAll(".call-link").forEach((link) => {
    link.href = `tel:${PHONE_NUMBER}`;
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", targetId);
  });
});
