"use client";
import Character from "@/app/components/Character";
import GameManager from "@/app/hooks/GameManager";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
    const {hero, villain, handleHeroAction, isHeroTurn} = GameManager();

    return (
    <div>
      <h1 className="text-center">Hero vs. Villain</h1>
      <div className="flex justify-end">
        <Character
        name={villain.name}
        life={villain.life}
        sprite={villain.sprite}
        isHero={false}
        />
      </div>
      <Character
        name={hero.name}
        life={hero.life}
        sprite={hero.sprite}
        isHero={true}
        onAction={isHeroTurn}
        handleHeroAction={handleHeroAction}
      />
        {/* 1) Container que exibe todos os toasts */}
        <ToastContainer

        />

    </div>
  );
}
