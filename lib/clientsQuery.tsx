import client from "./contentfulClient";

export default async function clientsQuery() {
  let data;

  try {
    data = await client.getEntries({
      content_type: "clients",
      select:
        "fields.name,fields.slug,fields.logo,fields.link,fields.projectTitle,fields.description,fields.services,fields.mainPhoto,fields.mobilePhoto,fields.workInProgress",
    });
  } catch (err: any) {
    console.log(`Something went wrong: ${err.message}`, err);
  }

  if (data) {
    const clientItem: ClientList = data.items.map((e: any) => ({
      id: e.sys.id,
      name: e.fields.name,
      logo: `http:${e?.fields.logo?.fields?.file?.url}`,
      link: e.fields.link ? e.fields.link : "",
      projectTitle: e.fields.projectTitle,
      description: e.fields.description ? e.fields.description : "",
      services: e.fields.services
        ? e.fields.services.map((e: any) => ({
            title: e.fields.title,
            img: `http:${e.fields.technologyLogo.fields.file.url}`,
          }))
        : [],
      mainPhoto: `http:${e?.fields.mainPhoto?.fields?.file?.url}`,
      mobilePhoto: `http:${e?.fields.mobilePhoto?.fields?.file?.url}`,
      workInProgress: e.fields.workInProgress,
    }));

    return clientItem;
  } else {
    const clientItem: ClientList = [
      {
        id: ``,
        name: ``,
        logo: ``,
        link: ``,
        projectTitle: ``,
        description: ``,
        services: [],
        mainPhoto: ``,
        mobilePhoto: ``,
        workInProgress: false,
      },
    ];

    return clientItem;
  }
}
