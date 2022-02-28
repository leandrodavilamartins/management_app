export async function getFarmacia(){
    const res = await db.collection('farmácia').get();
    const docs = await res.docs;
    const items =  docs.map( doc => {
        return doc.data();
    })
    return items;
}