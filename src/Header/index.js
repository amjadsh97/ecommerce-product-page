import React, {useEffect, useRef, useState} from 'react';
import {iconCart, iconClose, iconDelete, iconMenu, logo} from "../assets";
import profileImage from "../assets/images/image-avatar.png";
import imageProduct from "../assets/images/image-product-1-thumbnail.jpg"
import {useStateContext} from "../StateContext";

const Header = () => {
	const {productDetails, setProductDetails, numberProducts, setNumberProducts} = useStateContext();
	const [isHeaderCartOpen, setIsHeaderCartOpen] = useState(false);
	const [isNavOpened, setIsNavOpened] = useState(false)

	const headerCartRef = useRef();
	const iconCartRef = useRef();


	const handleCart = () => {
		setIsHeaderCartOpen(prev => !prev)
	}

	const handleRemoveItems = () => {
		setProductDetails(prevState => ({...prevState, count: 0}));
		setNumberProducts(0)
	}

	useEffect(() => {
		const handleClickOutside = (event) => {
			if ((headerCartRef.current && !headerCartRef.current.contains(event.target))) {
				setIsHeaderCartOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isHeaderCartOpen]);

	return (
		<header className="header">
			<div className={`header-start ${isNavOpened ? "is-nav-opened":""}`}>
				<span className="menu is-mobile" onClick={() => setIsNavOpened(true)}>{iconMenu}</span>
				<h1 className="title">{logo}</h1>
				<nav className='nav'>
					<ul className="list">
						<li className="list-item"><a href="#">Collections</a></li>
						<li className="list-item"><a href="#">Men</a></li>
						<li className="list-item"><a href="#">Women</a></li>
						<li className="list-item"><a href="#">About</a></li>
						<li className="list-item"><a href="#">Contact</a></li>
					</ul>
				</nav>
				<nav className='nav nav-with-mobile'>
					<button onClick={() => setIsNavOpened(false)} className="close-nav">{iconClose}</button>
					<ul className="list">
						<li className="list-item"><a href="#">Collections</a></li>
						<li className="list-item"><a href="#">Men</a></li>
						<li className="list-item"><a href="#">Women</a></li>
						<li className="list-item"><a href="#">About</a></li>
						<li className="list-item"><a href="#">Contact</a></li>
					</ul>
				</nav>
			</div>

			<div className="header-end">
				<div ref={iconCartRef} onClick={handleCart} className="cart-wrapper">
					<span className="icon-wrapper">{iconCart}</span>
					{!!productDetails.count && <span className="cart-wrapper-count">{productDetails.count}</span>}
				</div>
				<div className="avatar">
					<img src={profileImage} alt="profile image"/>
				</div>
				{/*{isHeaderCartOpen && (*/}
					<div className={`cart-header ${isHeaderCartOpen ? "cart-header-opened":""}`} ref={headerCartRef}>
						<h3 className="">cart</h3>
						<div className="cart-header-wrapper">

								<div className={`cart-row ${productDetails.count === 0 ? "empty-cart":""}`}>
									{productDetails.count === 0 ? <p>Your cart is empty</p> :
										<>
											<div className="product-image">
												<img src={imageProduct} alt="image of product"/>
											</div>
											<div className="product-row">
												<div className="product-column">
													<div className="product-name">Fall Limited Edition Sneakers</div>
													<div className="product-info">
														<span className="product-price">${productDetails.price}</span>
														<span>x</span>
														<span className="product-count">{productDetails.count}</span>
														<strong className="total">${productDetails.price * productDetails.count}</strong>
													</div>
												</div>
												<button onClick={handleRemoveItems} className="remove-item">{iconDelete}</button>
											</div>
											<button className="checkout">
												Checkout
											</button>
										</>}
								</div>

						</div>
					</div>
				{/* )}*/}
			</div>

		</header>
	);
};

export default Header;
