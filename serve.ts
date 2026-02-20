const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    const file = Bun.file(`./dist${path}`);

    if (await file.exists()) {
      return new Response(file);
    }

    return new Response(Bun.file("./dist/index.html"), {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`Serving on http://localhost:${server.port}`);
