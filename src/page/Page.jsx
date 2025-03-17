import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Category } from "../components/category/Category";
import { Resource } from "../components/resource/Resource";
import { Button } from "../components/button/Button";
import { FormsContainer } from "../components/forms_container/FormsContainer";
import { useCategories } from "../features/useCategories";
import { useForm } from "../contexts/FormContext";
import "./Page.css";

export const Page = () => {
    const { activeForm, setActiveForm, selectedCategory } = useForm();
    const { categories} = useCategories();


    const handleCreateCategory = () => {
        setActiveForm("category")
    };
    const handleCreateResource = () => {
        setActiveForm("resource")
    };


    if (activeForm === "landing")
        return (
            <div className="page-container">
                <Header />
                <main className="content">
                    <FormsContainer />
                </main>
                <Footer />
            </div>
        );
    if (activeForm === "resource")
        return (
            <div className="page-container">
                <Header />
                <main className="content">
                    <Button label="recurso" handleOnClick={handleCreateResource} />
                    <h1>{selectedCategory}</h1>
                    <Resource category={selectedCategory} />
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
                        <Category key={index} title={category.title} />
                    ))
                ) : (
                    <p>No hay categorías disponibles.</p>
                )}
            </main>
            <Footer />
        </div>
    );
};