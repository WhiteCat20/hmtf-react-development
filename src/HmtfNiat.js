import React from "react";
import HmtfHero from "./HmtfHero";

function HmtfNiat() {
  return (
    <div className="HmtfNiat">
      <HmtfHero />
      <div className="" id="hmtf-nama">
        <div className="container-nama">
          <h1 id="arti-nama">Arti Nama</h1>
          <div id="def-nama">
            <div className="wrapper" id="harmoni">
              <p>
                <b>/har·mo·ni/ n</b> pernyataan rasa, aksi gagasan, dan minat;
                keselarasan; keserasian: harus ada -- antara irama dan gerak
              </p>
            </div>
            <div className="wrapper" id="manfaat">
              <p>
                <b>/man·fa·at/ n</b> 1) guna; faedah; sumbangan itu banyak --
                nya bagi orang-orang miskin; 2) laba; untung: -- penjualan
                ternaknya berlipat ganda
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <p className="d-inline-block" id="conc-nama">
                Kepengurusan HMTF Harmoni Manfaat 21/22 diharapkan untuk terus
                mampu menyelaraskan kerja sama guna memberikan sebuah
                kemanfaatan kepada seluruh komponen yang terlibat di dalam
                dinamisasi keorganisasian HMTF ITS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HmtfNiat;
