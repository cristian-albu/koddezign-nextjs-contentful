import client from "./contentfulClient";

export default async function clientsQuery(
  mainPhotoSize?: string,
  serviceItemPhotoSize?: string,
  mobilePhotoSize?: string,
  keyPersonPhotoSize?: string
) {
  let data;

  try {
    data = await client.getEntries({
      content_type: "clients",
      order: "-fields.projectRating",
    });
  } catch (err: any) {
    console.log(`Something went wrong: ${err.message}`, err);
  }

  if (data) {
    const clientItem: ClientList = data.items.map((e: any) => ({
      id: e.sys.id,
      name: e.fields.name,
      logo: `https:${e?.fields.logo?.fields?.file?.url}`,
      link: e.fields.link ? e.fields.link : "",
      projectTitle: e.fields.projectTitle,
      description: e.fields.description ? e.fields.description : "",
      services: e.fields.services
        ? e.fields.services.map((e: any) => ({
            title: e.fields.title,
            img: `https:${e.fields.technologyLogo.fields.file.url}${
              serviceItemPhotoSize ? serviceItemPhotoSize : "?w=24&h=24"
            }`,
          }))
        : [],
      mainPhoto: `https:${e?.fields.mainPhoto?.fields?.file?.url}${
        mainPhotoSize ? mainPhotoSize : "?w=327&h=209"
      }`,
      mobilePhoto: `https:${e?.fields.mobilePhoto?.fields?.file?.url}${
        mobilePhotoSize ? mobilePhotoSize : "?w=70&h=132"
      }`,
      workInProgress: e.fields.workInProgress,
      hasTestimonial: e.fields.hasTestimonial,
      testimonial: `${e.fields.testimonial}`,
      keyPerson: `${e.fields.keyPerson}`,
      keyPersonImg: `https:${e?.fields.keyPersonImg?.fields?.file?.url}${
        keyPersonPhotoSize ? keyPersonPhotoSize : "?w=150&h=150"
      }`,
      keyPersonPosition: `${e.fields.keyPersonPosition}`,
      percentCompleted: e.fields.percentCompleted
        ? e.fields.percentCompleted
        : 0,
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
        hasTestimonial: false,
        testimonial: "",
        keyPerson: "",
        keyPersonImg: "",
        keyPersonPosition: ``,
        percentCompleted: 0,
      },
    ];

    return clientItem;
  }
}
