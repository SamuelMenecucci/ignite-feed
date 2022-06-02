import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Samuel Menecucci"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure voluptatem assumenda? Ex assumenda suscipit possimus voluptas, laborum ipsum, alias totam repellendus eaque unde officiis aliquid placeat explicabo quod inventore."
          />
          <Post content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure voluptatem assumenda? Ex assumenda suscipit possimus voluptas, laborum ipsum, alias totam repellendus eaque unde officiis aliquid placeat explicabo quod inventore." />
        </main>
      </div>
    </>
  );
}
