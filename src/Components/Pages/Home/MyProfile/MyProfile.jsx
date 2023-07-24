import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";

const MyProfile = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        // Fetch the data from data.json
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                // Filter fresher job data with title "fresher"
                const profileData = data.filter((job) => job.title === 'profile');
                setProfile(profileData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="mt-28 w-11/12 mx-auto">
            <div >
                <h3 className="text-3xl menu font-bold uppercase text-center heading">My Profile</h3>
                <p className="text-lg description font-semibold text-center">My Professional Identity! Showcase My Personal Profile</p>
            </div>
            <div className="grid lg:grid-cols-12 gap-6 mt-10 items-center">
                <div className="lg:col-span-4 col-span-6">
                    {profile.map((pro) => (
                        <div key={pro.profile} className="description">
                            <div >
                                <div className="col-span-4 ">
                                    <div className="relative overflow-hidden">
                                        <img src={pro.videoImage} alt="" />
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-600 via-red-800 to-red-600 opacity-50 z-20 justify-center flex items-center">
                                            <Link to='https://drive.google.com/file/d/1FZA9TRK8x7957K6RYnBZULaIz_cz-fiG/view?usp=sharing' target='_blank' className="text-5xl text-white">
                                                <FaCirclePlay />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:col-span-8 col-span-6">
                    <div className="grid md:grid-cols-2 gap-6">

                        {profile.map((pro) => (
                            <div key={pro.profile} className="description">
                                <div className="border pb-2">
                                    <img className=" w-full border-b h-52" src={pro.image} alt="" />
                                    <h4 className="mt-3 px-2 text-lg font-semibold">{pro.name}</h4>
                                    <div className="flex justify-between px-2">
                                        <Link className="underline text-orange-500 hover:text-black" to={pro.liveLink} target="_blank">liveLink</Link>
                                        <Link className="underline text-orange-500" to={pro.clientLink}>Github Client</Link>
                                        <Link className="underline text-orange-500" to={pro.serverLink}>Github Server</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;