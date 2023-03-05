import {useRouter} from "next/router";
import Link from "next/link";
import styles from './navigation.module.css'

const LINKS = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    }
]


function NavAnchor({path, name}: { path: string; name: string }) {
    return (
        <Link className={styles.navAnchor} href={path}>{name}</Link>
    )
}

export default function Navigation() {
    const {pathname} = useRouter();

    return (
        <nav>
            <div className={styles.navegation}>
                <ul className={styles.list}>
                    {LINKS.map(({name, path}) => (
                        <li key={path}>
                            {path === pathname ? <span>{name}</span> : <NavAnchor path={path} name={name}/>}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}