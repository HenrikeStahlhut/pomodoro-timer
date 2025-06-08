import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/rootLayout.tsx", [index("routes/home.tsx")]),
] satisfies RouteConfig;
