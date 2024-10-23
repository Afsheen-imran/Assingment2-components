import Link from 'next/link';
import styles from '../Header/header.module.css';
import { TfiAlignJustify } from "react-icons/tfi"; // For the hamburger icon
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img 
          src="https://i.pinimg.com/originals/86/c3/9d/86c39dca1eea747c5de110e20a645287.gif" 
          alt="Pharma Care Logo"
          className={styles.logoImg}
        />
      </div>

      {/* Navigation for Desktop */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div className={styles.mobileMenu}>
        <Sheet>
          <SheetTrigger>
            <TfiAlignJustify size={30} className={styles.menuIcon} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav>
              <ul className={styles.sheetNavList}>
                <li className={styles.sheetNavItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.sheetNavItem}>
                  <Link href="/about">About</Link>
                </li>
                <li className={styles.sheetNavItem}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
