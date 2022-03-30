const routers = [
  {
    path: "/",
    redirect: "/",
  },
  {
    component: "MainLayout",
    path: "/",
    auth: false,
    exact: false,
    childrens: [
      {
        component: "NumberToWord",
        path: "/",
        auth: false,
        exact: true,
      },
    ],
  },
];

export default routers;
