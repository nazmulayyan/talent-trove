import Blog from "./Blog/Blog";
import ExperienceJobs from "./ExperienceJob/ExperienceJobs";
import FresherJobs from "./FrasherJob/FresherJobs";
import Header from "./Header/Header";
import MyProfile from "./MyProfile/MyProfile";
import TopItCompany from "./TopItCompany/TopItCompany";
import TopItCompanyWorldWide from "./TopItCompanyWorldWide/TopItCompanyWorldWide";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <FresherJobs></FresherJobs>
            <ExperienceJobs></ExperienceJobs>
            <TopItCompany></TopItCompany>
            <TopItCompanyWorldWide></TopItCompanyWorldWide>
            <MyProfile></MyProfile>
            <Blog></Blog>
        </div>
    );
};

export default Home;