// Route Handlers

export async function GET() {
    const data = {
        users: [
            "John", "Jane", "harry"
        ]
    };
    return Response.json(data);
}

export async function POST(request: Request) {
    const data = await request.json();
    const mockData = [
        {
            id: 1,
            name: 'harry'
        },
        {
            id: 2,
            name: 'john'
        },
        {
            id: 3,
            name: 'michael'
        }
    ];
    const newData = [ ...mockData ];
    newData.push(data);
    return Response.json({ message: "ユーザー追加処理を受け取りました", newUser: data, newData });
}

export async function DELETE(request: Request) {
    const data = await request.json();
    const mockData = [
        {
            id: 1,
            name: 'harry'
        },
        {
            id: 2,
            name: 'john'
        },
        {
            id: 3,
            name: 'michael'
        }
    ];
    const result = mockData.filter(user => user.id !== data.id);
    return Response.json({ message: "ユーザー削除処理を受け取りました", oldData: mockData, newData: result });
}
