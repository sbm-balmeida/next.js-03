import Image from "next/image"
import styles from './cardpost.module.css'
import Link from "next/link"
import { Avatar } from "../Avatar"

export const CardPost = ({ post, highlight }) => {
    return (
        <Link href={`/posts/${post.slug}`} className={styles.link}>
             <article className={styles.card} style={{ width: highlight ? 993 : 486}}>
                <header className={styles.header}>
                    <figure style={{ height: highlight ? 300 : 133}}>
                        <Image
                            src={post.cover}
                            fill
                            alt={`Capa do post de titulo: ${post.title}`}
                        />
                    </figure>
                </header>
                <section className={styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </section>
                <footer className={styles.footer}>
                    <Avatar
                        imageSrc={post.author.avatar}
                        name={post.author.username}
                    />
                </footer>
            </article>
        </Link>
    )
}