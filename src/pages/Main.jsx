import React from "react";

import Hero from "../components/Hero";
import Ads from "../components/Ads/ads";
import BannerOne from "../components/Banners/BannerOne";
import BannerTwo from "../components/Banners/BannerTwo";
import News from "../components/News";

export default ({ data }) => {
    return <>
		<Hero/>

        <Ads />
		
		<BannerOne />
		
		<BannerTwo />

		{/*<News/>*/}

        <Ads />
    </>
}