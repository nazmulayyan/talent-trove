const Header = () => {
    return (
        <div>
            <div className="relative">
                <img
                    className="banner object-cover w-full" src="https://i.ibb.co/1Tx5RVh/pexels-mikhail-nilov-8297441.jpg" alt="find job" />

                <div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-600 via-red-800 to-red-600 opacity-75 z-20 flex items-center"
                >

                    <div className="w-11/12 mx-auto">

                        <h1
                            className="text-6xl uppercase menu text-white font-bold text-center mb-2">Find Your Dream Job </h1>

                        <form className="min-w-fit">

                            <div className="py-3 px-5 bg-white w-fit mx-auto text-lg font-semibold description">

                                <input className="md:w-fit w-full outline-none md:border-b-0 border-b-2 border-black md:mb-0 mb-3" type="text" name="jobName" placeholder="keyword" />

                                <select
                                    name="jobType" className="outline-none md:ml-5 md:border-l-2 md:mr-0 mr-2 border-black px-2"
                                >

                                    <option value="">Category</option>
                                    <option value="full_time">Full Time</option>
                                    <option value="part_time">Part Time</option>
                                    <option value="freelance">Freelance</option>
                                    <option value="internship">Internship</option>
                                    <option value="temporary">Temporary</option>

                                </select>

                                <select
                                    name="location" className="outline-none md:ml-5 border-l-2 border-black px-2"
                                >
                                    <option value="">Location</option>
                                    <option value="full_time">United States</option>
                                    <option value="part_time">Canada</option>
                                    <option value="freelance">United Kingdom</option>
                                    <option value="internship">Germany</option>
                                    <option value="temporary">Australia</option>
                                    <option value="temporary">Singapore</option>
                                    <option value="temporary">Sweden</option>

                                </select>
                            </div>

                            <div className="flex justify-center mt-2 ">
                                <button
                                    className="bg-white px-4 text-lg font-semibold description py-3 text-center w-1/4" type="submit"
                                >search</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
