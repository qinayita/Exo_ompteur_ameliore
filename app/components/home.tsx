import React, { useState, useEffect } from "react";
import Counter from "./counter";
import { useNavigation } from "next";



export default function Home() {
    const [score, setScore] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        if (navigation.query.score) {
            setScore(parseInt(navigation.query.score, 10));

    return (
        <div>
            <div className="flex justify-center text-3xl font-semibold bg-blue-200">Home page </div>
            <div className="flex justify-center mt-10">
                <Counter />
            </div>
            <div className="flex justify-center mt-10">
                <Score score={score} />
            </div>
        </div>
    );
}