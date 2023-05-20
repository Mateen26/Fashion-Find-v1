import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../Store/loaderSlicer';
import Swal from 'sweetalert2';

const HomePage = () => {
  const getProducts = useSelector((state) => state.products.products);
  console.log('getProducts: ', getProducts);
  const [productData, setProductData] = useState([])
  const dispatch = useDispatch()

  console.log('productData: ', productData);

  const products = []

 
  
  useEffect( () =>  {
    
    const getData = async () => {
      dispatch(setLoading(true))
      const response = await axios.get('https://dummyjson.com/products/?limit=0');
     if(response?.status == 200)
     {
      const productData = response?.data
      setProductData(productData)
       setTimeout(() => {
         dispatch(setLoading(false))

       }, 800);

    } 

    }
    getData()
  }, []);

  const handleClick = async (e) => {
   
    dispatch(setLoading(true))
    const response = await axios.get(`https://dummyjson.com/products/search?q=${e}`);
    if (response?.status == 200) {
      const productData = response?.data
      setProductData(productData)
      setTimeout(() => {
        dispatch(setLoading(false))
        
      }, 800);

    } 
    
  }
  return (<>
    <div className="App">
      <main>

        {getProducts?.length < 1 &&
        (<>
           <div class="banner">
          <div class="container">
            <div class="slider-container has-scrollbar">
              <div class="slider-item">
                <img src="assets/images/banner-1.jpg" alt="women's latest fashion sale" class="banner-img" />
                <div class="banner-content">
                  <p class="banner-subtitle">Trending item</p>
                  <h2 class="banner-title">Women's latest fashion sale</h2>
                  <p class="banner-text">
                    starting at &dollar; <b>20</b>.00
                  </p>
                  <a href="#" class="banner-btn">Shop now</a>
                </div>
              </div>
              <div class="slider-item">
                <img src="assets/images/banner-2.jpg" alt="modern sunglasses" class="banner-img" />
                <div class="banner-content">
                  <p class="banner-subtitle">Trending accessories</p>
                  <h2 class="banner-title">Modern sunglasses</h2>
                  <p class="banner-text">
                    starting at &dollar; <b>15</b>.00
                  </p>
                  <a href="#" class="banner-btn">Shop now</a>
                </div>
              </div>
              <div class="slider-item">
                <img src="assets/images/banner-3.jpg" alt="new fashion summer sale" class="banner-img" />
                <div class="banner-content">
                  <p class="banner-subtitle">Sale Offer</p>
                  <h2 class="banner-title">New fashion summer sale</h2>
                  <p class="banner-text">
                    starting at &dollar; <b>29</b>.99
                  </p>
                  <a href="#" class="banner-btn">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="category">
          <div class="container">
            <div class="category-item-container has-scrollbar">
              <div class="category-item">
                <div class="category-img-box">
                  <img src="assets/images/icons/dress.svg" alt="dress & frock" width="30" />
                </div>
                <div class="category-content-box">
                  <div class="category-content-flex">
                    <h3 class="category-item-title">Dress & frock</h3>
                    <p class="category-item-amount">(53)</p>
                  </div>
                  <a href="#" class="category-btn">Show all</a>
                </div>
              </div>
              <div class="category-item">
                <div class="category-img-box">
                  <img src="assets/images/icons/coat.svg" alt="winter wear" width="30" />
                </div>
                <div class="category-content-box">
                  <div class="category-content-flex">
                    <h3 class="category-item-title">Winter wear</h3>
                    <p class="category-item-amount">(58)</p>
                  </div>
                  <a href="#" class="category-btn">Show all</a>
                </div>
              </div>
              <div class="category-item">
                <div class="category-img-box">
                  <img src="assets/images/icons/glasses.svg" alt="glasses & lens" width="30" />
                </div>
                <div class="category-content-box">
                  <div class="category-content-flex">
                    <h3 class="category-item-title">Glasses & lens</h3>
                    <p class="category-item-amount">(68)</p>
                  </div>
                  <a href="#" class="category-btn">Show all</a>
                </div>
              </div>
              <div class="category-item">
                <div class="category-img-box">
                  <img src="assets/images/icons/shorts.svg" alt="shorts & jeans" width="30" />
                </div>
                <div class="category-content-box">
                  <div class="category-content-flex">
                    <h3 class="category-item-title">Shorts & jeans</h3>
                    <p class="category-item-amount">(84)</p>
                  </div>
                  <a href="#" class="category-btn">Show all</a>
                </div>
              </div>
              <div class="category-item">
                <div class="category-img-box">
                  <img src="assets/images/icons/tee.svg" alt="t-shirts" width="30" />
                </div>
                <div class="category-content-box">
                  <div class="category-content-flex">
                    <h3 class="category-item-title">T-shirts</h3>
                    <p class="category-item-amount">(35)</p>
                  </div>
                  <a href="#" class="category-btn">Show all</a>
                </div>
              </div>
              <div class="category-item">
                <div class="category-img-box">
                  <img src="assets/images/icons/jacket.svg" alt="jacket" width="30" />
                </div>
                <div class="category-content-box">
                  <div class="category-content-flex">
                    <h3 class="category-item-title">Jacket</h3>
                    <p class="category-item-amount">(16)</p>
                  </div>
                  <a href="#" class="category-btn">Show all</a>
                </div>
              </div>
              <div class="category-item">
                <div class="category-img-box">
                  <img src="assets/images/icons/watch.svg" alt="watch" width="30" />
                </div>
                <div class="category-content-box">
                  <div class="category-content-flex">
                    <h3 class="category-item-title">Watch</h3>
                    <p class="category-item-amount">(27)</p>
                  </div>
                  <a href="#" class="category-btn">Show all</a>
                </div>
              </div>
              <div class="category-item">
                <div class="category-img-box">
                  <img src="assets/images/icons/hat.svg" alt="hat & caps" width="30" />
                </div>
                <div class="category-content-box">
                  <div class="category-content-flex">
                    <h3 class="category-item-title">Hat & caps</h3>
                    <p class="category-item-amount">(39)</p>
                  </div>
                  <a href="#" class="category-btn">Show all</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
        )}

        <div class="product-container">
          <div class="container">

            <div class="sidebar  has-scrollbar" data-mobile-menu>
              <div class="sidebar-category">
                <div class="sidebar-top">
                  <h2 class="sidebar-title">Category</h2>
                  <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                </div>
                <ul class="sidebar-menu-category-list">
                  <li class="sidebar-menu-category">
                    
                    <button onClick={() =>handleClick('cloth')} class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img src="assets/images/icons/dress.svg" alt="clothes" width="20" height="20"
                          class="menu-title-img" />
                        <p  class="menu-title">Clothes</p>
                      </div>
                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>
                    </button>
                  
                  </li>
                  <li class="sidebar-menu-category">
                    <button onClick={() => handleClick('shoes')} class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img src="assets/images/icons/shoes.svg" alt="footwear" class="menu-title-img" width="20"
                          height="20" />
                        <p class="menu-title">Footwear</p>
                      </div>
                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>
                    </button>
                    
                  </li>
                  <li class="sidebar-menu-category">
                    <button onClick={() => handleClick('Jewelry')} class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img src="assets/images/icons/jewelry.svg" alt="clothes" class="menu-title-img" width="20"
                          height="20" />
                        <p class="menu-title">Jewelry</p>
                      </div>
                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>
                    </button>
                   
                  </li>
                  <li class="sidebar-menu-category">
                    <button onClick={() => handleClick('Perfume')} class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img src="assets/images/icons/perfume.svg" alt="perfume" class="menu-title-img" width="20"
                          height="20" />
                        <p class="menu-title">Perfume</p>
                      </div>
                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>
                    </button>
                    
                  </li>
                  <li class="sidebar-menu-category">
                    <button onClick={() => handleClick('Cosmetics')} class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img src="assets/images/icons/cosmetics.svg" alt="cosmetics" class="menu-title-img" width="20"
                          height="20" />
                        <p class="menu-title">Cosmetics</p>
                      </div>
                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>
                    </button>
                   
                  </li>
                  <li class="sidebar-menu-category">
                    <button onClick={() => handleClick('Glasses')} class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img src="assets/images/icons/glasses.svg" alt="glasses" class="menu-title-img" width="20"
                          height="20" />
                        <p class="menu-title">Glasses</p>
                      </div>
                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>
                    </button>
                  </li>
                  <li class="sidebar-menu-category">
                    <button onClick={() => handleClick('Bags')} class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img src="assets/images/icons/bag.svg" alt="bags" class="menu-title-img" width="20" height="20" />
                        <p class="menu-title">Bags</p>
                      </div>
                      <div>
                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                      </div>
                    </button>
                   
                  </li>
                </ul>
              </div>
              <div class="product-showcase">
                <h3 class="showcase-heading">best sellers</h3>
                <div class="showcase-wrapper">
                  <div class="showcase-container">
                    <div class="showcase">
                      <a href="#" class="showcase-img-box">
                        <img src="assets/images/products/1.jpg" alt="baby fabric shoes" width="75" height="75"
                          class="showcase-img" />
                      </a>
                      <div class="showcase-content">
                        <a href="#">
                          <h4 class="showcase-title">baby fabric shoes</h4>
                        </a>
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
                        <div class="price-box">
                          <del>$5.00</del>
                          <p class="price">$4.00</p>
                        </div>
                      </div>
                    </div>
                    <div class="showcase">
                      <a href="#" class="showcase-img-box">
                        <img src="assets/images/products/2.jpg" alt="men's hoodies t-shirt" class="showcase-img"
                          width="75" height="75" />
                      </a>
                      <div class="showcase-content">
                        <a href="#">
                          <h4 class="showcase-title">men's hoodies t-shirt</h4>
                        </a>
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-half-outline"></ion-icon>
                        </div>
                        <div class="price-box">
                          <del>$17.00</del>
                          <p class="price">$7.00</p>
                        </div>
                      </div>
                    </div>
                    <div class="showcase">
                      <a href="#" class="showcase-img-box">
                        <img src="assets/images/products/3.jpg" alt="girls t-shirt" class="showcase-img" width="75"
                          height="75" />
                      </a>
                      <div class="showcase-content">
                        <a href="#">
                          <h4 class="showcase-title">girls t-shirt</h4>
                        </a>
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-half-outline"></ion-icon>
                        </div>
                        <div class="price-box">
                          <del>$5.00</del>
                          <p class="price">$3.00</p>
                        </div>
                      </div>
                    </div>
                    <div class="showcase">
                      <a href="#" class="showcase-img-box">
                        <img src="assets/images/products/4.jpg" alt="woolen hat for men" class="showcase-img" width="75"
                          height="75" />
                      </a>
                      <div class="showcase-content">
                        <a href="#">
                          <h4 class="showcase-title">woolen hat for men</h4>
                        </a>
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
                        <div class="price-box">
                          <del>$15.00</del>
                          <p class="price">$12.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-box">

              

              {/* <div class="product-featured">
                <h2 class="title">Deal of the day</h2>
                <div class="showcase-wrapper has-scrollbar">
                  <div class="showcase-container">
                    <div class="showcase">

                      <div class="showcase-banner">
                        <img src="assets/images/products/shampoo.jpg" alt="shampoo, conditioner & facewash packs" class="showcase-img" />
                      </div>
                      <div class="showcase-content">

                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div>
                        <a href="#">
                          <h3 class="showcase-title">shampoo, conditioner & facewash packs</h3>
                        </a>
                        <p class="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum
                          dolor dolor sit amet consectetur Lorem ipsum dolor
                        </p>
                        <div class="price-box">
                          <p class="price">$150.00</p>
                          <del>$200.00</del>
                        </div>
                        <button class="add-cart-btn">add to cart</button>
                        <div class="showcase-status">
                          <div class="wrapper">
                            <p>
                              already sold: <b>20</b>
                            </p>
                            <p>
                              available: <b>40</b>
                            </p>
                          </div>
                          <div class="showcase-status-bar"></div>
                        </div>
                        <div class="countdown-box">
                          <p class="countdown-desc">
                            Hurry Up! Offer ends in:
                          </p>
                          <div class="countdown">
                            <div class="countdown-content">
                              <p class="display-number">360</p>
                              <p class="display-text">Days</p>
                            </div>
                            <div class="countdown-content">
                              <p class="display-number">24</p>
                              <p class="display-text">Hours</p>
                            </div>
                            <div class="countdown-content">
                              <p class="display-number">59</p>
                              <p class="display-text">Min</p>
                            </div>
                            <div class="countdown-content">
                              <p class="display-number">00</p>
                              <p class="display-text">Sec</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="showcase-container">

                    <div class="showcase">

                      <div class="showcase-banner">
                        <img src="assets/images/products/jewellery-1.jpg" alt="Rose Gold diamonds Earring" class="showcase-img" />
                      </div>

                      <div class="showcase-content">

                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <h3 class="showcase-title">
                          <a href="#" class="showcase-title">Rose Gold diamonds Earring</a>
                        </h3>

                        <p class="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum
                          dolor dolor sit amet consectetur Lorem ipsum dolor
                        </p>

                        <div class="price-box">
                          <p class="price">$1990.00</p>
                          <del>$2000.00</del>
                        </div>

                        <button class="add-cart-btn">add to cart</button>

                        <div class="showcase-status">
                          <div class="wrapper">
                            <p> already sold: <b>15</b> </p>

                            <p> available: <b>40</b> </p>
                          </div>

                          <div class="showcase-status-bar"></div>
                        </div>

                        <div class="countdown-box">

                          <p class="countdown-desc">Hurry Up! Offer ends in:</p>

                          <div class="countdown">
                            <div class="countdown-content">
                              <p class="display-number">360</p>
                              <p class="display-text">Days</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">24</p>
                              <p class="display-text">Hours</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">59</p>
                              <p class="display-text">Min</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">00</p>
                              <p class="display-text">Sec</p>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div> */}

              <div class="product-main">
                <h2 class="title">Products {getProducts?.limit}</h2>
                <div class="product-grid">
                  {getProducts?.products?.map((item, index) => (
                  <div class="showcase">
                    <div class="showcase-banner">
                        <img src={item?.images?.[0] || `https://picsum.photos/202/300`}
                          onError={(e) => {
                            e.target.src = `https://picsum.photos/200/300`; 
                          }}
                        alt="" width="300" class="product-img default" />
                        <img src={item?.images?.[1]} alt="" width="300" class="product-img hover" />
                        <p class="showcase-badge">{item?.discountPercentage}%</p>
                      <div class="showcase-actions">
                        <button class="btn-action">
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                        <button class="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button class="btn-action">
                          <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                        <button class="btn-action">
                          <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div class="showcase-content">
                        <a href="#" class="showcase-category">{item?.title}</a>
                        <h2 class="showcase-title">{item?.brand}</h2>
                      <a href="#">
                          <h3 class="showcase-title">{item?.description}</h3>
                      </a>
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                      <div class="price-box">
                          <p class="price">${item?.price}</p>
                        <del>$75.00</del>
                      </div>
                    </div>
                  </div>
                )  )   }


                  {(getProducts?.length < 1 || getProducts?.total === 0) ? productData?.products?.map((item, index) => (
                  <div class="showcase" key={index}>
                    <div class="showcase-banner">
                        <img src={item?.images?.[0]} alt="" width="300" class="product-img default" />
                        <img src={item?.images?.[1]} alt="" width="300" class="product-img hover" />
                        <p class="showcase-badge">{item?.discountPercentage}%</p>
                      <div class="showcase-actions">
                        <button class="btn-action">
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                        <button class="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button class="btn-action">
                          <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                        <button class="btn-action">
                          <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div class="showcase-content">
                        <a href="#" class="showcase-category">{item?.title}</a>
                        <h2 class="showcase-title">{item?.brand}</h2>
                      <a href="#">
                          <h3 class="showcase-title">{item?.description}</h3>
                      </a>
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                      <div class="price-box">
                          <p class="price">${item?.price}</p>
                        <del>$75.00</del>
                      </div>
                    </div>
                  </div>
                )) : ''}
                
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="container">
            <div class="testimonials-box">

              <div class="testimonial">
                <h2 class="title">testimonial</h2>
                <div class="testimonial-card">
                  <img src="assets/images/testimonial-1.jpg" alt="alan doe" class="testimonial-banner" width="80" height="80" />
                  <p class="testimonial-name">Jassa Singh</p>
                  <p class="testimonial-title">CEO & Founder Invision</p>
                  <img src="assets/images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26" />
                  <p class="testimonial-desc">
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum
                    dolor dolor sit amet.
                  </p>
                </div>
              </div>

              <div class="cta-container">
                <img src="assets/images/cta-banner.jpg" alt="summer collection" class="cta-banner" />
                <a href="#" class="cta-content">
                  <p class="discount">25% Discount</p>
                  <h2 class="cta-title">Summer collection</h2>
                  <p class="cta-text">Starting @ $10</p>
                  <button class="cta-btn">Shop now</button>
                </a>
              </div>

              <div class="service">
                <h2 class="title">Our Services</h2>
                <div class="service-container">
                  <a href="#" class="service-item">
                    <div class="service-icon">
                      <ion-icon name="boat-outline"></ion-icon>
                    </div>
                    <div class="service-content">
                      <h3 class="service-title">Worldwide Delivery</h3>
                      <p class="service-desc">For Order Over $100</p>
                    </div>
                  </a>
                  <a href="#" class="service-item">

                    <div class="service-icon">
                      <ion-icon name="rocket-outline"></ion-icon>
                    </div>

                    <div class="service-content">

                      <h3 class="service-title">Next Day delivery</h3>
                      <p class="service-desc">UK Orders Only</p>

                    </div>

                  </a>
                  <a href="#" class="service-item">

                    <div class="service-icon">
                      <ion-icon name="call-outline"></ion-icon>
                    </div>

                    <div class="service-content">

                      <h3 class="service-title">Best Online Support</h3>
                      <p class="service-desc">Hours: 8AM - 11PM</p>

                    </div>

                  </a>
                  <a href="#" class="service-item">

                    <div class="service-icon">
                      <ion-icon name="arrow-undo-outline"></ion-icon>
                    </div>

                    <div class="service-content">

                      <h3 class="service-title">Return Policy</h3>
                      <p class="service-desc">Easy & Free Return</p>

                    </div>

                  </a>
                  <a href="#" class="service-item">

                    <div class="service-icon">
                      <ion-icon name="ticket-outline"></ion-icon>
                    </div>

                    <div class="service-content">

                      <h3 class="service-title">30% money back</h3>
                      <p class="service-desc">For Order Over $100</p>

                    </div>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="blog">
          <div class="container">
            <div class="blog-container has-scrollbar">
              <div class="blog-card">
                <a href="#">
                  <img src="assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                </a>
                <div class="blog-content">
                  <a href="#" class="blog-category">Fashion</a>
                  <a href="#">
                    <h3 class="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                  </a>
                  <p class="blog-meta">
                    By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
                  </p>
                </div>
              </div>
              <div class="blog-card">

                <a href="#">
                  <img src="assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                    class="blog-banner" width="300" />
                </a>

                <div class="blog-content">

                  <a href="#" class="blog-category">Clothes</a>

                  <h3>
                    <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                  </h3>

                  <p class="blog-meta">
                    By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
                  </p>

                </div>

              </div>
              <div class="blog-card">

                <a href="#">
                  <img src="assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                    class="blog-banner" width="300" />
                </a>

                <div class="blog-content">

                  <a href="#" class="blog-category">Shoes</a>

                  <h3>
                    <a href="#" class="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
                  </h3>

                  <p class="blog-meta">
                    By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
                  </p>

                </div>

              </div>
              <div class="blog-card">

                <a href="#">
                  <img src="assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                    class="blog-banner" width="300" />
                </a>

                <div class="blog-content">

                  <a href="#" class="blog-category">Electronics</a>

                  <h3>
                    <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                  </h3>

                  <p class="blog-meta">
                    By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
                  </p>

                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  </>

    )
}

export default HomePage