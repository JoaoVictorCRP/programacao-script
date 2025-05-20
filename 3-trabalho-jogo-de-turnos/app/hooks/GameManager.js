import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useRouter} from "next/router";

export default function GameManager() {
    const initialHero = {life:100, name:"Trump", sprite:"default"}
    const initialVillain = {life:100, name:"Xi Jinping", sprite:"default"}

    const [hero, setHero] = useState(initialHero);
    const [villain, setVillain] = useState(initialVillain);

    const [isHeroTurn, setIsHeroTurn] = useState(true);

    useEffect(() => {
        checkGameFinished();
    }, [hero.life, villain.life]);
    
    const showGameOverModal = (winner) => {
        const [winnerName, loserName] = [
            winner === "hero" ? "Trump" : "Xi Jinping",
            winner === "hero" ? "Xi Jinping" : "Trump"
        ];

        Swal.fire({
            title: `${winnerName} venceu!`,
            text: `Mas o ${loserName} quer uma revanche!`,
            icon: "info",
            confirmButtonText: "Jogar Novamente",
            confirmButtonColor: "green",
        }).then((_result) => {
            window.location.reload();
        });
    }

    const checkGameFinished = () => {
        console.log(`Vida do herói: ${hero.life}, vida do vilão: ${villain.life}`);
        if (hero.life === 0) {
            // TODO: Impedir novas ações após fim de jogo
            changeSprite("hero", "defeated")
            showGameOverModal("villain");
        } else if (villain.life === 0) {
            changeSprite("villain", "defeated")
            showGameOverModal("hero");
        }
    }

    const modifyLife = async (target, amount) => {
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
        checkGameFinished("hero");
    }

    const handleVillainAction = (action) => {
        console.log(action);
        actions[action]?.("villain");
        setTimeout( () => {
            setIsHeroTurn(true);
        }, 2000)
        checkGameFinished("villain");
    }

    return {
        hero,villain, handleHeroAction, isHeroTurn
    }
}
