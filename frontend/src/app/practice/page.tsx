'use client';

import { useState } from "react";

const PracticePage = () => {
    console.log('PracticePageコンポーネント(関数)がレンダーされました');

    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(previous => previous + 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    const handleMinus = () => {
        setCount(previous => previous - 1);
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-3">
            <div className="border border-indigo-600 p-14 shadow-lg rounded-lg">
                <h1 className="text-4xl mb-10 text-center">練習ページ</h1>
                <div className="space-x-2">
                    <button
                        onClick={handlePlus}
                        className="bg-indigo-400 rounded-lg p-3 text-lg hover:bg-indigo-500"    
                    >
                        プラス
                    </button>
                    <button
                        onClick={handleMinus}
                        className="bg-indigo-400 rounded-lg p-3 text-lg hover:bg-indigo-500"
                    >
                        マイナス
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-indigo-400 rounded-lg p-3 text-lg hover:bg-indigo-500"
                    >
                        リセット
                    </button>
                </div>
                <p className="text-2xl mt-4 text-center">count: {count}</p>
            </div>
        </div>
    )
}

export default PracticePage;
