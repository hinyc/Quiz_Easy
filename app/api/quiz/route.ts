import { NextRequest } from "next/server";

const GET = async (req: NextRequest) => {
  const category = req.nextUrl.searchParams.get("category");
  console.log("Hello, world!", category);

  return new Response("Hello, world!!!");
};

export { GET };
