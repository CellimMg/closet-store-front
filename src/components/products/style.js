import styledComponent from "styled-components";

export const SectionTitle = styledComponent.div`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
`;

export const SectionProducts = styledComponent.div`
    height: 190px;    
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;
    margin-bottom: 35px;
    &::-webkit-scrollbar {
        display: none;
    }
`;