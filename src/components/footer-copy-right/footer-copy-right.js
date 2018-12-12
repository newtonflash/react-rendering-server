import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const CopyRight = styled.div`
    background:black,
    padding: 40px;
`;

const FooterCopyRight = props => {
    const { usageTermsLink, privacyLink, year, copyrightLink } = props;
    const copyRightTxt = copyrightLink.replace("{year}", year);

    return (
        <CopyRight>
            <p className='copyRight__text'>{copyRightTxt}</p>
            <p className='copyRight__link'>
                <a
                    className='copyRight__link__node'
                    href={privacyLink.linkUrl}
                    target={(privacyLink.target && "_blank") || ""}
                    rel={privacyLink.target ? "noopener" : ""}
                >
                    {privacyLink.linkText}
                </a>
                <a
                    className='copyRight__link__node copyRight__link__node--last'
                    href={usageTermsLink.linkUrl}
                    target={(usageTermsLink.target && "_blank") || ""}
                    rel={privacyLink.target ? "noopener" : ""}
                >
                    {usageTermsLink.linkText}
                </a>
            </p>
        </CopyRight>
    );
};

FooterCopyRight.defaultProps = {
    copyrightLink: "",
    year: "",
    usageTermsLink: {},
    privacyLink: {}
};

FooterCopyRight.propTypes = {
    copyrightLink: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    usageTermsLink: PropTypes.object.isRequired,
    privacyLink: PropTypes.object.isRequired
};

export default FooterCopyRight;
