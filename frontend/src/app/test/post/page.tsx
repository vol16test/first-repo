// APIにデータ追加リクエストを送るテスト用ファイル

'use client';

import { FormEvent } from "react";

interface User {
    id: number,
    name: string
}

interface PostResponse {
    message: string,
    newUser: User,
    newData: User[]
}

async function createUser(userData: User): Promise<PostResponse> {
    const response = await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    return response.json();
}

export default function PostTest() {
    const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newData = { id: 4, name: 'tanaka' };
        const result = await createUser(newData);
        console.log(result);
    }

    return (
        <>
            <h1>あいうえお</h1>
            <form onSubmit={handleCreate}>
                <button type="submit">登録</button>
            </form>
        </>
    )
}
