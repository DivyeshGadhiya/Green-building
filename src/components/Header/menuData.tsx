import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 2,
    title: "About",
    path: "#",
    newTab: false,
  },
  {
    id: 3,
    title: "Expertise",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Auditing",
        // path: "/auditing",
        newTab: false,
        childSubMenu: [
          {
            id: 441,
            title: "Energy",
            path: "/energy",
            newTab: false,
          },
          {
            id: 442,
            title: "Fire",
            path: "/fire",
            newTab: false,
          },
          {
            id: 443,
            title: "Waste Management",
            path: "/waste-management",
            newTab: false,
          },
          {
            id: 444,
            title: "Water",
            path: "/water",
            newTab: false,
          }
        ]
      },
      {
        id: 42,
        title: "Building Engineering",
        // path: "/building-engineering",
        newTab: false,
        childSubMenu: [
          {
            id: 421,
            title: "BIM",
            path: "/bim",
            newTab: false,
          },
          {
            id: 422,
            title: "MEPF Design",
            path: "/mepf-design",
            newTab: false,
          }
        ]
      },
      {
        id: 43,
        title: "Building Performance",
        // path: "/building-performance",
        newTab: false,
        childSubMenu: [
          {
            id: 431,
            title: "Energy Modelling",
            path: "/energy-modelling",
            newTab: false,
          },
          {
            id: 432,
            title: "Simulation",
            path: "/simulation",
            newTab: false,
          }
        ]
      },
      {
        id: 43,
        title: "Compliances",
        // path: "/compliances",
        newTab: false,
        childSubMenu: [
          {
            id: 431,
            title: "Category View",
            path: "/blog/category",
            newTab: false,
          },
          {
            id: 432,
            title: "Tag View",
            path: "/blog/tag",
            newTab: false,
          }
        ]
      },
      {
        id: 43,
        title: "Green Building Facilitation",
        // path: "/breen-building-facilitation",
        newTab: false,
        childSubMenu: [
          {
            id: 431,
            title: "Category View",
            path: "/blog/category",
            newTab: false,
          },
          {
            id: 432,
            title: "Tag View",
            path: "/blog/tag",
            newTab: false,
          }
        ]
      },
      {
        id: 43,
        title: "Policy Framework Development",
        // path: "/policy-framework-development",
        newTab: false,
        childSubMenu: [
          {
            id: 431,
            title: "Sustainability Reporting",
        path: "/sustainability-reporting",
            newTab: false,
          },
          {
            id: 432,
            title: "Sustainable Development Policies",
            path: "/sustainable-development-policies",
            newTab: false,
          }
        ]
      },
      {
        id: 43,
        title: "Training & Capacity Building",
        // path: "/training-capacity-building",
        newTab: false,
        childSubMenu: [
          {
            id: 431,
            title: "Category View",
            path: "/blog/category",
            newTab: false,
          },
          {
            id: 432,
            title: "Tag View",
            path: "/blog/tag",
            newTab: false,
          }
        ]
      },
    ],
  },
  {
    id: 4,
    title: "Blog",
    path: "#",
    newTab: false,
    // submenu: [
    //   {
    //     id: 41,
    //     title: "Latest Posts",
    //     path: "/blog/latest",
    //     newTab: false,
    //     childSubMenu: [
    //       {
    //         id: 411,
    //         title: "Featured Posts",
    //         path: "/blog/latest/featured",
    //         newTab: false,
    //       },
    //       {
    //         id: 412,
    //         title: "Most Read",
    //         path: "/blog/latest/most-read",
    //         newTab: false,
    //       }
    //     ]
    //   },
    //   {
    //     id: 42,
    //     title: "Categories",
    //     path: "/blog/categories",
    //     newTab: false,
    //     childSubMenu: [
    //       {
    //         id: 421,
    //         title: "Technology",
    //         path: "/blog/categories/technology",
    //         newTab: false,
    //       },
    //       {
    //         id: 422,
    //         title: "Business",
    //         path: "/blog/categories/business",
    //         newTab: false,
    //       }
    //     ]
    //   }
    // ]
  },
  {
    id: 5,
    title: "Support",
    path: "#",
    newTab: false,
    // submenu: [
    //   {
    //     id: 51,
    //     title: "FAQ",
    //     path: "/support/faq",
    //     newTab: false,
    //     childSubMenu: [
    //       {
    //         id: 511,
    //         title: "General Questions",
    //         path: "/support/faq/general",
    //         newTab: false,
    //       },
    //       {
    //         id: 512,
    //         title: "Technical Issues",
    //         path: "/support/faq/technical",
    //         newTab: false,
    //       }
    //     ]
    //   },
    //   {
    //     id: 52,
    //     title: "Help Center",
    //     path: "/support/help-center",
    //     newTab: false,
    //     childSubMenu: [
    //       {
    //         id: 521,
    //         title: "Tutorials",
    //         path: "/support/help-center/tutorials",
    //         newTab: false,
    //       },
    //       {
    //         id: 522,
    //         title: "Live Chat",
    //         path: "/support/help-center/live-chat",
    //         newTab: false,
    //       }
    //     ]
    //   }
    // ]
  },
];

export default menuData;