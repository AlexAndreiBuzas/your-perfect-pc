import './assets/App.css';
import './assets/Filter.css';
import colorfulBackground from "./assets/Colorful Background.svg";
import gamingPC from "./assets/gaming-pc.png";
import arrow1 from "./assets/Arrow.png";
import FilterComponent from "./Filter";

function App() {
    return (
        <Display {...displayData} />
    );
}

export default App;

function Display(props) {
    const {
        intro,
        x1StP,
        x2NdP,
        x3RdP,
        navBarProps,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="display">
                <div className="main-page">

                    <div className="overlap-group8">
                        <img className="colorful-background"
                             src={colorfulBackground}
                             alt="Colorful Background"
                        />

                        <div className="background"/>

                        <div className="top">
                            <img className="gaming-pc"
                                 src={gamingPC}
                                 alt="Gaming PC"
                            />

                            <h1 className="intro inter-semi-bold-black-36px">
                                {intro}
                            </h1>
                        </div>


                        <BuildBTN />
                    </div>

                    <div className="description inter-normal-black-20px">
                        <p className="x1-st-p">
                            {x1StP}
                        </p>

                        <p className="x2-nd-p">
                            {x2NdP}
                        </p>

                        <p className="x3-rd-p">
                            {x3RdP}
                        </p>
                    </div>
                </div>

                <NavBar>{navBarProps.children}</NavBar>

                <FilterComponent />

            </div>
        </div>
    );
}

function BuildBTN() {
    return (
        <div className="build-btn">
            <div className="build-now inter-normal-concrete-24px">Build Now</div>

            <img className="arrow-2"
                 src={arrow1}
                 alt="Arrow"
            />
        </div>
    );
}

function NavBar(props) {
    const {children} = props;

    return (
        <div className="nav-bar">
            <div className="your-perfect-pc inter-semi-bold-white-36px">{children}</div>
        </div>
    );
}

const navBarData = {
    children: "YourPerfectPC",
};

const displayData = {
    intro: "Bun venit pe site-ul nostru, unde îți poți personaliza propriul PC!",
    x1StP: "Aici poți configura sistemul tău cu exact specificațiile de care ai nevoie pentru a satisface toate nevoile tale.",
    x2NdP: "Cu noi, nu trebuie să fii un expert în IT pentru a-ți configura propriul PC. Avem un sistem intuitiv și ușor de folosit, astfel încât să poți alege cu ușurință fiecare componentă dorită și să îți personalizezi sistemul după nevoile tale.",
    x3RdP: "În primul rând, poți alege tipul de procesor, memorie RAM, placa de bază, sursa de alimentare și unitatea de stocare pe care le dorești. De asemenea, poți selecta placa video potrivită nevoilor tale, fie că este vorba despre gaming, design grafic sau alte activități ce necesită o performanță ridicată.",
    navBarProps: navBarData,
};
