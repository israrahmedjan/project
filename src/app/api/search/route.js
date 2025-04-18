import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/dbconfig";

import { ObjectId } from "mongodb"; // Yeh import zaroori hai!

const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Replace '*' with your frontend domain for better security
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


export async function GET(request) {

    try {
        const { searchParams } = new URL(request.url);
        const productName = searchParams.get('search');
        const categoryName = searchParams.get('category');
        console.log("skdf",searchParams);
        const conn = await connectToDatabase();
        const productsCollection = conn.collection("Products");
        categoryName ?'Category.slug': 'jeans',

        // const searchQuery = ""; // Yeh woh search term hai jo aap dhoondhna chahte hain
        console.log("Today search", categoryName,productName);
       const data = await productsCollection
        .aggregate(
            [
              {
                $lookup: {
                  from: 'Categories',
                  localField: 'categoryId',
                  foreignField: '_id',
                  as: 'Category'
                }
              },
              {
                $lookup: {
                  from: 'ProductGallery',
                  localField: 'galleryId',
                  foreignField: '_id',
                  as: 'Gallery'
                }
              },
              { $unwind: { path: '$Category' } },
              {
                $match: {
                    $or: [
                        { "Category.slug": { $exists: false } },
                        { "Category.slug": "" },
                        { "Category.slug": categoryName.toString() },
                        { "name": { "$regex": productName, "$options": "i" } }
                      ],
                  
                }
              },
              {
                $project: {
                  productName: '$name',
                  productSlug: '$slug',
                  categoryName: '$Category.name',
                  categorySlug: '$Category.slug',
                  image: {
                    $arrayElemAt: ['$Gallery.image', 0]
                  }
                }
              }
            ],
            { maxTimeMS: 60000, allowDiskUse: true }
          ).toArray();
        console.log("My Data is",data);
        // let data;
        // if(selectedCategory != "")
        // {
        //     data = await productsCollection
        //     .aggregate(
        //         [
        //           { $unwind: { path: '$category_id' } },
        //           {
        //             $match: {
        //               name: { $regex: searchQuery, $options: 'i' },
        //               category_id: new ObjectId(
        //                 '679b73470fd7e8a14c83d268'
        //               )
        //             }
        //           }
        //         ],
        //      ).toArray();


        // }
        // else
        // {
        //  data = await productsCollection
        //     .aggregate(
        //         [
        //             {
        //                 $match: {
        //                     name: { $regex: searchQuery, $options: 'i' }
        //                 }
        //             }
        //         ],
        //     ).toArray(); // Convert the aggregation cursor to an array   
        // }


        //console.log("Dat:", data);

        if (data.length === 0) {
            // If data is empty, return a response indicating no products were found
            return NextResponse.json(
                { message: "No products available!", data: [] },
                { status: 404 }
            );
        }

        // If data is not empty, return the data
        return NextResponse.json(
            { message: "Products Available!", data },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error during aggregation:", error.message);

        // Return an error response if something went wrong
        return NextResponse.json(
            { message: "An error occurred while fetching products!", error: error.message },
            { status: 500 }
        );
    }


}

