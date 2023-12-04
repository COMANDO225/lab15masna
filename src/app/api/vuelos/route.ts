import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
	const vuelos = await fetch(
		"https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=01/11/2020&dateTo=30/11/2020&partner=picky&v=3"
	).then((res) => res.json());

	return NextResponse.json(vuelos);
}
