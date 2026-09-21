import { useState, useEffect } from 'react';

const Title = () => {
    const [count, setCount] = useState(0);
    const [titre, setTitre] = useState("Ceci est un titre");

    // Une seule fonction propre pour l'appel API
    const fetchTitle = async () => {
        try {
            const response = await fetch("https://testweb-f2sb.onrender.com/test/1");
            const data = await response.json();
            console.log(data);
            setTitre(data.title); // Utilisation de .title (JSONPlaceholder renvoie un objet avec "title")
        } catch (error) {
            console.error("Erreur lors de l'appel API :", error);
        }
    };

    // useEffect correctement configuré
    useEffect(() => {
        fetchTitle();
    }, []); // Tableau vide = s'exécute une seule fois au montage du composant

    return (
        <div>
            <h1>{titre}</h1>
            <p>Ceci est un composant React tout simple</p>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>click sur moi</button>
            <button onClick={() => setTitre("LE TITRE A CHANGÉ")}>click pour changer le titre</button>
        </div>
    );
};

export default Title;