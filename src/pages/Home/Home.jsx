import react from "react";
import Feature from "./Features/Feature";
import HeroHeder from "./HeroHeder/HeroHeder";
import HeroText from "./HeroText/HeroText";
import Weekly from "./Weekly/Weekly"
import css from "./Home.module.css"
import TopCollection from "./TopCollection/TopCollection";
import Banner from "./Banner/Banner";

const Home = () => {

    return(
        <div>
            <div className={css.block}>
            <div>
            <HeroText/>
            <Feature/>
            </div>
            <HeroHeder/>
            </div>
            <Weekly/>
            <TopCollection/>
            <Banner/>
        </div>
    )
}

export default Home;