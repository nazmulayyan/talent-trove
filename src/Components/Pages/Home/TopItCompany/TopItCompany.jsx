import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopItCompany = () => {
    const [company, setCompany] = useState([]);

    useEffect(() => {
        // Fetch the data from data.json
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                // Filter company data with title "company"
                const companyData = data.filter((job) => job.title === 'company');
                setCompany(companyData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="mt-28 w-11/12 mx-auto">
            <div>
                <h3 className="text-3xl menu font-bold uppercase text-center heading">Top IT Companies</h3>
                <p className="text-lg description font-semibold text-center">Innovative Leaders! Explore the Top IT Companies Shaping the Tech Industry</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mt-10">
                {/* Display company data */}
                {company.map((comp) => (
                    <div key={comp.company} className="my-4 border p-4 description">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-bold">{comp.company}</h2>
                                <p className="text-lg">Location: {comp.location}</p>
                            </div>
                            <div>
                                <img src={comp.logo} alt={`${comp.company} Logo`} className="w-24 h-24 mx-auto my-4" />
                            </div>
                        </div>

                        <p className="text-justify companyD mb-4">{comp.description}</p>
                        <Link className="bg-orange-600 hover:bg-orange-500 text-white duration-200 px-4 py-3">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopItCompany;
