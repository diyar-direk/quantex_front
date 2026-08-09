import {
  faDashboard,
  faNewspaper,
  faPlus,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const pages = {
  home: "/",
  joinUs: "/join_us",
  contactUs: "/contact_us",
  ourServices: "/our_services",
  aboutUs: "/about_us",
  dashboard: {
    page: "/dashboard",
    users: {
      page: "/dashboard/users",
      add: "/dashboard/users/add",
    },
    posts: {
      page: "/dashboard/posts",
      view: (id = ":id") => `/dashboard/posts/${id}`,
      update: (id = ":id") => `/dashboard/posts/${id}/update`,
      add: "/dashboard/posts/add",
    },
  },
};

export const dashboardPages = [
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
