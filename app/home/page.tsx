'use client';

import { useState, useEffect } from 'react';

export default function Home() {

    const [BRData, setBRData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/BeneRohlmann/data/bene.json'); // Chemin relatif au dossier public
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                const newData = await response.json();
                setBRData(newData);
            } catch (error) {
                console.error('Erreur de chargement des données :', error);
            }
        };

        fetchData();
    }, []);

    console.log(BRData)

    return (
        <div className="relative z-10">
            <div>
                {BRData ? (
                    <pre>{JSON.stringify(BRData, null, 2)}</pre>
                ) : (
                    <p>Chargement des données...</p>
                )}
            </div>
        </div>
    );
}
