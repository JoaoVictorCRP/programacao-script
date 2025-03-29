import CardPastel from "@/app/pastelaria/components/CardPastel";
import styles from "./styles.module.css";
import { Inter } from "next/font/google";
import CardPastelEsgotado from "@/app/pastelaria/components/CardPastelEsgotado";
import If from "@/app/pastelaria/components/If";

const inter = Inter({ subsets: ['latin'] })

const estoqueCarne = 10;
const estoqueFrango = 4;
const estoqueQueijo = 0;
const estoquePizza = 10;
const estoqueChocolate = 30;
const estoqueBacon = 0;
const estoqueBrocolis = 0;
const estoquePistache = 4;
const estoqueVento = 10;

export default function Page(){
    return (
        <div className={inter.className} style={{backgroundColor:"#fff"}}>
            <h1 className={styles.title}>😋 Pastelaria do Seu Zé 🌯</h1>

            <div className={styles.container}>
                <div className={styles.cardDiv}>
                    {/*Carne*/}
                    <If condition={estoqueCarne>0}>
                        <CardPastel sabor={"Carne"}/>
                    </If>
                    <If condition={estoqueCarne<=0}>
                        <CardPastelEsgotado sabor={"Carne"}/>
                    </If>

                    {/*Frango*/}
                    <If condition={estoqueFrango>0}>
                        <CardPastel sabor={"Frango"}/>
                    </If>
                    <If condition={estoqueFrango<=0}>
                        <CardPastelEsgotado sabor={"Frango"}/>
                    </If>

                    {/*Queijo*/}
                    <If condition={estoqueQueijo>0}>
                        <CardPastel sabor={"Queijo"}/>
                    </If>
                    <If condition={estoqueQueijo<=0}>
                        <CardPastelEsgotado sabor={"Queijo"}/>
                    </If>


                </div>

                <div className={styles.cardDiv}>
                    {/*Pizza*/}
                    <If condition={estoquePizza>0}>
                        <CardPastel sabor={"Pizza"}/>
                    </If>
                    <If condition={estoquePizza<=0}>
                        <CardPastelEsgotado sabor={"Pizza"}/>
                    </If>

                    {/*Chocolate*/}
                    <If condition={estoqueChocolate>0}>
                        <CardPastel sabor={"Chocolate"}/>
                    </If>
                    <If condition={estoqueChocolate<=0}>
                        <CardPastelEsgotado sabor={"Chocolate"}/>
                    </If>

                    {/*Bacon*/}
                    <If condition={estoqueBacon > 0}>
                        <CardPastel sabor={"Bacon"} />
                    </If>
                    <If condition={estoqueBacon <= 0}>
                        <CardPastelEsgotado sabor={"Bacon"} />
                    </If>
                </div>

                <div className={styles.cardDiv}>
                    {/*Brócolis*/}
                    <If condition={estoqueBrocolis > 0}>
                        <CardPastel sabor={"Brócolis"} />
                    </If>
                    <If condition={estoqueBrocolis <= 0}>
                        <CardPastelEsgotado sabor={"Brócolis"} />
                    </If>

                    {/*Pistache*/}
                    <If condition={estoquePistache > 0}>
                        <CardPastel sabor={"Pistache"} />
                    </If>
                    <If condition={estoquePistache <= 0}>
                        <CardPastelEsgotado sabor={"Pistache"} />
                    </If>

                    {/*Vento*/}
                    <If condition={estoqueVento > 0}>
                        <CardPastel sabor={"Vento"} />
                    </If>
                    <If condition={estoqueVento <= 0}>
                        <CardPastelEsgotado sabor={"Vento"} />
                    </If>
                </div>
            </div>
        </div>
    );
}