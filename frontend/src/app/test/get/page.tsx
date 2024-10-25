// APIからデータをfetch(取得)するためのリクエストを送るテスト用ファイル

'use client';

import { useEffect, useState } from "react";

async function fetchUsers(): Promise<string[]> {
    const response = await fetch("/api/users");
    const data = await response.json();
    return data.users;
}

export default function GetTest() {
    const [users, setUsers] = useState<string[]>();

    useEffect(() => {
        const initialFunc = async () => {
            const data = await fetchUsers();
            console.log(data);
            setUsers(data);
        }
        initialFunc();
    }, []);

    return (
        <>
            <h1>データ一覧</h1>
            {users && users.map(user => (
                <p key={user}>{user}</p>
            ))}
        </>
    )
}
