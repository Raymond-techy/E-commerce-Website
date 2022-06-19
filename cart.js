const cartPage = document.querySelector(".cartTableRow");
const availableCart = localStorage.getItem("cartItems");
const noItem = document.querySelector(".noItem");
var total = [0];
cartPage.innerHTML = availableCart;
// retrieve cart Items
if (availableCart) {
  cartPage.innerHTML = availableCart;
}

const row = document.querySelectorAll("tr");
row.forEach((row) => {
  row.addEventListener("click", (e) => RemoveFromCart(e));
});

// set remove button
function RemoveFromCart(e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentNode.parentNode.remove();
  }
  localStorage.setItem("cartItems", cartPage.innerHTML);
  location.reload();
}
localStorage.setItem("cartItems", cartPage.innerHTML);

// map through row and cal total price in cart
const cartPrc = document.querySelectorAll(".cartPrices span");
Array.from(cartPrc).map((crt) => {
  total.push(Number(crt.innerHTML));
});
var updateTotal = total.reduce((a, b) => a + b);
const subTotal = document.querySelector(".subTotal");
const cartTotal = document.querySelector(".cartTotal");
const Totalpage = document.querySelector(".total");
subTotal.innerHTML = updateTotal;
cartTotal.innerHTML = updateTotal + 2500;
if (updateTotal === 0) {
  console.log(total);
  Totalpage.style.display = "none";
}
// cartPrc.forEach((crtPrc) => total.push(crtPrc.innerHTML));
// console.log(total);

// setInterval(window.location.reload(), 10000);
