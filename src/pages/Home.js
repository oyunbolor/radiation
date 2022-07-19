import React from "react";
import Layout from "../components/Layout";
import logo from '../logo.svg';

export default function Home() {
    return (
        <Layout>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Гадаад орчны цацрагийн түвшний мэдээллийн сан
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </Layout>
    );
}
