import type { HeaderType } from "../../types/header";
import HeaderComponent from "../../components/Header/Header";

export default async function HeaderContainer() {
  const request = await fetch(process.env.DOMAIN_URL + "/api/header");
  const data: HeaderType = await request.json();

  return <HeaderComponent title={data.title} slogan={data.slogan} />;
}
