"use client";

import Link from "next/link";
import React from "react";

const Errorpage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-slate-50 text-gray-900">
            <h1 className="text-8xl font-bold">Errot</h1>
            <p className="text-4xl font-medium">Unexpected Error Occurred</p>
            <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">Go back page</Link>
        </div>
    )
}

export default Errorpage;
