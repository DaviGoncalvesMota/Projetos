import styles from "./SobreMim.module.css";
import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/Davi.jpeg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Davi!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Davi serio"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante da etec de mauá e estou feliz em te ver por Aqui
            </p>
            <p className={styles.paragrafo}>
                Minha história na programação começou em 2021, onde me inscrevi na etec de mauá para o curso de desenvolvimento de sistemas, e não fazia ideia de que iria gostar tanto
            </p>
            <p className={styles.paragrafo}>
                com o tempo fui aprendendo algumas linguagens de programação, como php, javaScript e C#, e muito mais
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
            </p>
            <p className={styles.paragrafo}>
                Assim seguindo os passos do meu pai, pretendo ir para front-end, minha linguagem preferida é o javaScript,
            </p>
            <p className={styles.paragrafo}>
                e pretendo aprender muito mais de qualquer outra linguagem 
            </p>
        </PostModelo>
    )
}