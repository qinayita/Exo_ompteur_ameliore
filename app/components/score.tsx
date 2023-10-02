"use client" ;
import React, { useState } from "react";
import { useNavigation } from "next";

const Score = () => {
    const [score, setScore] = useState(0);
    const navigation = useNavigation();

    return (
        <div>
            <p>Score : {score}</p>
            <br />
            <button onClick={() => setScore(score + 1)}>+ 1</button>
            <br />
            <button onClick={() => setScore(score - 1)}>- 1</button>
            <br />
            <button onClick={() => navigation.back()}>Retour</button>
        </div>
    );
};

export default Score;



