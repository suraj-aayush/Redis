const client = require('./client')

async function init() {

    await client.set("msg:4", "Hii this code belongs to vs code" );

    const result = await client.get("user:1");
    console.log(`The user is : ${result}`);

    const film1 = await client.get("film:1");
    console.log(`The Movie is : ${film1}`);
    
}

init();