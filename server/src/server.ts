import fastify from "fastify"

const app = fastify()

app.get("/hello", () => {
  return "Alles in Ordnung bis jetzt"
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀 HTTP server running on http://localhost:3333")
  })
