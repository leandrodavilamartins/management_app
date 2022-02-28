export async function getCompras(){
    const res = await db.collection('compras').get();
    const docs = await res.docs;
    const items =  docs.map( doc => {
        return doc.data();
    })
    return items;
}