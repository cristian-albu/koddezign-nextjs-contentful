import client from "./contentfulClient";

export default async function offerQuery() {
  let data;

  try {
    data = await client.getEntries({
      content_type: "mainOffer",
      select: "fields.title,fields.mainImage,fields.description,fields.order",
    });
  } catch (err: any) {
    console.log(`Something went wrong: ${err.message}`, err);
  }

  if (data) {
    const offerItem: OfferList = data.items.map((e: any) => ({
      id: e.sys.id,
      title: e.fields.title,
      mainImage: `http:${e?.fields.mainImage?.fields?.file?.url}`,
      description: e.fields.description ? e.fields.description : "",
      order: e.fields.order,
    }));

    return offerItem;
  } else {
    const offerItem: OfferList = [
      {
        id: "",
        title: "",
        mainImage: "",
        description: "",
        order: 0,
      },
    ];

    return offerItem;
  }
}
