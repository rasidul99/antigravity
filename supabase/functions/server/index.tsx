import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { v4 as uuidv4 } from "npm:uuid";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-c22efe7d/health", (c) => {
  return c.json({ status: "ok" });
});

// Create Order
app.post("/make-server-c22efe7d/orders", async (c) => {
  try {
    const order = await c.req.json();
    const id = order.id || uuidv4();
    const orderWithId = { ...order, id, createdAt: new Date().toISOString() };
    
    // Using KV store to save the order
    // Key pattern: order:{id}
    await kv.set(`order:${id}`, orderWithId);
    
    return c.json(orderWithId, 201);
  } catch (error) {
    console.error("Error creating order:", error);
    return c.json({ error: "Failed to create order" }, 500);
  }
});

// Get All Orders
app.get("/make-server-c22efe7d/orders", async (c) => {
  try {
    // Fetch all keys starting with "order:"
    const orders = await kv.getByPrefix("order:");
    // Sort by createdAt descending (newest first)
    orders.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return c.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return c.json({ error: "Failed to fetch orders" }, 500);
  }
});

Deno.serve(app.fetch);