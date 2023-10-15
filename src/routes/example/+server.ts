import { json } from '@sveltejs/kit';

export async function GET() {
	return json({ data: 'my data' });
}
