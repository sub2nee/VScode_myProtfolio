import styled from 'styled-components';

const Tag = styled.div`
    color: var(--text-color);

    .tagname {
        color: var(--tagname-text-color);
        margin-right: 0.25rem;
    }

    .tagname_close {
        color: var(--tagname-text-color);
    }

    .attr {
        color: var(--attributename-text-color);
    }

    .attr_value {
        color: var(--attributevalue-text-color);
    }
`;

const TagOpen = props => {
    const attr = props.attr;
    const chkAttr = () => {
        switch (attr) {
            case undefined:
                return <span className="attr">{props.attr}</span>;
            default:
                return (
                    <span className="attr">
                        {props.attr}
                        <span className="tagname">{' ='}</span>
                    </span>
                );
        }
    };
    return (
        <Tag style={{ paddingLeft: `${props.indent * 0.5}em` }}>
            {'<'}
            <span className="tagname">{props.tagname}</span>
            {chkAttr()}
            <span className="attr_value">{props.attrValue}</span>
            {'>'}
        </Tag>
    );
};

const TagClose = props => {
    return (
        <Tag style={{ paddingLeft: `${props.indent * 0.5}em` }}>
            {'</'}
            <span className="tagname_close">{props.tagname}</span>
            {'>'}
        </Tag>
    );
};

export { TagOpen, TagClose };
