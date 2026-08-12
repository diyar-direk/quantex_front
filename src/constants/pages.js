import {
  faContactBook,
  faDashboard,
  faHome,
  faLightbulb,
  faNewspaper,
  faPlus,
  faQuestionCircle,
  faSignIn,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { postTypes } from "./enums";

const pages = {
  home: "/",
  joinUs: "/join_us",
  contactUs: "/contact_us",
  ourServices: "/our_services",
  aboutUs: "/about_us",
  projects: "/projects",
  blogs: "/blogs",
  products: "/product",
  announcements: "/announcements",
  dashboard: {
    page: "/dashboard",
    users: {
      page: "/dashboard/users",
      add: "/dashboard/users/add",
    },
    posts: {
      page: "/dashboard/posts",
      add: "/dashboard/posts/add",
    },
  },
};

const homePages = [
  {
    title: "home",
    icon: faHome,
    to: pages.home,
  },
  {
    title: "about us",
    icon: faQuestionCircle,
    to: pages.aboutUs,
  },
  {
    title: "our services",
    icon: faLightbulb,
    to: pages.ourServices,
  },
  {
    title: "contact us",
    icon: faContactBook,
    to: pages.contactUs,
  },
  {
    title: "join us",
    icon: faSignIn,
    to: pages.joinUs,
  },
  {
    title: "projects",
    icon: postTypes.Project.icon,
    to: pages.projects,
  },
  {
    title: "blogs",
    icon: postTypes.blog.icon,
    to: pages.blogs,
  },
  {
    title: "Products",
    icon: postTypes.Product.icon,
    to: pages.products,
  },
  {
    title: "announcements",
    icon: postTypes.Announcement.icon,
    to: pages.announcements,
  },
];

const pagesActionRouts = {
  dashboard: {
    posts: {
      view: (id = ":id") => `${pages.dashboard.posts.page}/${id}`,
      update: (id = ":id") => `${pages.dashboard.posts.page}/${id}/update`,
    },
  },
  projects: (id = ":id") => `${pages.projects}/${id}`,
  products: (id = ":id") => `${pages.products}/${id}`,
  blogs: (id = ":id") => `${pages.blogs}/${id}`,
  announcements: (id = ":id") => `${pages.announcements}/${id}`,
};

const dashboardPages = [
  {
    title: "statistics",
    to: pages.dashboard.page,
    icon: faDashboard,
  },
  {
    title: "users",
    to: pages.dashboard.users.page,
    icon: faUsers,
    children: [
      {
        title: "users",
        to: pages.dashboard.users.page,
        icon: faUsers,
      },
      {
        title: "add user",
        to: pages.dashboard.users.add,
        icon: faUserPlus,
      },
    ],
  },
  {
    title: "posts",
    to: pages.dashboard.posts.page,
    icon: faNewspaper,
    children: [
      {
        title: "posts",
        to: pages.dashboard.posts.page,
        icon: faNewspaper,
      },
      {
        title: "add post",
        to: pages.dashboard.posts.add,
        icon: faPlus,
      },
    ],
  },
];

export { pages, homePages, pagesActionRouts, dashboardPages };
