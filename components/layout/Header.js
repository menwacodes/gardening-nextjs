import Link from "next/link";
import classes from "./Header.module.scss";

const Header = () => {
    return (
        <header className={ classes.header }>
            <div className={ classes.header__logo }>
                Gardening
            </div>
            <nav className={ classes.header__nav }>
                <ul className={ classes.header__nav__items }>
                    <li>
                        <Link className={ classes.header__nav__item } href={ "/gardening/flowers" }>
                            Flowers
                        </Link>
                    </li>
                    <li className={ classes.header__nav__item }>
                        <Link className={ classes.header__nav__item } href={ "/gardening/food" }>
                            Food
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;