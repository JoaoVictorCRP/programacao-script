import { useState } from "react";

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
        attack: (attacker) => {
            changeSprite(attacker, "attack")
            const target = attacker==="hero" ? "villain" : "hero"
            modifyLife(target, -10);
            changeSprite(target, "hurt")
        },
        special: (attacker) => {
            changeSprite(attacker, "special")
            const target = attacker==="hero" ? "villain" : "hero"
            modifyLife(target, -25);
        },
        skip: () => {
            // zzz...
        }
    }

    const handleHeroAction = (action) => {
        console.log(action);
        if(!isHeroTurn) return;
        actions[action]?.("hero");
        setIsHeroTurn(false);

        setTimeout(() => {
            // Turno do vilão
            const pickAction = Math.floor(Math.random() * (2 - 0) + 0)
            const possibleActions = ["attack", "special", "skip"]
            const action = possibleActions[pickAction]
            handleVillainAction(action);
        }, 2000);
    }

    const handleVillainAction = (action) => {
        console.log(action);
        actions[action]?.("villain");
        setTimeout( () => {
            setIsHeroTurn(true);
        }, 2000)
    }

    return {
        hero,villain, handleHeroAction, isHeroTurn
    }
}
