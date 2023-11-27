import { NextResponse } from "next/server";
import connection from "@/libs/mongodb";
import Post from "@/models/Post";
export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connection();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
export async function DELETE(req, { params }) {
  const { id } = params;
  await connection();
  await Post.findByIdAndDelete(id);
  return NextResponse.json({ message: "post deleted" }, { status: 200 });
}
