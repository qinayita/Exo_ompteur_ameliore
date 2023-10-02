"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ScorePage } from './scorePage';

export default function Counter() {
    const [counterValue, setCounterValue] = useState(0);
    const router = useRouter();

    function handleAdd() {
        setCounterValue(counterValue + 1);
    }

    function handleSub() {
        setCounterValue(counterValue - 1);
    }

    function handleValidate() {
        const newUrl = `/score/${counterValue}`;
        router.push(newUrl);
    }

    return (
        <div>
            <p>Counter Value is : {counterValue}</p>
            <br />
            <br />
            <button className="w-28 h-10 bg-blue-500 text-white " onClick={handleAdd}>
                + 1
            </button>
            <br />
            <br />
            <button className="w-28 h-10 bg-red-500 text-white " onClick={handleSub}>
                - 1
            </button>
            <br />
            <br />
            <button
                className="w-52 h-10 mx-2 bg-green-200"
                onClick={handleValidate}
            >
                Valider
            </button>
        </div>
    );
}