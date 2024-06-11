import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const nom = params.name;
  try {
    let project = (await import(`$components/portfolio/projets/${nom}.svelte`))
      .default;
    return { component: project };
  } catch (_) {
    error(404, "Not found");
  }
}
