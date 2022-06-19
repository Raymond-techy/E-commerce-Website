const cartBtn = document.querySelectorAll(".add-to-cart");
const cartpages = document.querySelector(".cartTable");
cartBtn.forEach((cart) =>
  cart.addEventListener("click", (e) => addCart(cart, e))
);
var totalCartPrice = [];
const cartList = document.createElement("div");
function addCart(cart, e) {
  var parent = cart.parentNode;
  var cartImg = cart.parentNode.parentNode.querySelector("img");
  cartImg = cartImg.getAttribute("src");
  var text = cartImg;
  var cartText = parent.children[1].innerText;
  var cartPrice = parent.children[2].querySelector("span").innerText;
  cartPrice = parseFloat(cartPrice.replace(/,/g, ""));
  const cartItems = document.createElement("tr");
  cartItems.classList.add("cartPageELement");
  cartItems.innerHTML = `
    <tr>
      <td>
       <i class="fa fa-trash" aria-hidden="true"></i>
        <img src=${text}>
   <h3>${cartText}</h3> 
        </td>
      <td>
        <h3>₦${cartPrice}</h3>
      </td>
      <td>
       <p>1</p>
      </td>
      <td class="subtotalRow">
        <h3 class="cartPrices">₦<span>${cartPrice}</span></h3>
      </td>
    </tr>
      `;
  cartpages.innerHTML += cartItems.innerHTML;
  totalCartPrice.push(cartPrice);
  localStorage.setItem("cartItems", cartpages.innerHTML);
  cart.innerHTML = `<button class="direct-to-cart"><a href="cart.html"  >View Cart <i class="fas fa-arrow-right"></i></a></button>`;
}
// const availableCart = localStorage.getItem("cartItems");
// if (availableCart) {
//   console.log(availableCart);
// }
