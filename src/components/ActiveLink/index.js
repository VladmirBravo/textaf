import  { cloneElement }  from 'react';
import Link, { LinkProps } from "next/link";
import { useRouter } from 'next/router';


export function ActiveLink ({ children, activeClassName, ...rest }){
    const { asPath } = useRouter();
    //Se a rota/pagina que estamos a acessar for igual ao link então ativamos a class
    const className = asPath === rest.href ? activeClassName : '';
    console.log(activeClassName)
    return(
        <Link legacyBehavior {...rest}>
          {cloneElement(children,{className})}
        </Link>
    )
}