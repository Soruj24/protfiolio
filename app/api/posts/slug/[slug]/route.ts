import { NextRequest, NextResponse } from 'next/server'; 
import BlogPost from '@/models/BlogPost';
import connectDB from '@/lib/mongodb-connect';

interface Params {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    await connectDB();
    
    const post = await BlogPost.findOne({ slug: params.slug })
      .populate('author', 'name avatar role bio socialLinks');
    
    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }

    // Only increment views for published posts
    if (post.status === 'published') {
      post.views += 1;
      await post.save();
    }

    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}