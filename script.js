const rangeBar = document.getElementById("range_bar");
const pageViews = document.getElementById("pageviews");
const planPrice = document.getElementById("price");
const periodSwitch = document.getElementById("period_switch");
const periodText = document.querySelectorAll(".period_switch_text");

periodSwitch.addEventListener("click", () => {
  periodSwitch.classList.toggle("discount");
  discount();
  periodText.forEach((item) => {
    item.classList.toggle("period_active");
  });
});

function discount() {
  (rangeBar.oninput = () => {
    if (!periodSwitch.classList.contains("discount")) {
      if (rangeBar.value === "0") {
        pageViews.innerHTML = "10K PAGEVIEWS";
        planPrice.innerHTML = "$8.00 /month";
      } else if (rangeBar.value === "25") {
        pageViews.innerHTML = "50K PAGEVIEWS";
        planPrice.innerHTML = "$12.00 /month";
      } else if (rangeBar.value === "50") {
        pageViews.innerHTML = "100K PAGEVIEWS";
        planPrice.innerHTML = "$16.00 /month";
      } else if (rangeBar.value === "75") {
        pageViews.innerHTML = "500K PAGEVIEWS";
        planPrice.innerHTML = "$24.00 /month";
      } else {
        pageViews.innerHTML = "1M PAGEVIEWS";
        planPrice.innerHTML = "$36.00 /month";
      }
    } else {
      if (rangeBar.value === "0") {
        pageViews.innerHTML = "10K PAGEVIEWS";
        planPrice.innerHTML = "$6.00 /month";
      } else if (rangeBar.value === "25") {
        pageViews.innerHTML = "50K PAGEVIEWS";
        planPrice.innerHTML = "$9.00 /month";
      } else if (rangeBar.value === "50") {
        pageViews.innerHTML = "100K PAGEVIEWS";
        planPrice.innerHTML = "$12.00 /month";
      } else if (rangeBar.value === "75") {
        pageViews.innerHTML = "500K PAGEVIEWS";
        planPrice.innerHTML = "$18.00 /month";
      } else {
        pageViews.innerHTML = "1M PAGEVIEWS";
        planPrice.innerHTML = "$27.00 /month";
      }
    }
  })(); // IIFE
}

discount();
