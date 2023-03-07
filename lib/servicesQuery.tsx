import client from "./contentfulClient";

export default async function servicesQuery() {
  let data;

  try {
    data = await client.getEntries({
      content_type: "services",
      order: "fields.startingPrice",
    });
  } catch (err: any) {
    console.log(`Something went wrong: ${err.message}`, err);
  }

  if (data) {
    const serviceItem: ServiceList = data.items.map((e: any) => ({
      id: e.sys.id,
      title: e.fields.title,
      description: e.fields.description,
      features: e.fields.features,
      startingPrice: e.fields.startingPrice,
      image: `https:${e?.fields.image?.fields?.file?.url}`,
      services: e.fields.subServices
        ? e.fields.subServices.map((e: any) => ({
            title: e.fields.title,
            img: `https:${e.fields.technologyLogo.fields.file.url}`,
          }))
        : [],
    }));

    return serviceItem;
  } else {
    const serviceItem: ServiceList = [
      {
        id: ``,
        title: ``,
        description: ``,
        features: [],
        startingPrice: 0,
        image: ``,
        services: [],
      },
    ];

    return serviceItem;
  }
}
