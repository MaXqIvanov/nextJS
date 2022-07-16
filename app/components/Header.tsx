import Link from "next/link";
import styles from '../components/Header.module.scss';
const Header = () => {
    return (
        <div className={`${styles.header} container d-flex justify-content-center align-items-center`}>
            <div>
                <Link href={'/3'}>Header</Link>
            </div>
        </div>
    );
}

export default Header;