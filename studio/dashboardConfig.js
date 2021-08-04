export default {
  widgets: [
    {
      name: "netlify",
      options: {
        title: "My Netlify Deploys",
        description:
          "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
        sites: [
          {
            title: "Sanity Studio",
            apiId: "ce43f59a-de26-42eb-a989-d3d232047533",
            buildHookId: "5eea9237e7f53a019d810bbf",
            name: "sans-sanity-gatsby-starter",
          },

          {
            title: "Website",
            apiId: "7ccf7f28-2ee8-4929-bcf7-55257f4cb523",
            buildHookId: "5eeac2a7a9c61b6880096bab",
            name: "sans-sanity-gatsby-starter-web",
          },
        ],
      },
    },
    {
      name: "project-info",
      layout: {
        width: "medium",
        height: "small",
      },
    },
    {
      name: "project-users",
      layout: {
        width: "small",
        height: "small",
      },
    },
  ],
};
