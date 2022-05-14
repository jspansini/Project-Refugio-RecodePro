import galera from "../midia/galera.PNG";

const Indexhome = () => {
  return (
    <div className="app-header">
      <header>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "white" }}
        >
          <div className="jumb">
            <p className="frasepreta" style={{ color: "rgb(0,0,0)" }}>
              Para os refugiados, recomeçar não é uma opção.
              <br></br>
              É a única escolha. 
              <br></br>
              Para nós, ajudar é uma oportunidade!
            </p>
          </div>
        </div>
        <div className="index">
          <div className="bvd">
            <div className="text-center displayz">
              <h1>
                Welcome <br /> Bien venido(a) <br /> أهلا بك <br /> Bienvenue{" "}
                <br /> Bem Vindo(a)
              </h1>
            </div>
          </div>
          <div>
            <img src={galera} alt="galera" className="pessoasimg" />
          </div>

        </div>
      </header>

      <main className="bgprin">
        <section className="section">
          <article>
            <h1 className="tituloPrincipal">Dádivas</h1>
            <p>
              Nosso site busca antes de tudo ajudar refugiados, pessoas que por
              motivos extremos precisaram deixar seu país e pedir abrigo a
              outro, a realidade que os cercam é aterradora e, mesmo chegando a
              um destino seguro, suas preocupações continuam, pois apesar de
              tudo não há lugar para se estabelecerem de imediato, o que leva a
              uma série de outros problemas. Por esses motivos suas dádivas se
              fazem necessárias, qualquer ajuda é bem vinda não importa se é
              grande ou pequena, ela fará diferença.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Indexhome;
