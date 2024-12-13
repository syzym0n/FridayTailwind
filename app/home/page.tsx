'use client';

import { useState, useEffect } from 'react';

import IllustrationCard from '@/components/beneRohlmann/illustrationCard';

interface BRDataItem {
    id: number;
    title: string;
    color: string;
    pic: string;
}

export default function Home() {
    

    const [BRData, setBRData] = useState<BRDataItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/BeneRohlmann/data/bene.json')
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
            <div className='flex gap-5'>
                {BRData ? (
                    BRData.map((item, id) => (
                        <IllustrationCard
                            key={item.id}
                            color={item.color}
                            picture={item.pic}
                        />
                    ))
                ) : (
                    <p>Loading</p>
                )}
            </div>
        </div>
    );
}
