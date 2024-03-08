#### Kansiorakenne

- node_modules
  Sisältää kaikki sovelluksen edellyttämät riippuvuudet. Tärkeimmät riippuvuudet luetellaan myös package.jsonissa

- julkinen
  Sisältää staattista sisältöä, mukaan lukien index.html (sivumalli)
  - index.html
    - otsikko
    - fontit
    - css
    - favicon
    - id="root" - koko sovelluksemme
- src
  Yksinkertaisimmassa muodossa se on sovelluksemme aivot. Täällä teemme kaiken työmme. src/index.js on JavaScriptin aloituskohta.
- .gitignore
  Määrittää, mitkä tiedostot lähteen ohjauksen (Git) tulee jättää huomiotta

- package.json
  Jokaisella Node.js-projektilla on package.json-tiedosto ja se sisältää tietoa projektistamme, esimerkiksi luettelon riippuvuuksista ja komentosarjaista

- package-lock.json
  Tilannekuva koko riippuvuuspuusta

- README
  Markdown-tiedosto, jossa voit jakaa lisätietoja projektista, kuten rakennusohjeet ja yhteenvedon

#### Poista oletustiedot

- poista src-kansio
- luo src-kansio

  - Luo index.js src-kansion sisälle

- sivupalkki CMD + B
- pikanäppäinasetukset/pikanäppäimet

#### Ensimmäinen komponentti

# Näyttää ihan javascriptiltä (JSX)

function Tervehdys() {
return <h2>Ensimmäinen komponenttini</h2>;
}

# nuolitoiminto toimii myös

const Tervehdys = () => {
return <h2>Ensimmäinen komponenttini</h2>;
};

# Tärkeää tietoa funktiosta

- alkaa isolla kirjaimella
- täytyy palauttaa JSX (html)
- sulje aina tunniste <Tervehdys/>

##### Tyypillinen komponentti

```js
// tuonti tai logiikka

const Tervehdys = () => {
  return <h2>Ensimmäinen komponenttini</h2>;
};
export default Tervehdys;
```

##### Juurikomponentti (vain yksi)

index.js:ssä on yksi komponentti (voi olla monia) --> root

```js
import React from 'react';
import ReactDOM osoitteesta "react-dom/client";

function Tervehdys() {
   return <h2>Ensimmäinen komponenttini</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('juuri'));

root.render(<Tervehdys />);
```

#### Mahdollinen virhe

Jos sinulla on jostain syystä edelleen tämä virhe terminaalissa

```
Moduulia ei löydy: Virhe: Ei voi ratkaista 'path/index.js'
```

Käynnistä vain palvelin uudelleen

- CTRL + C (pysäytä palvelin)
- "npm start" (käynnistä kehityspalvelin)

- Näytä esimerkki funktion nimeämisestä pienellä kirjaimella

#### Extensions and settings.json

- Auto Rename Tag (näytä tästä esimerkki h2--> h3)
- Highlight Matching Tag
- Prettier
  - muotoilee tallennuksen yhteydessä
  - Oletusmuotoilu (kaunimpi - Koodin muotoilija)
  - Näytä setup-esimerkki
    - Settings --> Hakusana format --> on save, on paste
    - Hakusana default formatter --> Prettier
- Emmet - Hakusana emmet --> include languages:
  - javascript / javascriptreact
  - tulee oletuksena
  - näytä otsikko-id-luokka esimerkki
- ES7 Snippets
  - rafce (arrow function exportilla)
    - näytä esimerkki
  - rfce (tavallinen funktio exportilla)
    - näytä esimerkki
  - sama kuin tiedoston nimi (HUOM. Iso alkukirjain)

#### Ensimmäinen komponentti yksityiskohtaisesti

- iso kirjain
- täytyy palauttaa jotain
- JSX-syntaksi (palauttaa html:ää)
  - helpottaa elämäämme
  - kutsutoiminto konepellin alla

index.js

```js JSX:n tilalle
const Tervehdys = () => {
  return React.createElement("h2", {}, "hei maailma");
};
```

```js JSX:n tilalle, monimutkaisemi
function Tervehdys() {
  paluu(
    <div>
      <h2>hei maailma</h2>
    </div>
  );
}

const Tervehdys = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "hello world")
  );
};
```

#### JSX-säännöt

- palauttaa yhden elementin (yksi pääelementti)
  - Näytä esimerkki div:n kanssa ja ilman
  - semantiikkaosio/artikkeli
  - Fragmentti - ryhmitellään elementtejä lisäämättä ylimääräisiä solmuja

```js
return <React.Fragment>...loput return-komennosta</React.Fragment>;

// pikakirjoitus

return <>...loput paluu</>;
```

