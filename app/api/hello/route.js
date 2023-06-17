export async function GET(request) {
    const users = [
        { id:1, name: 'John'},
        { id:2, name: 'John'},
        { id:3, name: 'John'},
    ]
    return new Response(JSON.stringify(users))
}