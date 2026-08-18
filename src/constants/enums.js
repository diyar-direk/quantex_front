import {
  faArrowUpRightDots,
  faBoxOpen,
  faBrain,
  faBug,
  faBullhorn,
  faChartLine,
  faCloud,
  faCode,
  faCreditCard,
  faFolderOpen,
  faGlobe,
  faInfinity,
  faLayerGroup,
  faLock,
  faMicrochip,
  faMobileScreenButton,
  faNetworkWired,
  faNewspaper,
  faRobot,
  faServer,
  faShieldHalved,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "./colors";
import {
  faAndroid,
  faApple,
  faAws,
  faJs,
  faLinux,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const categories = {
  softwareDevelopment: {
    value: "softwareDevelopment",
    color: colors.blue,
    icon: faCode,
    tags: [faJs, faNodeJs, faPython],
  },

  cybersecurityAndPentesting: {
    value: "cybersecurityAndPentesting",
    color: colors.red,
    icon: faShieldHalved,
    tags: [faShieldHalved, faBug, faLock],
  },

  webApps: {
    value: "webApps",
    color: colors.cyan,
    icon: faGlobe,
    tags: [faReact, faCode, faGlobe],
  },

  mobileApps: {
    value: "mobileApps",
    color: colors.green,
    icon: faMobileScreenButton,
    tags: [faAndroid, faApple, faMobileScreenButton],
  },

  network_Engineering: {
    value: "network_Engineering",
    color: colors.move,
    icon: faNetworkWired,
    tags: [faNetworkWired, faServer, faWifi],
  },

  serverManagement: {
    value: "serverManagement",
    color: colors.orange,
    icon: faServer,
    tags: [faServer, faLinux, faChartLine],
  },

  aiDevelopment: {
    value: "aiDevelopment",
    color: colors.purple,
    icon: faBrain,
    tags: [faBrain, faRobot, faMicrochip],
  },

  SAAS: {
    value: "SAAS",
    color: colors.pink,
    icon: faLayerGroup,
    tags: [faCloud, faCreditCard, faArrowUpRightDots],
  },

  cloudProducts: {
    value: "cloudProducts",
    color: colors.teal,
    icon: faCloud,
    tags: [faAws, faCloud, faInfinity],
  },
};

export const postTypes = {
  blog: {
    value: "blog",
    icon: faNewspaper,
  },
  Project: {
    value: "Project",
    icon: faFolderOpen,
  },
  Product: {
    value: "Product",
    icon: faBoxOpen,
  },
  Announcement: {
    value: "Announcement",
    icon: faBullhorn,
  },
};
