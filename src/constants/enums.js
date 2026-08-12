import {
  faBox,
  faBrain,
  faBullhorn,
  faCloud,
  faCode,
  faKeyboard,
  faListCheck,
  faMobile,
  faNetworkWired,
  faRobot,
  faServer,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "./colors";
import { faWebflow } from "@fortawesome/free-brands-svg-icons";

export const categories = {
  softwareDevelopment: {
    value: "softwareDevelopment",
    color: colors.blue,
    icon: faCode,
  },
  cybersecurityAndPentesting: {
    value: "cybersecurityAndPentesting",
    color: colors.red,
    icon: faShieldHalved,
  },
  webApps: { value: "webApps", color: colors.move, icon: faWebflow },
  mobileApps: { value: "mobileApps", color: colors.orange, icon: faMobile },
  network_Engineering: {
    value: "network_Engineering",
    color: colors.purple,
    icon: faNetworkWired,
  },
  serverManagement: {
    value: "serverManagement",
    color: colors.teal,
    icon: faServer,
  },
  aiDevelopment: {
    value: "aiDevelopment",
    color: colors.yellow,
    icon: faBrain,
  },
  SAAS: { value: "SAAS", color: colors.pink, icon: faRobot },
  cloudProducts: { value: "cloudProducts", color: colors.green, icon: faCloud },
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
