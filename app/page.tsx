"use client";
import React, { useState } from "react";
import Counter from "./components/counter";
import { useNavigation } from "next";
import Link from "next/link";
import Score from "./components/score";
import Home from "./components/home";

function HomePage() {
    const navigation = useNavigation();

    if (navigation.query.score) {
        return <Score score={navigation.query.score} />;
    }

    return (
        <div>
            <div className="flex justify-center text-3xl font-semibold bg-blue-200">Home page </div>
            <div className="flex justify-center mt-10">
                <Counter />
            </div>
        </div>
    );
}

export default HomePage;










