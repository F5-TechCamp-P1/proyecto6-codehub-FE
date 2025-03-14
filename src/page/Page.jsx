import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Category from "../components/category/Category";
import "./Page.css";

const Page = () => {
    return (
        <div className="page-container">
            <Header />
            <main className="content">
                <Category />
            </main>
            <Footer />
        </div>
    );
};

export default Page;