import request from "supertest";
import { createApp } from "../../start/express";

const app = createApp();

jest.setTimeout(15000);

test("status", async () => {
	const response = await request(app).get("/status");
	expect(response.status).toBe(200);
});
