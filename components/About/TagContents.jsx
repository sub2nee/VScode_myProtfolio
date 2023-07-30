import styled from 'styled-components';

const TagContainer = styled.div`
    padding-left: 0.5em;
    font-family: 'SUITE-Regular';
`;

const TagContents = props => {
    return (
        <TagContainer style={{ paddingLeft: `${props.indent * 0.5}em` }}>
            {props.children}
        </TagContainer>
    );
};

export default TagContents;
