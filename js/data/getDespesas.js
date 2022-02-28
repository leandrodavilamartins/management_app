export async function getDespesas(){
    const res = await db.collection('despesas').get();
    const docs = await res.docs;
    const items =  docs.map( doc => {
        return doc.data();
    })
    return items;
}