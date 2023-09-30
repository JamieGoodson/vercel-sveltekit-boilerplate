import { json } from '@sveltejs/kit';
import { kv } from '@vercel/kv';

export async function GET() {
	const data = await kv.get('testKey');

	return json({ data });
}
