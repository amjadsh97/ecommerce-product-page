import React, {createContext, useContext, useEffect, useState} from 'react';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
	const [productDetails, setProductDetails] = useState({ count: 0, price: 200 });
	const [numberProducts, setNumberProducts] = useState(0)

	return (
		<StateContext.Provider value={{ productDetails, setProductDetails, numberProducts, setNumberProducts }}>
			{children}
		</StateContext.Provider>
	);
};
