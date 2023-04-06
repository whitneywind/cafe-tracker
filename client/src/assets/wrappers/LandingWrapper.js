import styled from "styled-components"

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
        min-height: 32rem;
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
        margin: 0 auto;
        max-width: 65%;
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

export default Wrapper;