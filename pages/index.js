import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {

    static getInitialProps(context) {
        //tego consola.loga nie zobaczymy w przeglądarce, ponieważ istotą ntej metody next.js jest to, że jest rrnderwowany
        // najpierwna serwerze a nie w przeglądrce. wobec tego logi zobaczymy w terminalu intellij
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'Super App'});
            }, 2000);
        });
        return promise;
    }

    render() {
        return (
            <div>
                <h1>The Main page of {this.props.appName}</h1>
                {/*tworze linka do podstrony auth*/}
                <p>Go to: <Link href='/auth'><a>Auth</a></Link></p>
                {/*alternatywna wersja dla przekierowania - użycie Routera i pusha*/}
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>
        );
    }
}

export default IndexPage;

//założeniem next.js jest to, żeby utworzyć folder pages i next domyślnie dopasuje adres w przeglądarce do strony, jaką tworzymy
//w projekcie. Na przykład jeśli mam folder page to główna strona otworzy się i załaduje według zawartości pliku
//index.js (albo o dowolnej innej nazwie) umieszczonego bezpośrednio w folderze pages. Każda podstrona jak na przykłąd auth
//załaduje się po adresem /auth według pliku .js w folderze auth. Analogicznie każda inn astrona będzie dzięki next ładowała się
//na podstawie pliku w danym flderze o tej nazwie, nie trzeba ustawiać żadnych adresów specjalnie jak w klasycznym reakcie

//kolejnym zalozeniem next jest to, że aplikacje są dzięki folderowi pages zbudowane ze stron, a nie komponentów. Ale oczywiscie
//można a nawet powinno się tworzyć te aplikacje z komponentów, bo nadal używa się reacta
//Różnica polega na tym, że tworzymy w pages podstrony i to do tych plików js dodajemy komponenty jako elementy na stronie

//Nie można w next uzywać css modules bo nie ma dostępu do webpacka, tworzymy style wewnatrz danego komponentu wewnatrz tagu style z atrybutem jsx


// WERSJA Z KOMPONENTEM FUNKCYJNYM
//
// import React from 'react';
// import Link from 'next/link';
// import Router from 'next/router';
//
// const indexPage = () => (
//     <div>
//         <h1>The Main page</h1>
//         {/*tworze linka do podstrony auth*/}
//         <p>Go to: <Link href='/auth'><a>Auth</a></Link></p>
//         {/*alternatywna wersja dla przekierowania - użycie Routera i pusha*/}
//         <button onClick={() => Router.push('/auth')}>Go to Auth</button>
//     </div>
// );
//
// export default indexPage;
