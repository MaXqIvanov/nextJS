import Link from "next/link";
import styles from '../components/Header.module.scss';
const Header = () => {
    return (
    <div className={styles.header}>
        <nav className="navbar navbar-expand-xl">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Переключатель навигации">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={styles.search}></div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Все автомобили</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Trade-In</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Что такое Carmart</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">КАСКО</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">FAQ</a>
                    </li>
                    <li className={`nav-item ${styles.svg}`}>
                    <a className={`nav-link ${styles.favorite}`} href="#"></a>
                    </li>
                    <li className={`nav-item ${styles.svg}`}>
                    <a className={`nav-link ${styles.img_car}`} href="#"></a>
                    </li>
                </ul>
                <div className={styles.number}><span>8 812</span>50-11-900</div>
                <div className={styles.btn}><span>Обратный звонок</span></div>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Header;