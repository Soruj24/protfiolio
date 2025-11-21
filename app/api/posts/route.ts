import { NextRequest, NextResponse } from "next/server";
import BlogPost from "@/models/BlogPost";
import connectDB from "@/lib/mongodb-connect";

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const difficulty = searchParams.get("difficulty");
    const status = searchParams.get("status") || "published";
    const featured = searchParams.get("featured");
    const sort = searchParams.get("sort") || "latest";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search");

    // Build filter object
    const filter: Record<string, any> = {};

    if (category && category !== "all") {
      filter.category = { $regex: new RegExp(category, "i") };
    }

    if (difficulty && difficulty !== "all") {
      filter.difficulty = difficulty;
    }

    if (status && status !== "all") {
      filter.status = status;
    } else {
      filter.status = "published";
    }

    if (featured && featured !== "all") {
      filter.featured = featured === "featured";
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { tags: { $in: [new RegExp(search, "i")] } },
      ];
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Build sort object
    let sortObj: any = { publishedAt: -1 };
    switch (sort) {
      case "latest":
        sortObj = { publishedAt: -1 };
        break;
      case "popular":
        sortObj = { views: -1 };
        break;
      case "trending":
        // Custom sorting for trending (views + likes weight)
        sortObj = {
          $expr: { $add: ["$views", { $multiply: ["$likes", 10] }] },
        };
        break;
      default:
        sortObj = { publishedAt: -1 };
    }

    const posts = await BlogPost.find(filter)
      .populate("author", "name avatar role")
      .sort(sortObj)
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await BlogPost.countDocuments(filter);

    return NextResponse.json({
      success: true,
      data: posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const post = await BlogPost.create(body);
    await post.populate("author", "name avatar role");

    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create post" },
      { status: 400 }
    );
  }
}
