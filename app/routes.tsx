import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("./pages/HomePage.tsx"),
  // pattern ^           ^ module file
  route("redirect/:urlId", "./pages/RedirectPage.tsx"),

  route('*', './pages/NotFoundPage.tsx')
] satisfies RouteConfig;