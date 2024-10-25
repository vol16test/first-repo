// APIにデータ削除リクエストを送るテスト用ファイル

"use client";

import { FormEvent } from "react";

interface User {
    id: number,
    name: string
}

interface DeleteResponse {
    message: string,
    oldData: User[],
    newData: User[]
}

async function deleteUser(userId: number): Promise<DeleteResponse> {
    const response = await fetch(`/api/users/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId })
    });
    return response.json();
}

export default function DeleteTest() {
    const handleDelete = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await deleteUser(2);
        console.log(response);
    }

    return (
        <>
            <h1>あいうえお</h1>
            <form onSubmit={handleDelete}>
                <button type="submit">削除</button>
            </form>
        </>
    )
}
