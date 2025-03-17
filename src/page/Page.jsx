import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Category } from "../components/category/Category";
import { Resource } from "../components/resource/Resource";
import { Button } from "../components/button/Button";
import { FormsContainer } from "../components/forms_container/FormsContainer";
import { useCategories } from "../features/useCategories";
import { useForm } from "../context/FormContext";
import "./Page.css";
import { useResources } from "../features/useResources";
import { useEffect } from "react";

export const Page = () => {
    const { activeForm, setActiveForm, selectedCategory } = useForm();
    const { categories} = useCategories();
    const { resources, getCategoryById } = useResources();

    const handleCreateCategory = () => {
        setActiveForm("category")
    };
    const handleCreateResource = () => {
        setActiveForm("resource")
    };


    if (activeForm === "landing")
        return (
            <div className="page-container">
                {activeForm !== "landing" && <Header />}
                <main className="content">
                    <FormsContainer />
                </main>
                <Footer />
            </div>
        );
    if (activeForm === "resource" && resources.length > 0)
        return (
            <div className="page-container">
                <Header />
                <main className="content">
                    <Button label="recurso" handleOnClick={handleCreateResource} />
                    <h1>{selectedCategory}</h1>
                    {resources.length > 0 ? (
                        resources.map((resource) => (
                            <Resource key={resource.id} title={resource.title} fileUrl={resource.fileUrl} category={resource.category.name}/>
                        ))
                    ) : (
                        <p>No hay recursos disponibles.</p>
                    )}
                </main>
                <Footer />
            </div>
        );

    return (
        <div className="page-container">
            <Header />
            <main className="content">
                <Button label="categoría" handleOnClick={handleCreateCategory} />
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                        <Category key={index} id={1} title={category.title} handleOnClick={getCategoryById} />
                    ))
                ) : (
                    <p>No hay categorías disponibles.</p>
                )}
            </main>
            <Footer />
        </div>
    );
};