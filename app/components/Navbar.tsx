import Link from "next/link";
import styles from '../styles/Home.module.css';
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";

// Navbar component with a link to the home page
const Navbar = () => {
  return (
    <nav className={`${styles.navbar} flexBetween max-container padding-container`}>
      <div className="flex flex-row-reverse p-2">
      <Link href="/">
        {/* Content or logo goes here */}
        HOME
      </Link></div>
      {/* Add the linkedin logo png here and align to the right of the screen*/}
      <div className="flex flex-row-reverse p-2">
        <Link href="https://www.linkedin.com/in/scott-manley-az/">
          <Image src="/images/linkedin.png" alt="linkedin logo" width={25} height={25} />
        </Link></div>
      <div className="flex flex-row-reverse p-2">
        <Link href="https://github.com/scottdavort">
          <Image src="/images/github.png" alt="github logo" width={25} height={25} />
        </Link>
      </div>

      {/* Add the github logo png here */}
    </nav>

  );
}

export default Navbar;