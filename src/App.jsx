import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bruno"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ut facere modi cupiditate deserunt perspiciatis repellat exercitationem odio et veniam nemo, voluptatum a aperiam. Voluptate non expedita molestiae soluta impedit?"
          />
          <Post
            author="Caio"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iure eos atque aut earum eveniet voluptatibus modi, repellendus quidem pariatur! Nobis eos consequuntur nemo at ducimus exercitationem deserunt aliquid perspiciatis."
          />
        </main>
      </div>
    </div>
  );
}
