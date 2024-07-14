import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "#",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "#",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 42,
        title: "Contact Page",
        // path: "/contact",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        // path: "/blog",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        // path: "/blog-sidebar",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        // path: "/blog-details",
        path: "/",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        // path: "/signin",
        path: "/",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        // path: "/signup",
        path: "/",
        newTab: false,
      },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
