import React, { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ScorePage = () => {
    const [score, setScore] = useState(0);
    const searchParams = useSearchParams();

    useEffect(() => {
        const scoreFromUrl = searchParams.get("score");
        if (scoreFromUrl) {
            setScore(parseInt(scoreFromUrl, 10));
        }
    }, [searchParams.get("score")]);

    return (
        <div>
            <h1>Votre score est de : {score}</h1>
        </div>
    );
};
