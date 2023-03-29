import React from 'react'
import Head from 'next/head'

import Link from '../components/link'
import Work from '../components/work'
import Service from '../components/service'
import Author from '../components/author'
import Statistic from '../components/statistic'
import Client from '../components/client'
import Item from '../components/item'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Prototype European Academy</title>
          <meta property="og:title" content="Prototype European Academy" />
        </Head>
        <div className="home-navbar">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-branding">
              <img
                alt="image"
                src="/playground_assets/logo.svg"
                className="home-logo"
              />
              <span className="home-company">Agncy</span>
            </div>
            <div className="home-items">
              <div className="home-links">
                <span className="nav-link">Work</span>
                <span className="nav-link">Services</span>
                <span className="nav-link">About</span>
                <span className="nav-link">Contact</span>
              </div>
              <button className="start-button button home-button">
                <span className="home-text04">Start a project</span>
              </button>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <button className="home-button1 button">
                <img
                  alt="image"
                  src="/playground_assets/hamburger.svg"
                  className="home-image"
                />
                <span className="home-text05">Start a project</span>
              </button>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav"
              >
                <div className="home-top">
                  <div className="home-branding1">
                    <img
                      alt="image"
                      src="/playground_assets/logo.svg"
                      className="home-logo1"
                    />
                    <span className="home-company1">SPYRL</span>
                  </div>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-items1">
                  <div className="home-links1">
                    <span className="nav-link">Work</span>
                    <span className="nav-link">Services</span>
                    <span className="nav-link">About</span>
                    <span className="nav-link">Contact</span>
                  </div>
                  <button className="start-button button home-button2">
                    <span className="home-text10">Start a project</span>
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>
        <header className="home-hero">
          <div className="home-header">
            <h1 className="home-title">Design the change you wanna see</h1>
            <p className="home-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod consectetur tempor incididunt.
            </p>
          </div>
        </header>
        <div className="home-video">
          <video
            src
            poster="/playground_assets/video-preview-1500w.png"
            className="home-video1"
          ></video>
        </div>
        <div className="home-description1">
          <div className="home-content">
            <div className="home-text11">
              <p className="home-paragraph">
                We are a team of aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat.
              </p>
              <p className="home-paragraph1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <button className="start-button button home-button3">
              <span className="home-text12">Start a project</span>
            </button>
          </div>
        </div>
        <div className="home-featured">
          <div className="home-header1">
            <h2 className="heading">Featured Work</h2>
            <div className="home-link">
              <Link
                Caption="100+ Projects"
                rootClassName="link-root-class-name"
              ></Link>
            </div>
          </div>
          <div className="home-list">
            <Work></Work>
            <Work
              Image="/playground_assets/work%20%232-1500w.png"
              Title="ZENG"
            ></Work>
            <Work
              Image="/playground_assets/work%20%233-1500w.png"
              Title="YORGU"
            ></Work>
          </div>
        </div>
        <div className="home-client">
          <p className="home-text13">
            Become a client aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat.
          </p>
          <button className="start-button button home-button4">
            <span className="home-text14">Start a project</span>
          </button>
        </div>
        <div className="home-services">
          <div className="home-header2">
            <h2 className="heading">SERVICES</h2>
          </div>
          <div className="home-grid">
            <Service rootClassName="service-root-class-name"></Service>
            <Service
              Title="Strategy"
              rootClassName="service-root-class-name1"
            ></Service>
            <Service
              Title="Marketing"
              rootClassName="service-root-class-name5"
            ></Service>
            <Service
              Title="Copywriting"
              rootClassName="service-root-class-name2"
            ></Service>
            <Service
              Title="UI / UX"
              rootClassName="service-root-class-name3"
            ></Service>
            <Service
              Title="Web Development"
              rootClassName="service-root-class-name4"
            ></Service>
          </div>
        </div>
        <div className="home-about">
          <div className="home-header3">
            <h2 className="home-company2">AGNCY</h2>
            <span className="home-description2">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </span>
            <Author></Author>
          </div>
          <div className="home-statistics">
            <button className="start-button button home-button5">
              <span className="home-text15">Join our team</span>
            </button>
            <div className="home-statistic-list">
              <Statistic rootClassName="statistic-root-class-name3"></Statistic>
              <Statistic
                Value="60"
                Caption="Awards"
                rootClassName="statistic-root-class-name"
              ></Statistic>
              <Statistic
                Value="15K"
                Caption="Monthly Visits"
                rootClassName="statistic-root-class-name4"
              ></Statistic>
              <Statistic
                Value="70+"
                Caption="People on board"
                rootClassName="statistic-root-class-name1"
              ></Statistic>
              <Statistic
                Value="300+"
                Caption="Finished projects"
                rootClassName="statistic-root-class-name5"
              ></Statistic>
              <Statistic
                Value="1M"
                Caption="Active Users"
                rootClassName="statistic-root-class-name2"
              ></Statistic>
            </div>
          </div>
          <div className="home-clients">
            <div className="home-header4">
              <h2 className="home-title3 heading">Our Clients</h2>
            </div>
            <div className="home-grid1">
              <div className="home-column">
                <Client
                  Avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvdHJhaXR8ZW58MHx8fHwxNjY5MDYxMjQx&amp;ixlib=rb-4.0.3&amp;h=200"
                  Mention="@zeng"
                  rootClassName="client-root-class-name"
                ></Client>
                <Client
                  Quote="“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“"
                  Author="Coco White"
                  Avatar="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  Mention="@white_co"
                  rootClassName="client-root-class-name1"
                ></Client>
              </div>
              <div className="home-column1">
                <Client
                  Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                  Author="Jennifer Marle"
                  Avatar="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  Mention="@motech"
                ></Client>
                <Client
                  Quote="“Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaduis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                  Author="Maria Martinez"
                  Avatar="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  Mention="@yorgu.official"
                ></Client>
              </div>
            </div>
          </div>
          <div className="home-client-list">
            <div className="home-header5">
              <h2 className="home-title4 heading">Client list</h2>
            </div>
            <div className="home-row">
              <span className="home-text16">2022</span>
              <div className="home-list1">
                <Item></Item>
                <Item
                  Tags="Webdevelopment / Marketing"
                  Title="Aliquaduis"
                ></Item>
                <Item Tags="Strategy / Copywriting" Title="Consequat"></Item>
                <Item Tags="UI / UX" Title="Commodo"></Item>
                <Item Tags="Webdevelopment" Title="Veniam"></Item>
                <Item Tags="Webdevelopment / Marketing" Title="Fugiat"></Item>
              </div>
            </div>
            <div className="home-row1">
              <span className="home-text17">2021</span>
              <div className="home-list2">
                <Item></Item>
                <Item
                  Tags="Webdevelopment / Marketing"
                  Title="Aliquaduis"
                ></Item>
                <Item Tags="Strategy / Copywriting" Title="Consequat"></Item>
              </div>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <div className="home-information">
            <div className="home-details">
              <div className="home-header6">
                <div className="home-branding2">
                  <img
                    alt="image"
                    src="/playground_assets/logo.svg"
                    className="home-logo2"
                  />
                  <span className="home-company3">AGNCY</span>
                </div>
                <div className="home-location">
                  <span className="home-caption">Office</span>
                  <span className="home-value">
                    132, My Street, Bigtown BG23 4YZUnited States
                  </span>
                </div>
              </div>
              <div className="home-location1">
                <span className="home-caption1">Let&apos;s talk</span>
                <span className="home-value1">sayhello@agncy.address</span>
              </div>
              <button className="home-button6 start-button button">
                <span className="home-text18">Start a project</span>
              </button>
            </div>
            <div className="home-links2">
              <span className="social">Instagram</span>
              <span className="social">Linkedin</span>
              <span className="social">Twitter</span>
              <span className="social">Dribbble</span>
              <span className="social">Behance</span>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/footer-1400w.png"
            className="home-image1"
          />
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            background-color: #151515;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-halfunit);
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo {
            width: 50px;
            height: 50px;
            object-fit: cover;
            transition: 0.3s;
          }
          .home-logo:hover {
            transform: rotate(360deg);
          }
          .home-company {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
          }
          .home-items {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-text04 {
            color: #ffffff;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-button1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            padding-top: 20px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 20px;
            background-color: #235536;
          }
          .home-image {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-text05 {
            color: #ffffff;
            display: flex;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #151515;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-branding1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo1 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .home-company1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
          }
          .home-menu-close {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .home-items1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-links1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text10 {
            color: #ffffff;
          }
          .home-hero {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: #151515;
          }
          .home-header {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: 150px;
          }
          .home-title {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 128px;
            max-width: 895px;
            font-weight: normal;
            line-height: 115px;
            text-transform: uppercase;
          }
          .home-description {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-video {
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-video1 {
            flex: 1;
            width: 100%;
          }
          .home-description1 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-end;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #151515;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            border-top-width: 1px;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text11 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph {
            font-size: 32px;
            line-height: 48px;
          }
          .home-paragraph1 {
            font-size: 32px;
            line-height: 48px;
          }
          .home-text12 {
            color: #ffffff;
          }
          .home-featured {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            border-color: #151515;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-link {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-list {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-client {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #151515;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-text13 {
            font-size: 32px;
            max-width: 900px;
            line-height: 48px;
          }
          .home-text14 {
            color: #ffffff;
          }
          .home-services {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #151515;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-bottom-width: 1px;
          }
          .home-grid {
            flex: 1;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: auto auto auto;
          }
          .home-about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #151515;
          }
          .home-header3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-company2 {
            color: rgb(255, 255, 255);
            font-size: 80px;
            font-style: normal;
            font-weight: 500;
            line-height: 72px;
          }
          .home-description2 {
            color: #ffffff;
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-statistics {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: 200px;
            justify-content: space-between;
          }
          .home-text15 {
            color: rgb(255, 255, 255);
          }
          .home-statistic-list {
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            grid-template-columns: auto auto;
          }
          .home-clients {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-title3 {
            color: rgb(255, 255, 255);
          }
          .home-grid1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-column {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-direction: column;
          }
          .home-column1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-direction: column;
          }
          .home-client-list {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-title4 {
            color: rgb(255, 255, 255);
          }
          .home-row {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text16 {
            color: #999999;
            font-size: 24px;
            line-height: 36px;
          }
          .home-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-row1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text17 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .home-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-footer {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-information {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 60px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-details {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header6 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-branding2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo2 {
            width: 50px;
            filter: brightness(0) saturate(100%) invert(27%) sepia(9%)
              saturate(2615%) hue-rotate(90deg) brightness(92%) contrast(87%);
            height: 50px;
            object-fit: cover;
          }
          .home-company3 {
            color: rgb(21, 21, 21);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            text-transform: uppercase;
          }
          .home-location {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption {
            color: #151515;
            font-size: 24px;
            line-height: 36px;
          }
          .home-value {
            color: rgb(21, 21, 21);
            font-size: 32px;
            max-width: 560px;
            font-style: normal;
            font-weight: 500;
            line-height: 48px;
          }
          .home-location1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption1 {
            color: rgb(21, 21, 21);
            font-size: 24px;
            line-height: 36px;
          }
          .home-value1 {
            color: rgb(21, 21, 21);
            font-size: 32px;
            max-width: 560px;
            font-style: normal;
            font-weight: 500;
            line-height: 48px;
          }
          .home-button6 {
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-text18 {
            color: rgb(255, 255, 255);
          }
          .home-links2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image1 {
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              padding-top: var(--dl-space-space-unit);
            }
            .home-button {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text04 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-image {
              width: 18px;
              height: 18px;
              display: flex;
            }
            .home-text05 {
              display: none;
            }
            .home-button2 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text10 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-header {
              height: 100%;
              padding-bottom: var(--dl-space-space-sixunits);
              justify-content: center;
            }
            .home-title {
              font-size: 40px;
              line-height: 36px;
            }
            .home-description {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description1 {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-text11 {
              gap: var(--dl-space-space-unit);
            }
            .home-paragraph {
              font-size: 18px;
              line-height: 27px;
            }
            .home-paragraph1 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-button3 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text12 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-header1 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-link {
              display: none;
            }
            .home-client {
              padding-top: var(--dl-space-space-threeunits);
              border-color: transparent;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text13 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-button4 {
              font-size: 16px;
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text14 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-services {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-header2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-top-width: 1px;
            }
            .home-grid {
              display: flex;
              grid-gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-about {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-header3 {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-company2 {
              font-size: 30px;
              line-height: 27px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-statistics {
              gap: var(--dl-space-space-fourunits);
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-button5 {
              font-size: 16px;
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text15 {
              font-style: normal;
              font-weight: 500;
            }
            .home-statistic-list {
              width: 100%;
              grid-gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-clients {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-header4 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-grid1 {
              grid-gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-client-list {
              gap: var(--dl-space-space-threeunits);
            }
            .home-header5 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-row {
              flex-direction: column;
            }
            .home-text16 {
              font-size: 10px;
              line-height: 15px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-list1 {
              width: 100%;
            }
            .home-row1 {
              flex-direction: column;
            }
            .home-text17 {
              font-size: 10px;
              line-height: 15px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-list2 {
              width: 100%;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-information {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: flex-start;
            }
            .home-details {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-logo2 {
              width: 25px;
              height: 25px;
            }
            .home-company3 {
              font-size: 15px;
              line-height: 18px;
            }
            .home-caption {
              font-size: 14px;
              line-height: 21px;
            }
            .home-value {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-value1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-button6 {
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text18 {
              font-style: normal;
              font-weight: 500;
            }
            .home-links2 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: 320px;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-logo {
              width: 36px;
              height: 36px;
            }
            .home-company {
              font-size: 18px;
              line-height: 20px;
            }
            .home-items {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button1 {
              padding: 12px;
            }
            .home-image {
              width: 14px;
              height: 14px;
            }
            .home-header {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
          }
          @media (max-width: 479px) {
            .home-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
