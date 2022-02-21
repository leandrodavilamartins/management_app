export async function getFormulas(){
    const res = await db.collection('formulas').get();
    const docs = await res.docs;
    const items =  docs.map( doc => {
        return doc.data();
    })
    return items;
}
