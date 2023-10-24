/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../AllHome/Header";
import Footer from "../AllHome/Footer";
import { Link } from "react-router-dom";
import Services from "../AllHome/Services";
import { CartProvider, useCart } from "react-use-cart";

function Page() {
  const { addItem } = useCart();
  const products = [
    {
      publisher: "101 Cookbooks",
      title: "Best Pizza Dough Ever",
      source_url: "http://www.101cookbooks.com/archives/001199.html",
      id: "47746",
      image_url:
        "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
      price: 180,
      publisher_url: "http://www.101cookbooks.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "Deep Dish Fruit Pizza",
      source_url: "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/",
      id: "46956",
      image_url: "http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg",
      price: 120,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Pizza Dip",
      source_url: "http://www.closetcooking.com/2011/03/pizza-dip.html",
      id: "35477",
      image_url:
        "http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg",
      price: 150,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
      source_url:
        "http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html",
      id: "41470",
      image_url:
        "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
      price: 99.98,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Pizza Quesadillas (aka Pizzadillas)",
      source_url:
        "http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html",
      id: "35478",
      image_url:
        "http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg",
      price: 88,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "Two Peas and Their Pod",
      title: "Sweet Potato Kale Pizza with Rosemary & Red Onion",
      source_url:
        "http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion/",
      id: "54454",
      image_url:
        "http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg",
      price: 120,
      publisher_url: "http://www.twopeasandtheirpod.com",
    },
    {
      publisher: "My Baking Addiction",
      title: "Pizza Dip",
      source_url: "http://www.mybakingaddiction.com/pizza-dip/",
      id: "2ec050",
      image_url:
        "http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg",
      price: 147,
      publisher_url: "http://www.mybakingaddiction.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "Pizza Potato Skins",
      source_url:
        "http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/",
      id: "6fab1c",
      image_url: "http://forkify-api.herokuapp.com/images/pizza3464.jpg",
      price: 78,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "Bon Appetit",
      title: "No-Knead Pizza Dough",
      source_url:
        "http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough",
      id: "49346",
      image_url:
        "http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg",
      price: 220,
      publisher_url: "http://www.bonappetit.com",
    },
    {
      publisher: "Simply Recipes",
      title: "Homemade Pizza",
      source_url: "http://www.simplyrecipes.com/recipes/homemade_pizza/",
      id: "36453",
      image_url:
        "http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg",
      price: 85.5,
      publisher_url: "http://simplyrecipes.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Taco Quesadilla Pizzas",
      source_url:
        "http://www.closetcooking.com/2012/08/taco-quesadilla-pizza.html",
      id: "35626",
      image_url:
        "http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg",
      price: 58,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "All Recipes",
      title: "Jay’s Signature Pizza Crust",
      source_url:
        "http://allrecipes.com/Recipe/Jays-Signature-Pizza-Crust/Detail.aspx",
      id: "17796",
      image_url: "http://forkify-api.herokuapp.com/images/237891b5e4.jpg",
      price: 88,
      publisher_url: "http://allrecipes.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Avocado Breakfast Pizza with Fried Egg",
      source_url:
        "http://www.closetcooking.com/2012/07/avocado-breakfast-pizza-with-fried-egg.html",
      id: "35097",
      image_url:
        "http://forkify-api.herokuapp.com/images/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg",
      price: 68,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "Pepperoni Pizza Burgers",
      source_url:
        "http://thepioneerwoman.com/cooking/2012/10/pepperoni-pizza-burgers/",
      id: "46895",
      image_url: "http://forkify-api.herokuapp.com/images/pizzaburgera5bd.jpg",
      price: 147,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Thai Chicken Pizza with Sweet Chili Sauce",
      source_url:
        "http://www.closetcooking.com/2012/02/thai-chicken-pizza-with-sweet-chili.html",
      id: "35635",
      image_url:
        "http://forkify-api.herokuapp.com/images/Thai2BChicken2BPizza2Bwith2BSweet2BChili2BSauce2B5002B435581bcf578.jpg",
      price: 124,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "One Basic Pizza Crust",
      source_url:
        "http://thepioneerwoman.com/cooking/2011/09/steakhouse-pizza/",
      id: "47000",
      image_url:
        "http://forkify-api.herokuapp.com/images/steakhousepizza0b87.jpg",
      price: 157,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "Two Peas and Their Pod",
      title: "Peach, Basil, Mozzarella, & Balsamic Pizza",
      source_url:
        "http://www.twopeasandtheirpod.com/peach-basil-mozzarella-balsamic-pizza/",
      id: "54491",
      image_url:
        "http://forkify-api.herokuapp.com/images/peachbasilpizza6c7de.jpg",
      price: 158,
      publisher_url: "http://www.twopeasandtheirpod.com",
    },
    {
      publisher: "Real Simple",
      title: "English-Muffin Egg Pizzas",
      source_url:
        "http://www.realsimple.com/food-recipes/browse-all-recipes/english-muffin-egg-pizzas-10000000663044/index.html",
      id: "38812",
      image_url:
        "http://forkify-api.herokuapp.com/images/pizza_300d938bd58.jpg",
      price: 140,
      publisher_url: "http://realsimple.com",
    },
    {
      publisher: "My Baking Addiction",
      title: "Simple No Knead Pizza Dough",
      source_url:
        "http://www.mybakingaddiction.com/no-knead-pizza-dough-recipe/",
      id: "dd21dd",
      image_url:
        "http://forkify-api.herokuapp.com/images/PizzaDough1of12edit5779.jpg",
      price: 77,
      publisher_url: "http://www.mybakingaddiction.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "Grilled Veggie Pizza",
      source_url:
        "http://thepioneerwoman.com/cooking/2011/07/grilled-vegetable-pizza/",
      id: "47011",
      image_url:
        "http://forkify-api.herokuapp.com/images/grilledveggie79bd.jpg",
      price: 66,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "My Baking Addiction",
      title: "Spicy Chicken and Pepper Jack Pizza",
      source_url:
        "http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/",
      id: "0fb8f4",
      image_url:
        "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg",
      price: 149,
      publisher_url: "http://www.mybakingaddiction.com",
    },
    {
      publisher: "Simply Recipes",
      title: "How to Grill Pizza",
      source_url: "http://www.simplyrecipes.com/recipes/how_to_grill_pizza/",
      id: "36476",
      image_url:
        "http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg",
      price: 74,
      publisher_url: "http://simplyrecipes.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "PW’s Favorite Pizza",
      source_url:
        "http://thepioneerwoman.com/cooking/2010/02/my-favorite-pizza/",
      id: "47161",
      image_url:
        "http://forkify-api.herokuapp.com/images/4364270576_302751a2a4f3c1.jpg",
      price: 99,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "My Baking Addiction",
      title: "Barbecue Chicken Pizza",
      source_url:
        "http://www.mybakingaddiction.com/barbecue-chicken-pizza-recipe/",
      id: "a723e8",
      image_url:
        "http://forkify-api.herokuapp.com/images/BBQChickenPizza3e2b.jpg",
      price: 95.6,
      publisher_url: "http://www.mybakingaddiction.com",
    },
    {
      publisher: "Two Peas and Their Pod",
      title: "Avocado Pita Pizza with Cilantro Sauce",
      source_url:
        "http://www.twopeasandtheirpod.com/avocado-pita-pizza-with-cilantro-sauce/",
      id: "54388",
      image_url:
        "http://forkify-api.herokuapp.com/images/avocadopizzawithcilantrosauce4bf5.jpg",
      price: 95,
      publisher_url: "http://www.twopeasandtheirpod.com",
    },
    {
      publisher: "What's Gaby Cooking",
      title: "Pizza Monkey Bread",
      source_url: "http://whatsgabycooking.com/pizza-monkey-bread/",
      id: "ead4e0",
      image_url:
        "http://forkify-api.herokuapp.com/images/PizzaMonkeyBread67f8.jpg",
      price: 75,
      publisher_url: "http://whatsgabycooking.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "Supreme Pizza Burgers",
      source_url:
        "http://thepioneerwoman.com/cooking/2012/10/supreme-pizza-burgers/",
      id: "46892",
      image_url: "http://forkify-api.herokuapp.com/images/burger53be.jpg",
      price: 168,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "Closet Cooking",
      title:
        "Balsamic Strawberry and Chicken Pizza with Sweet Onions and Smoked Bacon",
      source_url:
        "http://www.closetcooking.com/2012/07/balsamic-strawberry-and-chicken-pizza.html",
      id: "35128",
      image_url:
        "http://forkify-api.herokuapp.com/images/Strawberry2BBalsamic2BPizza2Bwith2BChicken252C2BSweet2BOnion2Band2BSmoked2BBacon2B5002B300939d125e2.jpg",
      price: 130,
      publisher_url: "http://closetcooking.com",
    },
  ];
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <h2 className="mb-4">Hot Meals</h2>
              <p className="flip">
                <span className="deg1"></span>
                <span className="deg2"></span>
                <span className="deg3"></span>
              </p>
              <p className="mt-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row ">
            {products.map((item) => (
              <div className="col-md-4 text-center mb-5" key={item.id}>
                <div className="menu-wrap ">
                  <a
                    href="#"
                    className="menu-img img mb-4"
                    style={{ backgroundImage: `url(${item.image_url})` }}></a>
                  <div className="text">
                    <h3>
                      <a href="#">{item.title}</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia.
                    </p>
                    <p className="price">
                      <span>$ {item.price}</span>
                    </p>
                    <p id="show-alert-button">
                      <a
                        id="show-alert-button"
                        className="btn btn-white btn-outline-white"
                        onClick={() => addItem(item)}>
                        Add to cart
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </section>
    </div>
  );
}

function Service() {
  return (
    <CartProvider>
      <Header />
      <section
        className="home-slider  img"
        style={{ backgroundImage: `url(images/bg_1.jpg)` }}>
        <div
          className="slider-item"
          style={{ backgroundImage: `url(images/bg_3.jpg)`, height: "600px" }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center align-items-center">
              <div
                className="col-md-7 col-sm-12 text-center 
              "
                style={{ marginTop: "150px" }}>
                <h1 className="mb-3 mt-5 bread">Our Services</h1>
                <p className="breadcrumbs">
                  <span className="mr-2 h4 ">
                    <Link to="/" style={{ color: "#fbff00" }}>
                      Home
                    </Link>
                  </span>
                  <span className="h5">/ Services</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Page />
      <Footer />
      {/* <div class="alert-hub-container "> */}
      {/* <div class="alert-hub  top-right success fade-in"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" style={{width: "25px", marginRight: "10px"}}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div style={{width:' 90%', paddingRight: '50px'}}><h2></h2><p><h2>Hello world</h2></p></div></div> */}
      {/* </div> */}
    </CartProvider>
  );
}

export default Service;
