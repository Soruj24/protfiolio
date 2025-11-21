import { NextRequest, NextResponse } from 'next/server';
import BlogPost from '@/models/BlogPost';
import connectDB from '@/lib/mongodb-connect';

interface Params {
  params: {
    id: string;
  };
}

export async function POST(request: NextRequest, { params }: Params) {
  try {
    await connectDB();
    
    const post = await BlogPost.findById(params.id);
    
    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }

    post.likes += 1;
    await post.save();

    return NextResponse.json({ 
      success: true, 
      data: { likes: post.likes } 
    });
  } catch (error) {
    console.error('Error liking post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to like post' },
      { status: 500 }
    );
  }
}