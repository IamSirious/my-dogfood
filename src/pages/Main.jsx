import React from "react";

import Hero from "../components/Hero";
import Ads from "../components/Ads/ads";
import BannerOne from "../components/Banners/BannerOne";
import BannerTwo from "../components/Banners/BannerTwo";
import News from "../components/News";

import { Container } from 'react-bootstrap';

export default ({ data }) => {
    return <>
		<Hero/>
        <Container>
			<h1>Главная страница</h1>
		</Container>
        <Ads />
		
		<BannerOne />
		
		<BannerTwo />

		<News />

        <Ads />
    </>
}