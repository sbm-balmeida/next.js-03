import { CarPost } from "@/components/CardPost";
import logger from "@/looger";
import styles from './page.module.css';

// const post = {
//   "id": 1,
//   "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//   "title": "Introdução ao React",
//   "slug": "introducao-ao-react",
//   "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//   "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//   "author": {
//     "id": 101,
//     "name": "Ana Beatriz",
//     "username": "anabeatriz_dev",
//     "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//   }
// };

async function getAllPots(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);

  if(!response.ok) {
    logger.error('Ops, alguma coisa correu mal');
    return [];
  }

  logger.info('Posts obtidos com sucesso');

  return response.json();
}

export default async function Home() {
  const { data: posts } = await getAllPots(1);

  return (
    <main className={styles.grid}>
      {posts.map(post => <CarPost key={post.id} post={post}/>)};      
    </main>
  );
}
