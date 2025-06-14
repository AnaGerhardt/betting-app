import { HeaderType } from "../../types/header";

export default function HeaderComponent({ title, slogan }: HeaderType) {
  return (
    <header className="bg-green-600/50 w-screen p-2 flex flex-col items-center leading-6">
      <h2>{title}</h2>
      <h3>{slogan}</h3>
    </header>
  );
}
