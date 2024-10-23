import Link from "next/link";

const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
            <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-10 space-y-8">
                <h1 className="text-5xl font-bold text-center text-cyan-700">Title</h1>
                <div className="space-y-6">
                    <p className="text-2xl text-gray-700 text-center">
                        軽い説明が入る軽い説明が入る軽い説明が入る
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 pl-4">
                        <li>特徴など特徴など特徴など特徴など特徴など</li>
                        <li>特徴など特徴など特徴など特徴など特徴など</li>
                        <li>特徴など特徴など特徴など特徴など特徴など</li>
                        <li>特徴など特徴など特徴など特徴など特徴など</li>
                    </ul>
                </div>

                <div className="text-center pt-4">
                    <Link
                        href="/login"
                        scroll={false}
                        className="inline-block bg-indigo-600 text-white text-lg font-semibold py-3 px-8 rounded-full hover:scale-105 hover:bg-indigo-700 duration-300"
                    >
                        はじめる
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Home;
