import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#F7F2F2',
    fontColor: "#000",
};

export const darkTheme = {
    body: "#000",
    fontColor: "#fff",
    gridItem: "#353535",
    gridItemBg: "none",
    indicatorPosition: "absolute",
    indicatorBg: "linear-gradient(to bottom, #444, #222)",
    indicatorShadow: "0 8px 40px rgba(0, 0, 0, 0.5)",
    toggleBg: "linear-gradient(to bottom, #428ABC, #6348A0)",
    toggleRight: "60px",
    logoTextMultiply: "multiply",
    logoTextColor: "#fff",
    logoTextBg: "#000",
    headerMenuBg: "#383434",
    buttonColor: "#4B4848",
    buttonHover: "#5D5A5A",
    transitionToggle: "all 800ms ease 0s",
    toggleRightMedia720: "40px",
};

export const GlobalStyle = createGlobalStyle`

    * {
        transition: ${(props) => props.theme.transitionToggle};
    }

    .header__logo-text {
        mix-blend-mode: ${(props) => props.theme.logoTextMultiply};
        color: ${(props) => props.theme.logoTextColor};
        background-color: ${(props) => props.theme.logoTextBg};
    }

    .header__menu-container {
        background-color: ${(props) => props.theme.headerMenuBg};
    }

    .header__menu-item:hover,
    .more-button:hover {
        background-color: ${(props) => props.theme.buttonHover};
    }

    body {

        background-color: ${(props) => props.theme.body};

    }

    .content__grid-item,
    .modal__content,
    .project__content {
        background-color: ${(props) => props.theme.gridItem};
        color: ${(props) => props.theme.fontColor};
    }

    .more-button {
        background-color: ${(props) => props.theme.buttonColor};
        color: ${(props) => props.theme.fontColor};
    }

    .translation-box,
    .work-box,
    .new-project {
        background-image: ${(props) => props.theme.gridItemBg};
    }

    .text-3xl {
        color: ${(props) => props.theme.logoTextColor};
    }

    .indicator {
        position: ${(props) => props.theme.indicatorPosition};
        background: ${(props) => props.theme.indicatorBg};
        box-shadow: ${(props) => props.theme.indicatorShadow};
        left: ${(props) => props.theme.toggleRight};
        transition: ${(props) => props.theme.transitionToggle};
    }

    #toggle {
        background: ${(props) => props.theme.toggleBg};
    }

    @media screen and (max-width:720px) {
        .indicator {
            left: ${(props) => props.theme.toggleRightMedia720};
        }
    }
    
`;