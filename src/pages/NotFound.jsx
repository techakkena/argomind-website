import { usePageMeta } from "../components/Layout.jsx";
import { Button, GhostLink, PageHero } from "../components/ui.jsx";

export default function NotFound() {
  usePageMeta("Page not found", "This page doesn't exist.");
  return (
    <PageHero
      title="This page doesn't exist"
      lead="The link may be out of date, or the page may have moved. Head back home or browse the tracks."
      crumb="Page not found"
      actions={<>
        <Button to="/" light>Go to the home page</Button>
        <GhostLink to="/programs">Browse tracks</GhostLink>
      </>}
    />
  );
}
