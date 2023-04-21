import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
	const { jobs } = useContext(AppContext);

	return (
		<>
			<p>There are {jobs.length} jobs.</p>
		</>
	);
};
