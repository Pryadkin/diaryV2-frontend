"use client"

import { Honk } from "next/font/google";
import cn from 'clsx'
import styles from "./Header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const fonts = Honk({ subsets: ["latin"] });

interface Props {
  links: {
    title: string
    pathName: string
  }[]
}

export const Header = ({links}: Props) => {
  console.log('links', links)
  const path = usePathname()
  const isCurrentPage = (name: string) => path === name

  return (
    <header className={styles.header}>
      <div className={cn(styles.logo, fonts.className)}>MYG</div>

      <div className={styles.buttonWrapper}>
        {links.map(({title, pathName}) => {
          return <Link 
            key={title} 
            href={pathName} 
            className={cn(styles.button, isCurrentPage(pathName) && styles.selectButton)}>
              {title}
          </Link>
        })}
      </div>

      <div className={styles.userWrapper}>
        <div className={styles.userTitle}>User Name</div>
      </div>
    </header>
  );
};
