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
  hasTestimonial: boolean;
  testimonial: string;
  keyPerson: string;
  keyPersonImg: string;
  keyPersonPosition: string;
}

interface TestimonialItem {
  person: string;
  position: string;
  image: string;
  testimonial: string;
  company: string;
  companyLogo: string;
  companyLink: string;
}

interface ProjectItem {
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
}

type ClientCard = {
  props: Client;
};

type ClientList = Array<Client>;

type ClientObject = { [key: string]: ClientList };

interface OfferItem {
  id: string;
  title: string;
  mainImage: string;
  description: string;
  featureList: Array<any>;
  order: number;
  microservices: Array<ClientServices>;
}

type OfferList = Array<OfferItem>;

type OfferObject = { [key: string]: OfferList };
