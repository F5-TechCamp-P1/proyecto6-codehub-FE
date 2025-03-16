export const fetchData = async (url, options = {}) => {
    try {
        if (!url) throw new Error('URL no proporcionada');

        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