- camelCase-ominaisuuden nimeämiskäytäntö

```js
return (
   <div tabIndex={1}>
     <button onClick={myFunction}>napsauta minua</button>
     <label htmlFor='name'>Nimi</label>
     <input readOnly={true} id='nimi' />
   </div>
)
// html:ssä
<div tabindex="1">
     <button onclick="myFunction()">napsauta minua</button>
     <label for='name'>Nimi</label>
     <input readonly id='nimi' />
</div>
```

- className classin sijaan

```js
return <div className="someValue">hei</div>;
```

- Sulje jokainen elementti

```js
return <img />;
// tai
return <input />;
```

- muotoilu (return)
  - avaava tagi samalla rivillä kuin return tai ()

function Tervehdys() {
return <h3>hei ihmiset</h3>;
}

```js
function Tervehdys() {
  return (
    <>
      <div className="someValue">
        <h3>hei ihmiset</h3>
        <ul>
          <li>
            <a href="#">hei maailma</a>
          </li>
        </ul>
      </div>
      <h2>hei maailma</h2>
      <input type="text" name="" id="" />
    </>
  );
}
```

#### Nest-komponentit

```js
function Tervehdys() {
  return (
    <div>
      <Henkilö />
      <Viesti />
    </div>
  );
}

const Henkilö = () => <h2>john doe</h2>;
const Viesti = () => {
  return <p>tämä on viestini</p>;
};
```

#### React Developer Tools

-oikea yläkulma

- lisää työkaluja/laajennuksia
- avaa Chromen Web Store
  - React Developer tools

#### Kirjalista (ensimmäinen projekti)

- https://www.amazon.com/Best-Sellers-Books/zgbs/books
- asennusrakenne

```js
tuonti React from 'react';
tuo ReactDOM osoitteesta "react-dom/client";

function BookList() {
   return (
     <section>
       <Kirja />
       <Kirja />
       <Kirja />
       <Kirja />
     </section>
   );
}

const Kirja = () => {
   return (
     <article>
       <Kuva />
       <Otsikko />
       <Kirjoittaja />
     </article>
   );
};

const Kuva = () => <h2>kuvan paikkamerkki</h2>;
const Otsikko = () => {
   palauttaa <h2>kirjan nimi</h2>;
};
const Tekijä = () => <h4>Kirjoittaja</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Kirjalista />);
```

