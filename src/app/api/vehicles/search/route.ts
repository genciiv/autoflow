import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const plate = searchParams.get("plate");

  if (!plate) {
    return NextResponse.json([]);
  }

  const vehicles = await db.vehicle.findMany({
    where: {
      plateNumber: {
        contains: plate.toUpperCase(),
        mode: "insensitive",
      },
    },
    include: {
      customer: true,
    },
  });

  return NextResponse.json(vehicles);
}