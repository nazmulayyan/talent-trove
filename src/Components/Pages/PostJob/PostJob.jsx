import { Link } from "react-router-dom";

const PostJob = () => {
    return (
        <div>
            <div className="relative">
                <img
                    className="banner object-cover w-full" src="https://i.ibb.co/1Tx5RVh/pexels-mikhail-nilov-8297441.jpg" alt="find job" />

                <div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-600 via-red-800 to-red-600 opacity-75 z-20 flex items-center"
                >

                    <div className="w-11/12 mx-auto">

                        <h4
                            className="text-4xl uppercase menu text-white font-bold text-center mb-2">post your job
                        </h4>

                        <div className="flex justify-center">
                            <form>
                                <label className="text-white block mt-2" htmlFor="company">company name</label>
                                <input className="py-2 outline-none required: px-5 mb-2 mt-2 bg-white w-full" type="text" id="company" placeholder="Enter Your company Name" />

                                <label className="text-white block mt-2" htmlFor="location">location</label>
                                <input className="py-2 outline-none required: px-5 mb-2 mt-2 bg-white w-full" type="text" id="location" placeholder="Enter Your Location" /><br />

                                <label className="text-white block mt-2" htmlFor="position">job position</label>
                                <input className="py-2 outline-none required: px-5 mb-2 mt-2 bg-white w-full" type="text" id="position" placeholder="Enter Job Position" />

                                <label className="text-white block mt-2" htmlFor="companyLogo">company logo</label>
                                <input className="py-2 outline-none required: px-5 mb-2 mt-2 bg-white w-full" type="file" id="companyLogo" placeholder="Upload company Logo" /><br />

                                <button className="py-2 px-5 mb-2 mt-2 bg-white w-full" type="submit">post job</button>



                            </form>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostJob;