import { error } from 'console';
import { NextResponse } from 'next/server';

async function GET(request : Request, {params}: {params : {username : string}}){
    const {username} = params;
    const response = await fetch(`https://api.github.com/users/${username}`);

    if(response.ok){
        const data = await response.json();
        console.log(`Status ${response.status}`);
        return NextResponse.json(data);
    }
    else{
        return NextResponse.json({error : 'User Not Found'}, {status : response.status});
    }
}