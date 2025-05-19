import { useState } from "react";
import {setTimeout} from "next/dist/compiled/@edge-runtime/primitives";

export default function GameManager() {
    const initialHero = {life:100, name:"Trump", sprite:"default"}
    const initialVillain = {life:100, name:"Xi Jinping", sprite:"default"}

    const [hero, setHero] = useState(initialHero);
    const [villain, setVillain] = useState(initialVillain);

    const [isHeroTurn, setIsHeroTurn] = useState(true);


    const modifyLife = (target, amount) => {
        const setter = target === "hero" ? setHero : setVillain;
        setter((prev) => ({ ...prev,  life: Math.max(0, prev.life + amount) }));
    }

    const changeSprite = (target, state) => {
        const setter = target === "hero" ? setHero : setVillain;
        setter((prev) => ({ ...prev,  sprite: state }));
        setTimeout( () => {
            setter((prev) => ({ ...prev, sprite: "default"}));
        }, 1500)
    }

    const actions = {
        attack: () => {
            changeSprite("hero", "attack")
            modifyLife("villain", -10);
        },
        skip: () => {
            // zzz...
        }
    }

    const handleHeroAction = (action) => {
        console.log(action);
        if(!isHeroTurn) return;
        actions[action]?.();
        setIsHeroTurn(false);

        // Turno do vilão
        setTimeout(() => {
            // TODO: Lógica adicional de ataque do vilão
            setIsHeroTurn(true)
        }, 2000);
    }

    return {
        hero,villain, handleHeroAction, isHeroTurn
    }
}
