import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Category from "../components/category/Category";
import Button from "../components/button/Button";
import Form from "../components/form/Form";
import fetchData from "../services/dataService";  // Asegúrate de que esta función está definida
import "./Page.css";

const Page = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [categories, setCategories] = useState([]);

    const handleCreateCategory = () => {
        console.log("Crear categoría");
    };

    useEffect(() => {
        const loadData = async () => {
            const userData = await fetchData();
            setIsLogged(userData.isAuthenticated);
            setCategories(userData.categories || []);
        };
        loadData();
    }, []);

    return (
        <div className="page-container">
            <Header />
            <main className="content">
                {!isLogged ? (
                    <Form type="login" onSubmit={() => console.log("User authenticated")} />
                ) : (
                    <>
                        <Button type="addCategory" handleClick={handleCreateCategory} />
                        {categories.length > 0 ? (
                            categories.map((category, index) => (
                                <Category key={index} title={category.title} />
                            ))
                        ) : (
                            <p>No hay categorías disponibles.</p>
                        )}
                        <Form type="upload" onSubmit={(data) => console.log("Content uploaded:", data)} />
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Page;
