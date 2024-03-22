import Link from "next/link";
import styles from '../styles/Home.module.css';

// Navbar component with a link to the home page
const SideBar__content = () => {
  return (
    <nav className={`${styles.sidebar} flexBetween max-container padding-container`}>

    <Link href="/ask-questions">
      <div className="text-white py-2 hover:bg-gray-700 rounded">Virtual Interview</div>
    </Link>
    <Link href="/field-marketing">
      <div className="text-white py-2 hover:bg-gray-700 rounded">Field Marketing</div>
    </Link>
    <Link href="/product-marketing">
      <div className="text-white py-2 hover:bg-gray-700 rounded">Product Marketing</div>
    </Link>
    <Link href="/business-influencers">
      <div className="text-white py-2 hover:bg-gray-700 rounded">Business Influencers</div>
    </Link>
    <Link href="/product-marketing">
      <div className="text-white py-2 hover:bg-gray-700 rounded">Sales</div>
    </Link>
    <Link href="/about">
      <div className="text-white py-2 hover:bg-gray-700 rounded">About</div>
    </Link>
    </nav>
  );
}

export default SideBar__content;