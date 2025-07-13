export default function HeaderComponent() {
  const header = {
    title: "Feeling lucky today?",
    slogan: "Place your bet!",
  };

  const { title, slogan } = header;

  return (
    <header className="bg-green-600/50 w-screen p-2 flex flex-col items-center leading-6">
      <h2>{title}</h2>
      <h3>{slogan}</h3>
    </header>
  );
}
