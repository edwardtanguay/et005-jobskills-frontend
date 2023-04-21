import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const appTitle = 'The Job Site';

	return (
		<AppContext.Provider
			value={{
				appTitle,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};