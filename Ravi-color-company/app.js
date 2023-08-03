/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Tilak Rajeshkumar Kawa
 *      Student ID: 164542219
 *      Date:       02/12/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.


// For debugging, display all of our data in the console


const { products, categories } = window;
const displayItems = document.querySelector(".display-items");
const navbar = document.querySelector("#menu");

// Load items
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("selected-category").textContent = "Interior Paints";
  displayProductItems(
    products.filter(function (product) {
      if (product.categories.includes("c1")) {
        return product;
      }
    })
  );

  displayMenuButtons();
});

// Displays all the products in form of cards
function displayProductItems(productItems) {
  let prod_dis = productItems.map(function (product) {
    return ProductCard(product);
  });

  prod_dis = prod_dis.join("");
  displayItems.innerHTML = prod_dis;
}

// Creates a product card
function ProductCard(productinfo) {
  return `<article class="card row column">
    
    <div class="card-info">
    <header>
      <h4>${productinfo.title}</h4>
      <img src="${productinfo.image}" alt="Product-Image" style="width:100% height:85%">
      <h4 class="price">CAD${(productinfo.price).toLocaleString("en-CA", {
        currency: "CAD",
        style: "currency",
      })}</h4>
    </header>
    <p class="card-text">${productinfo.description}</p><br><br>
    </div>
  </article>`;
}
//The js code the docx provided was very confusing for me. I googled it and made it my self!

// Displays all the menu buttons and changes the heading according to it
function displayMenuButtons() {
  // Creating the navbar dynamically
  const ctgry = categories
    .map(function (item) {
      return `<button data-id="${item.name}" class="filter-btn" type="button">${item.name}</button>`;
    })
    .join("");

  navbar.innerHTML = ctgry;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Filter Items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let category = e.currentTarget.dataset.id;
      document.getElementById("selected-category").textContent =
        e.currentTarget.dataset.id;

      // Converting human readable to category codes
      if (category === "Interior Paints") {
        category = "c1";
      } else if (category === "Exterior Paints") {
        category = "c2";
      } else if (category === "Oil-Paints") {
        category = "c3";
      }

      const pr_ctgry = products.filter(function (item) {
        if (item.categories.includes(category)) {
          return item;
        }
      });

      displayProductItems(pr_ctgry);
    });
  });
}