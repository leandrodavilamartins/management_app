export async function getVendas(){
    const res = await db.collection('vendas').get();
    const docs = await res.docs;
    const items =  docs.map( doc => {
        return doc.data();
    })
    return items;
}