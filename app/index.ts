import { SQL } from "bun"

const connectionString = process.env.DATABASE_URL || "postgres://postgres:password@localhost:5432/database"

const sql = new SQL(connectionString)

Bun.serve({
    port: 3000,
    routes: {
        "/": {
            async GET() {
                return new Response("OK")
            }
        },
        "/users": {
            async GET() {
                const users = await sql`SELECT * FROM users`
                return Response.json(users)
            },

            async POST(req) {
                const { name } = await req.json()
                const [user] = await sql`INSERT INTO USERS (name) VALUES (${name}) RETURNING *`
                return Response.json(user, { status: 201 })
            }
        },

        "/users/:id": {
            async DELETE(req) {
                const { id } = req.params
                await sql`DELETE FROM users WHERE id = ${id}`
                return new Response(null, { status: 204 })
            }

        }
    }
})
