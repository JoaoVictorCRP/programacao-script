import Character from "@/app/components/Character";

export default function Home() {
  return (
    <div>
      <h1 className="text-center">Hero vs. Villain</h1>
      <Character
        name="Villain"
        life={100}
        isHero={false}
      />
      <Character
        name="Herói"
        life={100}
        isHero={true}
        isHeroTurn={true}
        onAction={true}
      />
    </div>
  );
}
