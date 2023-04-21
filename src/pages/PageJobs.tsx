import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Job } from '../components/Job';

export const PageJobs = () => {
	const { jobs } = useContext(AppContext);

	const _jobs = jobs.filter(m => m.publicationDate > '2023-03-01').sort((a, b) => (a.publicationDate < b.publicationDate) ? 1 : 0);

	return (
		<div className="pageJobs">
			<div className="jobs">
				{_jobs.map((job) => {
					return <Job job={job} />; })}
			</div>
		</div>
	);
};