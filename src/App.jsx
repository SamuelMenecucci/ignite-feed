import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Samuel Menecucci"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure voluptatem assumenda? Ex assumenda suscipit possimus voluptas, laborum ipsum, alias totam repellendus eaque unde officiis aliquid placeat explicabo quod inventore."
      />
      <Post content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure voluptatem assumenda? Ex assumenda suscipit possimus voluptas, laborum ipsum, alias totam repellendus eaque unde officiis aliquid placeat explicabo quod inventore." />
    </>
  );
}
