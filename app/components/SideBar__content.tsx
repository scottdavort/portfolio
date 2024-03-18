import Link from "next/link";
import styles from '../styles/Home.module.css';

// Navbar component with a link to the home page
const SideBar__content = () => {
  return (
    <nav className={`${styles.sidebar} flexBetween max-container padding-container`}>
    <Link href="/book-meeting">
      <div className="text-white py-2 hover:bg-gray-700 rounded">Book a Meeting</div>
    </Link>
    <Link href="/about">
      <div className="text-white py-2 hover:bg-gray-700 rounded">About</div>
    </Link>
    <Link href="/ask-questions">
      <div className="text-white py-2 hover:bg-gray-700 rounded">Ask Questions</div>
    </Link>
    </nav>
  );
}

export default SideBar__content;