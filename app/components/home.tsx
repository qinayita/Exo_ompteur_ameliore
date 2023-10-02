import React, { useState, useEffect } from "react";
import Counter from "./counter";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Score } from './score';

export default function Home() {
    const [score, setScore] = useState(0);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get("score")) {
            setScore(parseInt(searchParams.get("score") as string, 10));
        }
    }, [searchParams.get("score")]);

    return (
        <div>
            <div className="flex justify-center text-3xl font-semibold bg-blue-200">Home page </div>
            <div className="flex justify-center mt-10">
                <Counter />
            </div>
            <div className="flex justify-center mt-10">
                <Score />
            </div>
        </div>
    );
}
