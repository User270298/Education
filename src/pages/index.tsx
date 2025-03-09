import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Образовательная Организация - Главная</title>
        <meta name="description" content="Качественное образование для вашего будущего" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="flex-grow">
        <Hero />
      </main>

      <Footer />
    </div>
  );
} 