import Link from "next/link";
import styles from '../styles/Home.module.css';

// Navbar component with a link to the home page
const Navbar = () => {
  return (
    <nav className={`${styles.navbar} flexBetween max-container padding-container`}>
        <Link href="/">
            {/* Content or logo goes here */}
            NAVBAR
        </Link>
    </nav>
  );
}

export default Navbar;