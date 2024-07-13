import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import { Hero } from '../../components/HeroSection/Hero';
import Category from '../../components/catogery/Category';
import  HomePageProductCard  from "../../components/HomePageProductCard/HomePageProductCard";
import Track  from '../../components/Track/Track';
import  Testimonial  from '../../components/Testimonial/Testimonial';
import { Loader } from 'lucide-react';


export const HomePage = () => {

  return (
    <Layout>
      <Hero />
      <Category />
      <HomePageProductCard />
      <Track/>
      <Testimonial/>
      <Loader/>
    </Layout>
  );
}
