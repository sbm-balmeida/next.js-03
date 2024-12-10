import Image from "next/image"
import { Avartar } from "../Avatar"

export const CarPost = ({ post }) => {
    return (
        <article>
            <header>
                <figure>
                    <Image src={post.cover} width={438} height={133}/>
                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer>
                <Avartar 
                    imageSrc={post.author.avatar} 
                    name={post.author.username}
                />
            </footer>
        </article>
    )
}