"use client";
import React, { useState } from "react";
import Counter from "./components/counter";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from "next/link";
import { Score } from './components/score';
import Home from "./components/home";

function HomePage() {
    const router = useRouter();

    return (
        <div>
            <div className="flex justify-center text-3xl font-semibold bg-blue-200">Home page </div>
            <div className="flex justify-center mt-10">
                <Counter />
            </div>
            <div className="flex justify-center mt-10">
                <Link href="/score">
                    <a>Go to score page</a>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;










