/* eslint-disable @next/next/no-sync-scripts */
// Index Page
import React from 'react';

import Head from 'next/head';

import BannerComponent  from "../components/BannerComponent";
import  AboutComponent  from "../components/AboutComponent";
import  ContactComponent from "../components/ContactComponent";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>SchoolNet</title>
        <link rel="icon" href="/favicon.ico"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <BannerComponent></BannerComponent>
        <AboutComponent />
        <ContactComponent />
      </main>
      <footer>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin
        ></script>
      </footer>
    </div>
  );
}
