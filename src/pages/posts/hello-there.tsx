import Image from "next/image";
import Head from "next/head";
import Navigation from "@components/navigation";
import styles from "@shared/posts.module.css"

const Hello = () => (
    <>
        <Head>
            <title>Hello There :: My Blog</title>
            <meta name="description" content={'Meu primeiro post de do meu blog'}/>
        </Head>
        <Navigation/>
        <article>
            <title className={styles.title}>
            <h1>Hello there!</h1>
            </title>
            <div className={styles.img}>
                <Image className={styles.center} src={'/posts/hello-there/img.png'} width={400} height={250} alt={''}/>
                <Image className={styles.center} src={'/posts/hello-there/img.png'} width={400} height={250} alt={''}/>
            </div>
            <article className={styles.postcontent}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
        </article>

    </>
)

export default Hello