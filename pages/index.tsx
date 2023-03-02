import clientsQuery from "@/lib/clientsQuery";
import offerQuery from "@/lib/offerQuery";
import { InferGetServerSidePropsType } from "next";

const Index = ({
  clientList,
  offerList,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-3 gap-5 mb-10">
        {clientList.map((client: Client) => (
          <div key={client.id}>{client.name}</div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 mb-10">
        {offerList.map((offer: OfferItem) => (
          <div key={offer.id}>{offer.title}</div>
        ))}
      </div>
    </div>
  );
};
export default Index;

export const getStaticProps = async () => {
  const [clientList, offerList] = await Promise.all([
    clientsQuery(),
    offerQuery(),
  ]);

  return {
    props: { clientList, offerList },
    // revalidate: 1000 * 60 * 60 * 4,
  };
};
