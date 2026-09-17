
import { useState } from 'react';

const Title = () => {
    const [count, setCount] = useState(0);
    const [titre, setTitre] = useState("Ceci est un titre");

    return (
        <div>
            <h1>{titre}</h1>
            <p>Ceci est un composant React tout simple</p>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>click sur moi</button>
            <button onClick={() => setTitre("LE TITRE A CHANGÉ")}>click pour changer le titre</button>
        </div>
    );

}


export default Title;