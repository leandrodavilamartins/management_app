export async function getEstoque(){
    const res = await db.collection('estoque').get();
    const docs = await res.docs;
    const items =  docs.map( doc => {
        return doc.data();
    })
    return items;
}