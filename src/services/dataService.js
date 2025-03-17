export const fetchData = async (url, options = {}) => {
    try {
        if (!url) throw new Error('URL no proporcionada');

        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        const data = await response.json();  
        console.log(" Respuesta completa de la API:", data);

        return data;  
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
