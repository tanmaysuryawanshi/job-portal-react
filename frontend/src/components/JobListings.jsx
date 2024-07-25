import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import { ClimbingBoxLoader } from 'react-spinners';
const JobListings = ({ isHome = false }) => {
    //const jobListings=isHome?jobs.slice(0,3):jobs;
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(
        () => {
            const fetchJobs = async () => {
                const apiUrl = isHome
                    ? '/api/jobs?_limit=3'
                    : '/api/jobs';
                try {

                    const res = await fetch(apiUrl);
                    const data = await res.json();
                    setJobs(data);
                }
                catch (e) {
                    console.log('Error fetching data', error);
                } finally {
                    setLoading(false);
                }

            }
            fetchJobs();
        },
        []
    )
    return (
        <section class="bg-blue-50 px-4 py-10">
            <div class="container-xl lg:container m-auto">
                <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>

                {
                    loading ?
                        <ClimbingBoxLoader />
                        :
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </div>
                }




            </div>
        </section>
    )
}

export default JobListings