interface RichText {
  nodeType: any;
  data: any;
  content: Array<{ nodeType: any; data: {}; content: Array<any> }>;
}

interface ClientServices {
  title: string;
  img: string;
}

interface Client {
  id: string;
  name: string;
  logo: string;
  link: string | any;
  projectTitle: string;
  description: string;
  services: Array<ClientServices>;
  mainPhoto: string;
  mobilePhoto: string;
  workInProgress: boolean;
  hasCaseStudy?: boolean;
  caseStudy?: RichText;
}

type ClientList = Array<Client>;

type ClientObject = { [key: string]: ClientList };

interface OfferItem {
  id: string;
  title: string;
  mainImage: string;
  description: string;
  order: number;
}

type OfferList = Array<OfferItem>;

type OfferObject = { [key: string]: OfferList };
