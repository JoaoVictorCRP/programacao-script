import { useState} from "react";
import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import CustomizedToast from "@/app/components/CustomizedToast";

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
        }).then(result => {
            if (result.isDismissed || result.isConfirmed) {
                window.location.reload();
            }
        });
    }

    const modifyLife = (target, damage, attackType) => {
        const currentLife = target === "hero" ? hero.life : villain.life;
        const newLife     = Math.max(0, currentLife - damage);

        const setter = target === "hero" ? setHero : setVillain;
        setter(prev => ({ ...prev, life: newLife }));

        if (newLife === 0 && !gameOver) {
            gameOver = true;
            changeSprite(target, "defeated");
            const winner = target === "hero" ? "villain" : "hero";
            showGameOverModal(winner);
        }

        toast(
            <CustomizedToast
                target={target}
                damage={damage}
                attackType={attackType}
            />,
            {
                icon: "info",
                position: "bottom-right",
                autoClose: 1500,
                style: {
                    "--toastify-color-progress-light": `${target === "hero" ? "red" : "green"}`, // sobrescrição do style do toast
                },
            }
        );
    };

    const changeSprite = (target, state) => {
        const setter = target === "hero" ? setHero : setVillain;

        setter(prev => ({ ...prev, sprite: state }));

        if (state === "defeated") return; // se o personagem foi derrotado, não retorne ao sprite padrão

        setTimeout(() => {
            setter(prev => {
                // só reseta se ainda estiver no mesmo state (isso evita sobrescrever 'defeated' ou outro ataque que já tenha mudado)
                if (prev.sprite !== state) return prev;
                return { ...prev, sprite: "default" };
            });
        }, 1700);
    }

    const actions = {
        attack: (attacker) => {
            changeSprite(attacker, "attack")
            const target = attacker==="hero" ? "villain" : "hero"
            modifyLife(target, 10, "attack");
            if (gameOver) return;
            changeSprite(target, "hurt");
        },
        special: (attacker) => {
            changeSprite(attacker, "special")
            const target = attacker==="hero" ? "villain" : "hero"
            modifyLife(target, 25, "special");
            if (gameOver) return;
            changeSprite(target, "hurt")
        },
        skip: (attacker) => {
            toast(
                <CustomizedToast
                    target={attacker==="hero" ? "villain" : "hero"}
                    attackType="skip"
                />,
                {
                    icon: "info",
                    position: "bottom-right",
                    autoClose: 1500,
                    style: {
                        "--toastify-color-progress-light": `${attacker === "hero" ? "green" : "red"}`,
                    },
                }
            );
        }
    }

    const handleHeroAction = (action) => {
        if(!isHeroTurn || gameOver) return; // verifica se deu game over pro heroi
        actions[action]?.("hero");
        setIsHeroTurn(false);

        setTimeout(() => {
            // Turno do vilão
            const pickAction = Math.floor(Math.random() * 2)
            const possibleActions = ["attack", "special", "skip"]
            const action = possibleActions[pickAction]
            handleVillainAction(action);
        }, 2000);
    }

    const handleVillainAction = (action) => {
        if(gameOver) return;
        actions[action]?.("villain");
        setTimeout( () => {
            if (gameOver) return;
            setIsHeroTurn(true);
        }, 2000)
    }

    return {
        hero,villain, handleHeroAction, isHeroTurn
    }
}
