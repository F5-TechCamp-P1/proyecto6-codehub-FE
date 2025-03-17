import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Category } from "../components/category/Category";
import { Button } from "../components/button/Button";
import { FormsContainer } from "../components/forms_container/FormsContainer";
import { useCategories } from "../features/useCategories";
import { useForm } from "../contexts/FormContext";
import "./Page.css";

export const Page = () => {
    const { activeForm } = useForm();
    const { categories} = useCategories();


    const handleCreateCategory = () => {
        console.log("Crear categoría");
    };

    if (activeForm)
        return (
            <div className="page-container">
                <Header />
                <main className="content">
                    <FormsContainer />
                </main>
                <Footer />
            </div>
        );

    return (
        <div className="page-container">
            <Header />
            <main className="content">
                        <Button type="addCategory" handleClick={handleCreateCategory} />
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