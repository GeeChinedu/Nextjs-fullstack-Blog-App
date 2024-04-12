import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
    const {slug} = params
    try {

        connectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {

        console.log(error);
        throw new Error('something went wrong')
    }
};

export const DELETE = async (request, {params}) => {
    const {slug} = params
    try {

        connectToDb();
      await Post.deleteOne({slug});
        return NextResponse.json('Post has been deleted');
    } catch (error) {

        console.log(error);
        throw new Error('failed to delete post')
    }
};