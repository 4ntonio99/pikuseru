import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Obtener un producto por ID (GET)
export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  try {
    const product = await prisma.products.findUnique({
      where: { id: Number(id) },
    });

    if (!product) {
      return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error en GET /api/products/[id]:", error);
    return NextResponse.json({ error: "Error al obtener el producto" }, { status: 500 });
  }
}

// Actualizar un producto por ID (PUT)
export async function PUT(req: Request) {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
  
    if (!id) {
      return NextResponse.json({ error: "ID de producto no proporcionado" }, { status: 400 });
    }
  
    try {
      const body = await req.json();
      const { name, description, price, discount } = body;
  
      if (!name || !description || !price) {
        return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
      }
  
      const product = await prisma.products.update({
        where: { id: Number(id) },
        data: { name, description, price: Number(price), discount: Number(discount) || 0 },
      });
  
      return NextResponse.json(product);
    } catch (error) {
      console.error("Error en PUT /api/products/[id]:", error);
      return NextResponse.json({ error: "Error al actualizar el producto" }, { status: 500 });
    }
  }

// Eliminar un producto por ID (DELETE)
export async function DELETE(req: Request) {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
  
    if (!id) {
      return NextResponse.json({ error: "ID de producto no proporcionado" }, { status: 400 });
    }
  
    try {
      await prisma.products.delete({
        where: { id: Number(id)},
      });
  
      return NextResponse.json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
      console.error("Error en DELETE /api/products/[id]:", error);
      return NextResponse.json({ error: "Error al eliminar el producto" }, { status: 500 });
    }
  }
  
