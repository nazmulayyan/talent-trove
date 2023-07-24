import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExperienceJobs = () => {
    const [showAllJobs, setShowAllJobs] = useState(false);
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        // Fetch the data from data.json
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                // Filter fresher job data with title "fresher"
                const experiencesData = data.filter((job) => job.title === 'experienced');
                setExperiences(experiencesData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Function to handle the "See More Jobs" button click
    const handleSeeMoreJobs = () => {
        setShowAllJobs(!showAllJobs);
    };
    return (

        <div className="mt-28 w-11/12 mx-auto">
            <div >
                <h3 className="text-3xl menu font-bold uppercase text-center heading">Experience Jobs</h3>
                <p className="text-lg description font-semibold text-center">Take the Next Step. Discover Rewarding Experienced Professional Roles</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 mt-10">
                {/* Display fresher job data */}
                {experiences.slice(0, showAllJobs ? experiences.length : 6).map((job) => (
                    <div key={job.company} className="my-4 border p-4 flex justify-between description">
                        <div>
                            <h2 className="text-xl font-bold">{job.position}</h2>
                            <p className="text-lg">Location: {job.location}</p>
                            <p className="text-lg">Company: {job.company}</p>
                            <p className="mb-4">{job.description}</p>
                            <Link className="bg-orange-600 hover:bg-orange-500 text-white duration-200 px-4 py-3">Apply Now</Link>
                        </div>
                        <div>
                            <img src={job.logo} alt={`${job.company} Logo`} className="w-24 h-24 mx-auto my-4" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Show the "See More Jobs" button only if there are more than 6 jobs */}
            {experiences.length > 6 && (
                <div className="flex justify-center">
                    <Link className="bg-orange-600 hover:bg-orange-500 text-white duration-200 px-4 py-3" onClick={handleSeeMoreJobs}>
                        {showAllJobs ? 'Show Less Jobs' : 'See More Jobs'}</Link>
                </div>
            )}
        </div>
    );
};

export default ExperienceJobs;