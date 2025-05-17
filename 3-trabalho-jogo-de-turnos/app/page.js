"use client";
import Character from "@/app/components/Character";
import GameManager from "@/app/hooks/GameManager";

export default function Home() {
    const {hero, villain, handleHeroAction, isHeroTurn} = GameManager();

    return (
    <div>
      <h1 className="text-center">Hero vs. Villain</h1>
      <div className="flex justify-end">
        <Character
        name={villain.name}
        life={villain.life}
        isHero={false}
        />
      </div>
      <Character
        name={hero.name}
        life={hero.life}
        isHero={true}
        isHeroTurn={isHeroTurn}
        onAction={true}
        handleHeroAction={handleHeroAction}
      />
    </div>
  );
}
