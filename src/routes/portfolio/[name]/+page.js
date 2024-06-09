import portfolio from "$components/portfolio/categories/data.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const nom = params.name;
  let project = null;
  let projects = [];
  Object.values(portfolio.projects).forEach((pjs) => {
    projects.push(...pjs);
  });

  project = projects.find((p) => p.id === nom);

  if (!project) {
    error(404, "Not found");
  }

  return project;
}
