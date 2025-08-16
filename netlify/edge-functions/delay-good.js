export default async (request, context) => {
  // 1) Delay the first byte ~1.87s
  await new Promise(r => setTimeout(r, 1870));

  // 2) Get original static file
  const originRes = await context.next();
  const bodyText = await originRes.text();

  // 3) Send body in 2 chunks to add ~400ms to overall completion (Load ~ 2.27s total)
  const encoder = new TextEncoder();
  const cut = Math.max(1, Math.floor(bodyText.length * 0.98));
  const chunks = [encoder.encode(bodyText.slice(0, cut)), encoder.encode(bodyText.slice(cut))];

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(chunks[0]);
      setTimeout(() => { controller.enqueue(chunks[1]); controller.close(); }, 400);
    }
  });

  return new Response(stream, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" }
  });
};
