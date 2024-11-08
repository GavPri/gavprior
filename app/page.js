import PersonalIntro from "./components/PersonalIntro";

export default function Home() {
  return (
      <main className="grow">
        <article className="flex flex-col mt-8 gap-16 pb-16">
          <PersonalIntro />
        </article>
      </main>
  );
}
