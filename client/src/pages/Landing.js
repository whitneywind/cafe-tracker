import coffeeLogo from "../assets/images/coffee.svg"
import barista from "../assets/images/barista.svg"
import styled from "styled-components"

const Landing = () => {
  return (
    <Wrapper>
        <div className="containing">
            <nav>
                <a href="#"><img src={coffeeLogo} class="logo" alt="logo" /></a>
            </nav>
            <div className="container page">
                <div className="info">
                    <h2>organization for <span>coffeeshop enthusiasts</span></h2>
                    <p>cinnamon strong siphon instant dark espresso whipped mocha pumpkin spice con panna half and half doppio seasonal. trifecta, mug, caffeine barista est fair trade iced. dsoppio latte, ut that, extraction, single origin robust, grounds, shop, steamed frappuccino body, id kopi-luwak, qui froth caramelization arabica fair trade.</p>
                    <button className="btn btn-hero">login/register</button>
                </div>
                <img src={barista} alt="coffeeshop" className="img main-img" />
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
    .containing {
        margin: 1rem 2rem;
    }

    nav {
        width: 90vw;
        max-width: 1120px;
        margin: 0 auto;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .page {
        display: grid;
        align-items: center;
    }

    h2 {
        font-size: 2.2rem;
        letter-spacing: 0.1rem;
    }

    h2 span {
        text-decoration: underline solid #ece7e6;
    }

    .info {
        margin-bottom: 2rem;
    }

    p {
        text-align: justify;
    }

    .main-img {
        width: 70%;
        margin: 0 auto;
    }

    @media (min-width: 850px) {
        .containing {
            margin: 1rem 1.2rem 1rem 2.7rem;
    }
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 4rem;
            margin-top: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`
export default Landing

// <a href="https://iconscout.com/icons/coffee" target="_blank">Coffee Emoji Icon</a> by <a href="https://iconscout.com/contributors/twitter-inc" target="_blank">Twitter Emoji</a>