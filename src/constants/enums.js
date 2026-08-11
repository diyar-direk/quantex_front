import {
  faBox,
  faBullhorn,
  faKeyboard,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

export const categories = {
  softwareDevelopment: { value: "softwareDevelopment" },
  cybersecurityAndPentesting: { value: "cybersecurityAndPentesting" },
  webApps: { value: "webApps" },
  mobileApps: { value: "mobileApps" },
  network_Engineering: { value: "network_Engineering" },
  serverManagement: { value: "serverManagement" },
  aiDevelopment: { value: "aiDevelopment" },
  SAAS: { value: "SAAS" },
  cloudProducts: { value: "cloudProducts" },
};

export const postTypes = {
  blog: {
    value: "blog",
    icon: faKeyboard,
  },
  Project: {
    value: "Project",
    icon: faListCheck,
  },
  Product: {
    value: "Product",
    icon: faBox,
  },
  Announcement: {
    value: "Announcement",
    icon: faBullhorn,
  },
};
