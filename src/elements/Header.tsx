// file: src/elements/Header.tsx
import styles from './Header.module.css'

const Header = ({ children }: { children: string }) => {
  return <h2 className={styles.header}>{children}</h2>;
};

export default Header;
