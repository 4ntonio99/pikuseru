import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Obtener productos (GET)
export async function GET() {
  try {
    const products = await prisma.products.findMany();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener productos", details: error }, { status: 500 });
  }
}

// Crear un nuevo producto (POST)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, price, discount } = body;

    if (!name || !description || !price) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const product = await prisma.products.create({
      data: { name, description, price: Number(price), discount: Number(discount) || 0 },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error: unknown) {
    console.error("Error en POST /api/products:", error);
    return NextResponse.json({ error: "Error al crear el producto"}, { status: 500 });
  }
}


