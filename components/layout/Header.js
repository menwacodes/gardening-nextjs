import {signOutUser} from "@/store/reducers/userReducer";
import Link from "next/link";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "next-auth/react";

import classes from "./Header.module.scss";

const Header = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <header className={ classes.header }>
            <div className={ classes.header__logo }>
                <Link href={ "/gardening/food" }>
                    Gardening
                </Link>
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
                    { user && !user.auth &&
                        <li className={ classes.header__nav__item }>
                            <Link className={ classes.header__nav__item } href={ "/users/login" }>
                                Login
                            </Link>
                        </li>
                    }
                    {
                        user && user.auth &&
                        <li className={ classes.header__nav__item }>
                            <Link
                                className={ classes.header__nav__item } href={ "#" }
                                onClick={() => {
                                    signOut({callbackUrl: "/"});
                                }}
                            >
                                Logout
                            </Link>
                        </li>
                    }
                    <Link className={ classes.header__nav__item } href={ "/admin-page" }>
                                Admin
                            </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;