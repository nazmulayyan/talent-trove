const Register = () => {

    return (
        <div>

            <div className="relative">
                <img
                    className="banner object-cover w-full" src="https://i.ibb.co/1Tx5RVh/pexels-mikhail-nilov-8297441.jpg" alt="find job" />

                <div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-600 via-red-800 to-red-600 opacity-75 z-20 flex items-center text-center "
                >

                    <div className="w-11/12 mx-auto">

                        <h1
                            className="text-6xl uppercase menu text-white font-bold text-center mb-2">sing up </h1>

                        <div className="flex justify-center">
                            <form className="min-w-fit ">
                                <input className="outline-none py-2 px-2 block mb-4" type="text" name="name" placeholder="enter your name" />
                                <input className="outline-none py-2 px-2 block mb-4" type="email" name="email" placeholder="enter your email" />
                                <input className="outline-none py-2 px-2 block mb-4" type="password" name="email" placeholder="enter your email" />
                                {/* <button className="outline-none py-2 px-2 bg-white w-full text-orange-500 font-semibold capitalize text-lg" type="submit" value={}>sing up</button> */}
                                <input className="outline-none py-2 px-2 bg-white w-full text-orange-500 font-semibold capitalize text-lg" type="submit" value='sing up' />

                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;