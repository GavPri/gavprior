import InfoTabs from "./components/InfoTabs";
import PersonalIntro from "./components/PersonalIntro";

export default function Home() {
  return (
      <main className="grow w-full">
        <article className="flex flex-col mt-8 gap-16 pb-16">
          <PersonalIntro />
          <InfoTabs />
        </article>
      </main>
  );
}
