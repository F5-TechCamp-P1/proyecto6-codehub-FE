export const fetchData =async () => {
    try {
        const response = await fetch();
        if (!response.ok) throw new Error('Error al obtener los datos');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export default fetchData;