- hakukonetyypissä - "Amazonin myydyimmät kirjat"
  [Amazonin bestsellers](https://www.amazon.com/Best-Sellers-Books/zgbs/books/)
- EI TARVITSE OSTA MITÄÄN!!!
- valitse kirja
- kopioi kuva, otsikko ja tekijä

```js
tuonti React from 'react';
tuo ReactDOM osoitteesta "react-dom/client";

function BookList() {
   return (
     <section>
       <Kirja />
       <Kirja />
       <Kirja />
       <Kirja />
     </section>
   );
}

const Kirja = () => {
   return (
     <article className='book'>
       <Kuva />
       <Otsikko />
       <Kirjoittaja />
     </article>
   );
};

const Kuva = () => (
   <img
     src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
     alt='Mielenkiintoisia faktoja uteliaille mielille'
   />
);
const Otsikko = () => {
   palauttaa <h2>Mielenkiintoisia faktoja uteliaille mielille</h2>;
};
const Tekijä = () => <h4>Jordan Moore </h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Kirjalista />);
```

#### CSS

- luo index.css src - kansiossa

```css
* {
   marginaali: 0;
   pehmuste: 0;
   laatikon koko: border-box;
}

body {
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
     Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   tausta: #f1f5f8;
   väri: #222;
}
```

- Tuo tiedosto ja lisää luokat

```js
tuonti './index.css'; // samassa hakemistossa

function BookList() {
   paluu (
     <section className='booklist'>
       <Kirja />
       <Kirja />
       <Kirja />
       <Kirja />
     </section>
   );
}

const Kirja = () => {
   paluu (
     <article className='book'>
       <Kuva />
       <Otsikko />
       <Kirjoittaja />
     </article>
   );
};
```

- täydellinen css

```css
.booklist {
   leveys: 90vw;
   suurin leveys: 1170 pikseliä;
   marginaali: 5rem auto;
   näyttö: ruudukko;
   rako: 2 rem;
}

@medianäyttö ja (min-leveys: 768px) {
   .booklist {
     grid-template-columns: toista(3, 1fr);
   }
}
.book {
   tausta: #fff;
   raja-säde: 1rem;
   pehmuste: 2rem;
   tekstin tasaus: keskellä;
}
.book img {
   leveys: 100 %;
   esine-sovitus: kansi;
}
.book h2 {
   marginaali yläosa: 1rem;
   fontin koko: 1 rem;
}
```

#### Paikalliset kuvat (public kansio)

- ulkoiset kuvat (isännöity eri palvelimella) - tarvitset vain URL-osoitteen
- paikalliset kuvat (julkinen kansio) - vähemmän suorituskykyisiä
- paikalliset kuvat (src-kansio) - parempi ratkaisu omaisuudelle,
  koska konepellin alla ne optimoidaan.

- tallenna kuva (Tallenna kuva nimellä...)
- Luo kuvakansio julkisesti
- kopioi/liitä kuva
- nimeä uudelleen (valinnainen)
- korvaa URL-osoite src:ssä - './images/imageName.extension'
- './', koska resurssit ovat samalla palvelimella

```js
const Kuva = () => (
  <img
    src="./images/book-1.jpg"
    alt="Mielenkiintoisia faktoja uteliaille mielille"
  />
);
```

- mitä tahansa omaisuutta sijoitamme julkisesti - heti saatavilla
- domain(localhost)/resurssi

#### JSX - CSS (inline-tyylit)

- tyylin rekvisiitta
- {} JSX:ssä tarkoittaa paluuta JS Landiin
- arvo on objekti, jossa on avain/arvo-parit - isoilla kirjaimilla ja ''

```js
const Tekijä = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    Jordan Moore
  </h4>
);
```

- css-säännöt ovat edelleen voimassa (inline vs ulkoinen css)

```css
.book h4 {
   /* ei toimi */
   väri punainen;
   /* toimii */
   kirjainväli: 2px;
}
```

- ulkoiset kirjastot käyttävät sisäistä css:ää,
  joten jos haluat tehdä joitain muutoksia,
  viittaa kirjaston asiakirjat ja elementit -välilehteen

- vaihtoehtoinen vaihtoehto

```js
const Tekijä = () => {
  const inlineHeadingStyles = {
    väri: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};
```

- PÄÄOSIN USEITA LÄHESTYMISTAVOJA SAATAVILLA!!!
- NIIN KUN TULOS ON SAMA, ON TODELLA ALAS VALMISTELUA !!!!

#### JSX - Javascript

- heijastaa yksittäinen kirjakomponentti (henkilökohtainen valinta)
- poista inline css

```js
const Kirja = () => {
  paluu(
    <article className="book">
      <img
        src="./images/book-1.jpg"
        alt="Mielenkiintoisia faktoja uteliaille mielille"
      />
      <h2>Mielenkiintoisia faktoja uteliaille mielille</h2>
      <h4>Jordan Moore </h4>
    </article>
  );
};
```

```css
.book h4 {
   väri: #617d98;
   fontin koko: 0,75 rem;
   marginaali yläosa: 0,5rem;
   kirjainväli: 2px;
}
```

- {} JSX:ssä tarkoittaa paluuta JS Landiin
- sisällä olevan arvon on oltava lauseke (palautusarvo),
  ei voi olla lausunto

```js
const author = "Jordan Moore";
const Kirja = () => {
  const title = "Mielenkiintoisia faktoja uteliaille mielipiteille ss";
  paluu(
    <article className="book">
      <img
        src="./images/book-1.jpg"
        alt="Mielenkiintoisia faktoja uteliaille mielille"
      />
      <h2>{title}</h2>

      <h4>{author.toUpperCase()} </h4>
      {/* <p>{oleta x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};
```

- vaihda rivikommentti Muokkaa/Vaihda rivikommenttia

#### Rekvisiitta - Alkuasetukset

- Refaktoroi/siivoa

```js
const author = "Jordan Moore";
const title = "Mielenkiintoisia faktoja uteliaille mielille";
const img = "./images/book-1.jpg";

function BookList() {
  paluu(
    <section className="booklist">
      <Kirja />
      <Kirja />
    </section>
  );
}
const Kirja = () => {
  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{tekijä} </h4>
    </article>
  );
};
```

```js
// parametrit
const someFunc = (param1, param2) => {
  konsoli.log(param1, param2);
};
// argumentit
someFunc("job", "developer");
```

```js
const Kirja = (rekvisiitta) => {
  console.log(props);
  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{tekijä} </h4>
      {console.log(props)}
    </article>
  );
};
```

- rekvisiittaobjekti, rekvisiitta kutsuminen, 'shakeAndBake' on erinomainen vaihtoehto

- passi avain/arvo-pareina
- jos prop on olemassa, se palauttaa arvon, muuten ei arvoa

```js
function BookList() {
  paluu(
    <section className="booklist">
      <Book job="developer" />
      <Kirjan otsikko="satunnainen nimi" number={22} />
    </section>
  );
}
const Kirja = (rekvisiitta) => {
  console.log(props);
  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{tekijä} </h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};
```

```js
function BookList() {
  paluu(
    <section className="booklist">
      <Kirjan kirjoittaja={author} title={title} img={img} />
      <Kirjan nimi={title} img={img} />
    </section>
  );
}
const Kirja = (rekvisiitta) => {
  console.log(props);
  paluu(
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};
```

#### Rekvisiitta - Jokseenkin dynaaminen asennus

- asenna objekti
- Refaktori muuttuu ominaisuuksiin
- kopioi/liitä ja nimeä uudelleen
- hanki arvot toiselle kirjalle
- asennustarvikkeita

```js
const firstBook = {
  Kirjailija: "Jordan Moore",
  otsikko: "Mielenkiintoisia faktoja uteliaille mielille",
  img: "./images/book-1.jpg",
};
const secondBook = {
  kirjoittaja: "James Clear",
  otsikko: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};

function BookList() {
  paluu(
    <section className="booklist">
      <Kirja
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Kirja
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}
const Kirja = (rekvisiitta) => {
  console.log(props);
  paluu(
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};
```

#### Access Props - Useita lähestymistapoja

- ei ole oikeaa tai väärää - jälleen etusija !!!

- Rakennemuutos (objekti)
  [JS Nuggets - Destructuring (objekti)](https://www.youtube.com/watch?v=i4vhNKihfto&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=8&t=1s)

- Vanilla JS:n rakennemuutos
- säästää aikaa/kirjoitusta
- vedä ominaisuudet pois
- ei tarvitse viitata objektiin enää

```js
const someObject = {
  nimi: "John",
  työ: "kehittäjä",
  sijainti: "florida",
};

konsoli.log(jokinObject.name);
const { nimi, työ } = jokinObjekti;
console.log(job);
```

- ei tarvita kaikkia props.propName
- sisäosan vaurioituminen

```js
const Kirja = (rekvisiitta) => {
  const { img, otsikko, kirjoittaja } = rekvisiitta;
  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{tekijä} </h4>
    </article>
  );
};
```

- funktioparametrien (tapauksessamme rekvisiitta) tuhoutuminen
- jos sinulla on console.log(props) - sitä ei määritellä

```js
const Kirja = ({ img, otsikko, kirjoittaja }) => {
  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{tekijä} </h4>
    </article>
  );
};
```

#### Children Prop

- kaikki mitä näytämme komponenttitunnisteiden välissä
- Kurssin aikana käytämme enimmäkseen Context API:ta
- erityinen rekvisiitta, on oltava "lapsia"
- voidaan sijoittaa mihin tahansa JSX: ään

```js
function BookList() {
   paluu (
     <section className='booklist'>
       <Kirja
         author={firstBook.author}
         title={firstBook.title}
         img={firstBook.img}
       >
         <p>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
           repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
         </p>
         <button>napsauta minua</button>
         </Book>
       <Kirja
         author={secondBook.author}
         title={secondBook.title}
         img={secondBook.img}
       />
     </section>
   );
}

const Kirja = ({ img, otsikko, kirjoittaja, lapset }) => {
   // loput logiikasta
};
const Kirja = (rekvisiitta) => {
   const { img, otsikko, kirjoittaja, lapset } = rekvisiitta;
   console.log(props);
   paluu (
     <article className='book'>
       <img src={img} alt={title} />
       <h2>{title}</h2>
       <h4>{tekijä} </h4>
       {lapset}
     </article>
   );
};
```

- valinnainen

```css
@medianäyttö ja (min-leveys: 768px) {
  .booklist {
    grid-template-columns: toista(3, 1fr);
    kohdista-kohteet: aloitus;
  }
}
.book p {
  marginaali: 1rem 0 0, 5rem;
}
```

#### Yksinkertainen luettelo

- [Javascript Nuggets - kartta ](https://www.youtube.com/watch?v=80KX6aD9R7M&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=1)

- reaktori

```js
const kirjat = [
  {
    Kirjailija: "Jordan Moore",
    otsikko: "Mielenkiintoisia faktoja uteliaille mielille",
    img: "./images/book-1.jpg",
  },
  {
    kirjoittaja: "James Clear",
    otsikko: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

function BookList() {
  return <section className="booklist"></section>;
}

const Kirja = (rekvisiitta) => {
  const { img, otsikko, kirjoittaja } = rekvisiitta;

  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{tekijä} </h4>
    </article>
  );
};
```

- ei voi renderöidä objekteja Reactissa

```js
function BookList() {
  return <section className="booklist">{books}</section>;
}
```

- map - luo uuden taulukon kutsumalla funktiota jokaiselle taulukon elementille.

```js
const names = ['john', 'peter', 'susan'];
const newNames = nimet.map((nimi) => {
   console.log(nimi);
   palauttaa <h1>{nimi}</h1>;
});

function BookList() {
   return <section className='booklist'>{newNames}</section>;
}
```

#### Oikea lista

- poistaa nimet ja uudet nimet

```js
function BookList() {
  paluu(
    <section className="booklist">
      {books.map((kirja) => {
        konsoli.loki(kirja);

        // return 'hei';
        paluu(
          <div>
            <h2>{book.title}</h2>
          </div>
        );
      })}
    </section>
  );
}
```

- renderöintikomponentti
- ohita kiinteistöt yksitellen

```js
function BookList() {
  paluu(
    <section className="booklist">
      {books.map((kirja) => {
        konsoli.loki(kirja);
        const { img, otsikko, kirjoittaja } = kirja;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}
```

#### Key Prop

- Yleensä se tulee olemaan id

```js
const kirjat = [
  {
    Kirjailija: "Jordan Moore",
    otsikko: "Mielenkiintoisia faktoja uteliaille mielille",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    kirjoittaja: "James Clear",
    otsikko: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

function BookList() {
  paluu(
    <section className="booklist">
      {books.map((kirja) => {
        konsoli.loki(kirja);
        const { img, otsikko, kirjoittaja, tunnus } = kirja;
        return <Book book={book} key={id} />;
      })}
    </section>
  );
}
```

- näet indeksin, mutta se ei ole suositeltavaa, jos luettelo muuttuu

```js
function BookList() {
  paluu(
    <section className="booklist">
      {books.map((kirja, hakemisto) => {
        konsoli.loki(kirja);
        const { img, otsikko, kirjoittaja, tunnus } = kirja;
        return <Book book={book} key={index} />;
      })}
    </section>
  );
}
```

#### Ohita koko esine

- renderöintikomponentti
- ohittaa koko kohteen
- Rakennemuutos (objekti)
  [JS Nuggets - Destructuring (objekti)](https://www.youtube.com/watch?v=i4vhNKihfto&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=8&t=1s)

```js
function BookList() {
  paluu(
    <section className="booklist">
      {books.map((kirja) => {
        konsoli.loki(kirja);
        const { img, otsikko, kirjoittaja } = kirja;
        return <Book book={book} />;
      })}
    </section>
  );
}

const Kirja = (rekvisiitta) => {
  const { img, otsikko, kirjoittaja } = props.book;

  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{tekijä} </h4>
    </article>
  );
};
```

- vaihtoehto

```js
const Kirja = ({ kirja: { img, otsikko, kirjoittaja } }) => {
  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{tekijä} </h4>
    </article>
  );
};
```

#### Henkilökohtainen mieltymys

- käytä levitysoperaattoria (...) - kopioi arvot
- Spread-operaattori
- [JS Nuggets - Spread Operator](https://www.youtube.com/watch?v=4Zyr5a3m0Fc&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=10)

```js
const ystävät = ["john", "peter", "anna"];
const newFriends = [...ystävät, "susan"];
console.log(ystävät);
console.log(newFriends);
const someObject = {
  nimi: "John",
  työ: "kehittäjä",
};
// KOPIO EI VIITE !!!!
const newObject = { ...jokuObject, sijainti: "florida" };
console.log(jokuObject);
console.log(newObject);
```

```js
function BookList() {
  paluu(
    <section className="booklist">
      {books.map((kirja) => {
        return <Kirja {...kirja} key={book.id} />;
      })}
    </section>
  );
}

const Kirja = (rekvisiitta) => {
  const { img, otsikko, kirjoittaja } = rekvisiitta;
  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{tekijä} </h4>
    </article>
  );
};
const Kirja = ({ img, otsikko, kirjoittaja }) => {
  // loput koodista
};
```

#### Tapahtumat – perusteet

- Vanilla JS

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  // pääsy tapahtumaobjektiin
  // tee jotain, kun tapahtuma käynnistyy
});
```

- samanlainen lähestymistapa
- elementti, tapahtuma, toiminto
- jälleen camelCase

```js
const TapahtumaEsimerkit = () => {
   const handleButtonClick = () => {
     alert('kahvapainikkeen napsautus');
   };
   paluu (
     <osio>
       <button onClick={handleButtonClick}>napsauta minua</button>
     </section>
   );
};
```

- [React Events](https://reactjs.org/docs/events.html)
- niitä ei tarvitse muistaa (idea on sama)
- yleisin
  - onClick (napsauta tapahtumia)
  - onSubmit (lähetä lomake)
  - onChange (syötteen muutos)

```js
function BookList() {
   paluu (
     <section className='booklist'>
       <Tapahtumaesimerkkejä />
       {books.map((kirja) => {
         return <Kirja {...kirja} key={book.id} />;
       })}
     </section>
   );
}

const TapahtumaEsimerkit = () => {
   const handleFormInput = () => {
     console.log('käsitellä lomakkeen syöttöä');
   };
   const handleButtonClick = () => {
     alert('kahvapainikkeen napsautus');
   };
   paluu (
     <osio>
       <lomake>
         <h2>Tyypillinen muoto</h2>
         <syöttö
           type='text'
           nimi='esimerkki'
           onChange={handleFormInput}
           style={{ margin: '1rem 0' }}
         />
       </form>
       <button onClick={handleButtonClick}>napsauta minua</button>
     </section>
   );
};
```

#### Tapahtumaobjektin ja lomakkeen lähetys

```js
const TapahtumaEsimerkit = () => {
   const handleFormInput = (e) => {
     console.log(e);
     // e.target - elementti
     console.log(`Syötteen nimi : ${e.target.name}`);
     console.log(`Syötearvo : ${e.target.value}`);
     // console.log('käsitellä lomakkeen syöttöä');
   };
   const handleButtonClick = () => {
     alert('kahvapainikkeen napsautus');
   };
   const handleFormSubmission = (e) => {
     e.preventDefault();
     console.log('lomake lähetetty');
   };
   paluu (
     <osio>
       {/* lisää onSubmit Event Handler */}
       <form onSubmit={handleFormSubmission}>
         <h2>Tyypillinen muoto</h2>
         <syöttö
           type='text'
           nimi='esimerkki'
           onChange={handleFormInput}
           style={{ margin: '1rem 0' }}
         />
         {/* lisäyspainike type='submit' */}
         <button type='submit'>lähetä lomake</button>
       </form>
       <button onClick={handleButtonClick}>napsauta minua</button>
     </section>
   );
};
```

- vaihtoehtoinen lähestymistapa

```js
<button type="submit" onClick={handleFormSubmission}>
  Lähetä lomake
</button>
```

#### Mielekranaatti

- vaihtoehtoinen lähestymistapa
- välittää anonyymi toiminto (tässä tapauksessa nuolitoiminto)
- yksi vuoraus - vähemmän koodia

```js
const TapahtumaEsimerkit = () => {
   paluu (
     <osio>
       <button onClick={() => console.log('hello there')}>napsauta minua</button>
     </section>
   );
};
```

- voi myös käyttää tapahtumaobjektia

```js
const TapahtumaEsimerkit = () => {
   paluu (
     <osio>
       <lomake>
         <h2>Tyypillinen muoto</h2>
         <syöttö
           type='text'
           nimi='esimerkki'
           onChange={(e) => console.log(e.target.value)}
           style={{ margin: '1rem 0' }}
         />
       </form>
       <button onClick={() => console.log('sinä napsautit minua')}>napsauta minua</button>
     </section>
   );
};
```

#### Mielekranaatti #2

- Poista EventsExamples
- komponentit ovat oletusarvoisesti riippumattomia

```js
function BookList() {
  paluu(
    <section className="booklist">
      {books.map((kirja) => {
        return <Kirja {...kirja} key={book.id} />;
      })}
    </section>
  );
}

const Kirja = (rekvisiitta) => {
  const { img, otsikko, kirjoittaja } = rekvisiitta;
  const displayTitle = () => {
    console.log(title);
  };

  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>näytä otsikko</button>
      <h4>{tekijä} </h4>
    </article>
  );
};
```

-poistopainike

#### Poraus

- reagoida tietovirtaan - voi siirtää vain rekvisiitta alas
- vaihtoehdot Context API, redux, muut tilakirjastot

```js
function BookList() {
  const someValue = "shakeAndBake";
  const displayValue = () => {
    konsoli.log(jokuArvo);
  };
  paluu(
    <section className="booklist">
      {books.map((kirja) => {
        return <Kirjan {...kirja} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
}

const Kirja = (rekvisiitta) => {
  const { img, title, author, displayValue } = rekvisiitta;

  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>napsauta minua</button>
      <h4>{tekijä}</h4>
    </article>
  );
};
```

#### Monimutkaisempi esimerkki

- alkuasennus
- Luo getBook-toiminto kirjaluetteloon
- hyväksyy id:n argumenttina ja löytää kirjan
- [Javascript Nuggets - Filter and Find](https://www.youtube.com/watch?v=KeYxsev737s&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=4)
- Siirrä toiminto alas Book Componentille ja käynnistä painikkeen napsautus
- Kirjakomponentin tuhoutumistunnuksessa ja funktiossa
- käynnistä toiminto, kun käyttäjä napsauttaa painiketta, välitä tunnus
- tavoite: sinun pitäisi nähdä sama kirja konsolissa

```js
const BookList = () => {
  const getBook = (id) => {
    const kirja = kirjat.etsi((kirja) => kirja.id === id);
    konsoli.loki(kirja);
  };

  paluu(
    <section className="booklist">
      {books.map((kirja) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Kirja = (rekvisiitta) => {
  const { img, title, author, getBook, id } = rekvisiitta;
  // console.log(props);

  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* tämä ei toimi */}
      <button onClick={getBook(id)}>näytä otsikko</button>
      <h4>{tekijä}</h4>
    </article>
  );
};
```

- kaksi korjausta
- ensimmäinen vaihtoehto - asennuskääre

```js
const Kirja = (rekvisiitta) => {
  const { img, title, author, getBook, id } = rekvisiitta;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>näytä otsikko</button>
      <h4>{tekijä}</h4>
    </article>
  );
};
```

- kaksi korjausta
- toinen vaihtoehto - kääri anonyymi nuolitoiminto

```js
const Kirja = (rekvisiitta) => {
  const { img, title, author, getBook, id } = rekvisiitta;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <button onClick={() => getBook(id)}>näytä otsikko</button>
      <h4>{tekijä}</h4>
    </article>
  );
};
```

#### Tuonti- ja vientilausunnot

- poista kaikki getBook-koodi

```js
function BookList() {
  paluu(
    <section className="booklist">
      {books.map((kirja) => {
        return <Kirja {...kirja} key={book.id} />;
      })}
    </section>
  );
}

const Kirja = (rekvisiitta) => {
  const { img, otsikko, kirjoittaja } = rekvisiitta;

  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{tekijä} </h4>
    </article>
  );
};
```

- määritä kaksi tiedostoa src books.js- ja Book.js-tiedostoihin
- Leikkaa kirjojen joukko index.js:stä
- lisää kirjaan books.js

books.js

```js
const kirjat = [
  {
    Kirjailija: "Jordan Moore",
    otsikko: "Mielenkiintoisia faktoja uteliaille mielille",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    kirjoittaja: "James Clear",
    otsikko: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];
```

- kaksi makua nimeltä ja oletusvienti

  - nimettyjen vientien nimien TÄYTYY vastata
  - oletusviennillä voi nimetä uudelleen, mutta vain yksi tiedostoa kohden

- nimeltä vienti

```js
vienti const kirjat = [
   {
     Kirjailija: "Jordan Moore",
     otsikko: "Mielenkiintoisia faktoja uteliaille mielille",
     img: './images/book-1.jpg',
     id: 1,
   },
   {
     kirjoittaja: "James Clear",
     otsikko: "Atomic Habits",
     img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
     id: 2,
   },
];
```

index.js

```js
tuo { kirjat } osoitteesta './books';
```

- oletusvienti

```js
const Kirja = (rekvisiitta) => {
   const { img, otsikko, kirjoittaja } = rekvisiitta;

   paluu (
     <article className='book'>
       <img src={img} alt={title} />
       <h2>{title}</h2>

       <h4>{tekijä} </h4>
     </article>
   );
};

Vie oletusarvoinen kirja;
```

index.js

```js
tuonti kirja kohteesta './Book';
```

#### Paikalliset kuvat (src-kansio)

- Parempi suorituskyky optimoinnin ansiosta
- lisää joukkoon vielä yksi kirja
- lataa kaikki kolme kuvaa (nimeä uudelleen)
- määritä kuvat kansio src:ssä
- tuo kaikki kolme kuvaa books.js-tiedostoon
- Aseta kuvan ominaisuus yhtä suureksi kuin tuonti
- ja kyllä jokainen kuva vaatii uuden tuonnin

```js
tuo img1 osoitteesta './images/book-1.jpg';
tuo img2 tiedostosta './images/book-2.jpg';
tuo img3 osoitteesta './images/book-3.jpg';

vienti const kirjat = [
   {
     Kirjailija: "Jordan Moore",
     otsikko: "Mielenkiintoisia faktoja uteliaille mielille",
     img: img1,
     id: 1,
   },
   {
     kirjoittaja: "James Clear",
     otsikko: "Atomic Habits",
     img: img2,
     id: 2,
   },
   {
     Kirjailija: "Stephen King",
     otsikko: "Fairy Tale",
     img: img3,
     id: 3,
   },
];
```

#### Haasteita

- asetusnumerot
- älä välitä css:stä
- vihje - indeksi (kartan toinen parametri)

index.js

```js
const BookList = () => {
  paluu(
    <section className="booklist">
      {books.map((kirja, hakemisto) => {
        return <Kirjan {...kirja} key={book.id} number={index} />;
      })}
    </section>
  );
};

const Kirja = (rekvisiitta) => {
  const { img, otsikko, kirjoittaja, numero } = props;

  paluu(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{tekijä}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};
```

index.css

```css
.book {
   tausta: #fff;
   raja-säde: 1rem;
   pehmuste: 2rem;
   tekstin tasaus: keskellä;
   /* aseta suhteellinen */
   asema: suhteellinen;
}

.number {
   sijainti: absoluuttinen;
   alkuun: 0;
   vasen: 0;
   fontin koko: 1 rem;
   pehmuste: 0,75 rem;
   raja-ylä-vasen-säde: 1rem;
   raja-ala-oikea-säde: 1rem;
   tausta: #c35600;
   väri: #fff;
}
```

#### Lisää otsikko

- lisää otsikko sovelluksellemme (css valinnainen)
- muuta sivun otsikkoa

index.js

```js
function BookList() {
  paluu(
    <>
      <h1>Amazonin myydyimmät tuotteet</h1>
      <section className="booklist">
        {books.map((kirja) => {
          return <Kirja {...kirja} key={book.id} />;
        })}
      </section>
    </>
  );
}
```

index.css

```css
h1 {
   tekstin tasaus: keskellä;
   marginaali yläosa: 4rem;
   tekstin muunnos: isoilla kirjaimilla;
}
```

public/index.html

```html
<title>Myydyimmät</title>
```

#### Rakenna tuotantosovellus

- Pysäytä kehityspalvelin "ctrl + c"
- suorita "npm run build"
- build-kansio luodaan

#### Netlify

- Kirjaudu
- Lisää uusi sivusto / ota käyttöön manuaalisesti
- Valitse rakennuskansio
- nimeä sivusto uudelleen - sivuston asetukset/muuta sivuston nimeä

#### Create-React-App Boilerplate (src)

- index.js

```js
tuonti React from 'react';
tuo ReactDOM osoitteesta "react-dom/client";

// tyylit (yleensä globaalit)
tuonti './index.css';

// käytäntö nimetä se App ja asetukset erillisessä tiedostossa
tuo sovellus osoitteesta './App';
// tuo raportti web vitals
tuo reportWebVitals osoitteesta './reportWebVitals';

// StrictMode

// StrictMode on työkalu sovelluksen mahdollisten ongelmien korostamiseen.Aktivoi lisätarkistuksia ja varoituksia jälkeläisilleen.Toimii vain kehitysvaiheessa, ei vaikuta tuotannon rakentamiseen. RENDERoi KAHTI!!! Mahdollista poistaa.

const root = ReactDOM.createRoot(document.getElementById('juuri'));
root.render(
   <React.StrictMode>
     <Sovellus />
   </React.StrictMode>
);

// Jos haluat aloittaa suorituskyvyn mittaamisen sovelluksessasi, välitä funktio
// tulosten kirjaamiseen (esimerkiksi: reportWebVitals(console.log))
// tai lähetä analytiikan päätepisteeseen. Lue lisää: https://bit.ly/CRA-vitals
reportWebVitals();
```

- poista src

  - setupTests.js
  - reportWebVitals.js
  - App.test.js

- Ole varovainen useiden css-tiedostojen kanssa

App.js

```js
function App() {
   palauttaa <h1>backroads-sovelluksen</h1>;
}

Vie oletussovellus;
```

- Poista
  - poista logo.svg
  - App.css

#### Vite Docs

(Vite)[https://vitejs.dev/]

#### Vite Install

```sh
npm luo vite@ uusin sovelluksen nimi -- --malli reagoi
npm asennus
npm run dev
```

- http://localhost:5173/

#### Vite Setup

- täytyy käyttää .jsx-laajennusta
- index.html lähteessä julkisen sijaan
- omaisuus edelleen julkisesti
- Index.js:n sijaan on käytettävä main.jsx-tiedostoa
- kehittäjäpalvelimen käynnistäminen - "npm run dev"

- pysy samana - tuonti/vienti, käyttöönotto, omaisuus jne...
