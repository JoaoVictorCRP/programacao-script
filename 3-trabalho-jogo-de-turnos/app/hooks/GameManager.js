import { useState} from "react";
import Swal from "sweetalert2";

export default function GameManager() {
    const initialHero = {life:100, name:"Trump", sprite:"default"}
    const initialVillain = {life:100, name:"Xi Jinping", sprite:"default"}
    const [hero, setHero] = useState(initialHero);
    const [villain, setVillain] = useState(initialVillain);
    const [isHeroTurn, setIsHeroTurn] = useState(true);
    let gameOver = false;

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
        });
    }

    const modifyLife = (target, damage) => {
        const setter = target === "hero" ? setHero : setVillain;
        setter((prev) => {
            const newLife = Math.max(0, prev.life - damage);

            // Se a vida acabou, dispara o game over aqui
            if (newLife === 0) {
                gameOver = true;
                const winner = target === "hero" ? "villain" : "hero";
                showGameOverModal(winner);
                changeSprite(target, "defeated");
            }

            return { ...prev, life: newLife };
        });
    }

    const changeSprite = (target, state) => {
        const setter = target === "hero" ? setHero : setVillain;
        setter((prev) => {
            const newState = { ...prev, sprite: state };
            console.log(`${target}'s sprite changed to: ${state}`);

            if (state !== "defeated") {
                setTimeout(() => {
                    setter((currentPrev) => { // Usando currentPrev para pegar o último estado do momento que o setTimeout foi disparado
                        if (currentPrev.sprite === state) { // Se o current sprite ainda estiver mantido após 1.5 segundos do timeout, então alteraremos para default
                            return { ...currentPrev, sprite: "default" };
                        }
                        return currentPrev; // Após a condição acima ser dada como falsa, este return impede a sobrescrição do defeated.
                    });
                }, 1500);
            }
            return newState;
        });
    }

    const actions = {
        attack: (attacker) => {
            changeSprite(attacker, "attack")
            const target = attacker==="hero" ? "villain" : "hero"
            modifyLife(target, 10);
            changeSprite(target, "hurt");
        },
        special: (attacker) => {
            changeSprite(attacker, "special")
            const target = attacker==="hero" ? "villain" : "hero"
            modifyLife(target, 25);
            changeSprite(target, "hurt")
        },
        skip: () => {
            // zzz...
        }
    }

    const handleHeroAction = (action) => {
        if(!isHeroTurn || gameOver) return; // verifica se deu game over pro heroi
        actions[action]?.("hero");
        setIsHeroTurn(false);

        console.log(`o jogo não acabou. Game Over: ${gameOver}`);
        setTimeout(() => {
            // Turno do vilão
            const pickAction = Math.floor(Math.random() * (2))
            const possibleActions = ["attack", "special", "skip"]
            const action = possibleActions[pickAction]
            handleVillainAction(action);
        }, 2000);
    }

    const handleVillainAction = (action) => {
        if(gameOver) return;
        console.log("Villain ainda vai atacar");
        actions[action]?.("villain");
        setTimeout( () => {
            setIsHeroTurn(true);
        }, 2000)
    }

    return {
        hero,villain, handleHeroAction, isHeroTurn
    }
}
