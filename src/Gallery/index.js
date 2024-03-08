import React, {useState} from 'react';
import './style.css'; // Import your CSS file for styling

import productImage1 from "../assets/images/image-product-1.jpg"
import productImage2 from "../assets/images/image-product-2.jpg"
import productImage3 from "../assets/images/image-product-3.jpg"
import productImage4 from "../assets/images/image-product-4.jpg"
import {iconClose, iconNext, iconPrevious} from "../assets";

const Gallery = () => {
	const [currentImage, setCurrentImage] = useState(productImage1);
	const [showOverlay, setShowOverlay] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const images = [productImage1, productImage2, productImage3, productImage4];

	const handleImageClick = (index, image) => {
		setCurrentImage(image);
		setCurrentImageIndex(index)
	};

	const handleShowOverlay = () => {
		setShowOverlay(true)
	}

	const handleCloseLightBox = () => {
		setShowOverlay(false)
	}

	const handlePrevImage = () => {
		const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
		setCurrentImage(images[prevIndex]);
		setCurrentImageIndex(prevIndex);
	};

	const handleNextImage = () => {
		const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
		setCurrentImage(images[nextIndex]);
		setCurrentImageIndex(nextIndex);
	};

	return (
		<>
			<div className="gallery-wrapper">
				<div onClick={handleShowOverlay} className="preview">
					<img src={images[currentImageIndex]} alt="current" className="current-image"/>
				</div>
				<div className="controls">
					{images.map((image, index) => (
						<div className={`control-image ${currentImage === image ? 'active' : ''}`}>
							<img
								key={index}
								src={image}
								alt={`image-${index}`}
								onClick={() => handleImageClick(index, image)}
							/>
						</div>
					))}
				</div>
			</div>
			{showOverlay && (
				<div className="gallery-wrapper overly-lightbox">
					<div className="gallery-inner-wrapper">
						<button onClick={handleCloseLightBox} className="close-button">{iconClose}</button>
						<div className="preview">
							<img src={images[currentImageIndex]} alt="current" className="current-image"/>
						</div>
						<div className="controls">
							{images.map((image, index) => (
								<div className={`control-image ${currentImage === image ? 'active' : ''}`}>
									<img
										key={index}
										src={image}
										alt={`image-${index}`}
										onClick={() => handleImageClick(index, image)}
									/>
								</div>
							))}
						</div>

						<div className="arrows-wrapper">
							<button className="arrow left-arrow" onClick={handlePrevImage}>{iconPrevious}</button>
							<button className="arrow right-arrow" onClick={handleNextImage}>{iconNext}</button>
						</div>
					</div>
				</div>
			)}

			<div className="is-mobile gallery-wrapper">
					<div className="gallery-inner-wrapper">
						<button onClick={handleCloseLightBox} className="close-button">{iconClose}</button>
						<div className="preview">
							<img src={images[currentImageIndex]} alt="current" className="current-image"/>
						</div>
						<div className="controls">
							{images.map((image, index) => (
								<div className={`control-image ${currentImage === image ? 'active' : ''}`}>
									<img
										key={index}
										src={image}
										alt={`image-${index}`}
										onClick={() => handleImageClick(index, image)}
									/>
								</div>
							))}
						</div>

						<div className="arrows-wrapper">
							<button className="arrow left-arrow" onClick={handlePrevImage}>{iconPrevious}</button>
							<button className="arrow right-arrow" onClick={handleNextImage}>{iconNext}</button>
						</div>
					</div>
				</div>
		</>
	);
};

export default Gallery;
