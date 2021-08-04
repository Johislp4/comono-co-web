import React from 'react';
import Link from 'next/link';

const Button = ({url}) => {
    return (
        <>
        <Link href={`${url}`}>
            <a>
            <div className="btn d-flex align-items-center" >
                <img className="arrow" src="/arrow-white.svg" alt="arrow" />
                <div> Descubre más </div>
            </div>
            </a>
        </Link>

        <style jsx>{`
        a{
            color: white;
            font-family:'Lexend Exa', sans-serif;
            font-weight:400;
        }
            .btn{
                padding: 0.5rem 1rem;
                padding-right:0;
                justify-content: flex-end;
                margin-top: 2rem;
                
            }

            .arrow{
                margin-right: 1rem;
                width: 3rem;
                height: 3rem;
            }

        `}</style>

        </>
        
    )
}

export default Button
