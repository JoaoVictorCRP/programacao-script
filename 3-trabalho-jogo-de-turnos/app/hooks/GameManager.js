import { useState } from "react";

export default function GameManager() {
    const initialHero = {life:100, name:"Trump"}
    const initialVillain = {life:100, name:"Xi Jinping"}

    const [hero, setHero] = useState(initialHero);
    const [villain, setVillain] = useState(initialVillain);

    const [isHeroTurn, setIsHeroTurn] = useState(true);

    const modifyLife = (target, amount) => {
        const setter = target === "hero" ? setHero : setVillain;
        setter((prev) => ({ ...prev,  life: Math.max(0, prev.life + amount) }));
    }

    const actions = {
        attack: () => {
            modifyLife("villain", -10);
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
            setIsHeroTurn(false)
        }, 2000);
    }

    return {
        hero,villain, handleHeroAction, isHeroTurn
    }
}
