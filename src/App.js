import React, {useEffect, useRef, useState} from "react";
import "./reset.css"
import "./App.css"
import Gallery from "./Gallery";
import {iconCart, iconPlus, iconMinus} from "./assets";
import profileImage from "./assets/images/image-avatar.png"
import Header from "./Header";
import {useStateContext} from "./StateContext";
import Gallery2 from "./Gallery";

export default function App() {
	const {productDetails, setProductDetails, numberProducts, setNumberProducts} = useStateContext();


	const handleAddToCart = () => {
		setProductDetails(prevState => ({...prevState, count: numberProducts}));
	}
	const handleChangeItems = (operand) => {
		if (operand === "+") {
			setNumberProducts(prev => prev + 1)
		}
		if (operand === "-" && numberProducts > 0) {
			setNumberProducts(prev => prev - 1)
		}
	}

	return (
		<div className="app">
			<Header/>

			<div className="product">
				<Gallery/>
				<div className="product-details">
					<span className="product-tag">SNEAKER COMPANY</span>
					<h2 className="product-title">Fall Limited Edition Sneakers</h2>
					<p className="product-description">These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
					<div className="price-wrapper">
						<span
							className="price">${productDetails.price}.00</span>
						<div className="discount">50%</div>
						<div className="old-price"><strike>$250.00</strike></div>
					</div>
					<div className="c-wrapper">
						<div className="number-items-wrapper">
							<button onClick={() => handleChangeItems("-")} className="remove-items"><span
								className="icon">{iconMinus}</span></button>
							<span
								className="number-items">{numberProducts}</span>
							<button onClick={() => handleChangeItems("+")} className="add-items"><span
								className="icon">{iconPlus}</span></button>
						</div>
						<button onClick={handleAddToCart} className="add-to-cart">
							<span className="icon">{iconCart}</span>
							<span>Add to cart</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
