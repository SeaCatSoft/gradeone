// Everything prerenders. Auth runs in the browser and all content is public,
// so no page needs a server at request time — which means this deploys as a
// plain static site, the same way Roost does.
export const prerender = true;
export const ssr = true;
