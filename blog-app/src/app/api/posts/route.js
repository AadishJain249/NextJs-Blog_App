import connection from "@/libs/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  const url = new URL(req.url);
  const name = url.searchParams.get("username");
  await connection();
  const post = await Post.find(name);
  return NextResponse.json({ post });
}
export async function POST(req, res) {
  const { title, desc,img,content,username } = await req.json();
  console.log("aadish");
  await connection();
  await Post.create({ title, desc,img,content,username});
  return NextResponse.json({ message: "Post Created" }, { status: 201 });
}