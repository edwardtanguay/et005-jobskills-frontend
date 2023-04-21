import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageJobs = () => {
	const { jobs } = useContext(AppContext);

	const _jobs = jobs.filter(m => m.publicationDate > '2023-03-01').sort((a, b) => (a.publicationDate < b.publicationDate) ? 1 : 0);

	return (
		<div className="pageWelcome">
			<div className="jobs">
				{_jobs.map((job) => {
					return <div className="job">
						<div className="publicationDate">{job.publicationDate}</div>
						<div className="title"><a target="_blank" href={job.url}>{job.title}</a> - {job.company}</div>
						<div className="skillList">{job.skillList}</div>
					</div>;
				})}
			</div>
		</div>
	);
};
