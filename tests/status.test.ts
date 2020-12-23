import request from 'supertest';
import { createApp } from '../src/loaders/app'

const app = createApp();

jest.setTimeout(15000);

test('status', async () => {
    const response = await request(app).get('/status');
    expect(response.status).toBe(200);
});
