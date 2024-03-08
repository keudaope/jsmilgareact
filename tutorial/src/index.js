import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// function Tervehdys() {
//   return <h2>Ensimmäinen komponenttini</h2>;
// }

// const Tervehdys = () => {
//   return React.createElement("h2", {}, "hei maailma");
// };

// function Tervehdys() {
//   return (
//     <div>
//       <h2>hei maailma</h2>
//     </div>
//   );
// }

// const Tervehdys = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "hello world")
//   );
// };

// function Tervehdys() {
//   return (
//     <>
//       <div className="someValue">
//         <h3>hei ihmiset</h3>
//         <ul>
//           <li>
//             <a href="#">hei maailma</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hei maailma</h2>
//       <input type="text" name="" id="" />
//     </>
//   );
// }

// function Tervehdys() {
//   return <h3>hei ihmiset</h3>;
// }

// function Tervehdys() {
//   return (
//     <div>
//       <Henkilo />
//       <Viesti />
//     </div>
//   );
// }

// const Henkilo = () => <h2>john doe</h2>;
// const Viesti = () => {
//   return <p>tämä on viestini</p>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Tervehdys />);
/* KirjaLista */

function Kirjalista() {
  return (
    <section className="booklist">
      <Kirja />
      <Kirja />
      <Kirja />
      <Kirja />
    </section>
  );
}

const Kirja = () => {
  return (
    <article className="book">
      <Kuva />
      <Otsikko />
      <Kirjoittaja />
    </article>
  );
};

const Kuva = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
    alt="Mielenkiintoisia faktoja uteliaille mielille"
  />
);
const Otsikko = () => {
  return <h2>Mielenkiintoisia faktoja uteliaille mielille</h2>;
};
const Kirjoittaja = () => <h4>Jordan Moore </h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Kirjalista />);
