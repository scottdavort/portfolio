// Assuming you're using the same CSS module, adjust import path if needed
import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} flexBetween max-container padding-container`} >
        {/* Footer content goes here */}
        <p>© 2024 Scott's Website</p>
    </footer>
  );
}

export default Footer;
