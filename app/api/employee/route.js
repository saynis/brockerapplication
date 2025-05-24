import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req) {

    try {

        const { 
            name,
            mathernName,
            dateOfBirth,
            age,
            placeOfBirth,
            work,
            gender,
            imageUrl,
            idimageUrl,
            idNumber,
            phoneNumber,
            homeAddress,
            registrationNumber,
            region } = await req.json();

        const newEmployee = await prisma.employee.create({

            data: {
                name,
                mathernName,
                dateOfBirth,
                age,
                placeOfBirth,
                work,
                gender,
                imageUrl,
                idimageUrl,
                idNumber,
                phoneNumber,
                homeAddress,
                registrationNumber,
                region
            },
        });

       
        return NextResponse.json({employee: newEmployee}, { status: 201 });


    } catch (error) {
        console.error("Error in POST request:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });

    }

}


export async function GET(req) {
    try {
        const employees = await prisma.employee.findMany();
        return NextResponse.json({ employees }, { status: 200 });
    } catch (error) {
        console.error("Error in GET request:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}