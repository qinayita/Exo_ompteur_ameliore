"use client" ;
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const Score = () => {
    const [score, setScore] = useState(0);
    const router = useRouter();

    return (
        <div>
            <p>Score : {score}</p>
            <br />
            <button onClick={() => setScore(score + 1)}>+ 1</button>
            <br />
            <button onClick={() => setScore(score - 1)}>- 1</button>
            <br />
            <button onClick={() => router.back()}>Retour</button>
        </div>
    );
};