import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faThreads,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const socialLinks = {
  instagram: {
    text: "quantex.company",
    link: "https://www.instagram.com/quantex.company/",
    icon: faInstagram,
  },
  github: {
    text: "diyar_direk",
    link: "test",
    icon: faGithub,
  },
  twitter: {
    text: "test",
    link: "test",
    icon: faTwitter,
  },
  linkedin: {
    text: "test",
    link: "test",
    icon: faLinkedin,
  },
  email: {
    text: "diyardireki111@gmail.com",
    link: "mailto:diyardireki111@gmail.com",
    icon: faEnvelope,
  },
  phone: {
    text: "+963 936 038 904",
    link: "tel:+963936038904",
    icon: faPhone,
  },
};

const companyLocation = {
  text: "Qamishlo Al-Kornish Street",
  map: `https://www.google.com/maps?q=37.04381577440059,41.22354037748979&z=15&output=embed&t=h`,
  view: `https://www.google.com/maps/place/37%C2%B002'37.7%22N+41%C2%B013'24.8%22E/@37.0438201,41.2261153,662m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d37.0438158!4d41.2235404?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D`,
  icon: faLocationDot,
};

export { socialLinks, companyLocation };
