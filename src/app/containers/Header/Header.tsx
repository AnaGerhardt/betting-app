import type { HeaderType } from "../../types/header";
import HeaderComponent from "../../components/Header/Header";

export default async function HeaderContainer() {
  const fetchHeaderContent = await fetch(
    process.env.DOMAIN_URL + "/api/header"
  );
  const headerContent: HeaderType = await fetchHeaderContent.json();

  return (
    <HeaderComponent
      title={headerContent.title}
      slogan={headerContent.slogan}
    />
  );
}
