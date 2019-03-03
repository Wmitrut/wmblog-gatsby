import { css } from "emotion";
import PropTypes from "prop-types";
import { rhythm } from '../utils/typography'
import React from "react";

import {FaTwitter, FaFacebook, FaEnvelope, FaLinkedin} from "react-icons/fa";

import {ShareBlockStandard, ShareButtonIconOnly } from "react-custom-share";

const Share = props => {
  const { url, title, excerpt } = props;

  const customStyles = css`
    flex-basis: 60px;
    height: 60px;
    flex-grow: 0;
  `;

  const shareBlockProps = {
    url: "https://blog.wmitrut.com" + url,
    button: ShareButtonIconOnly,
    buttons: [
      { network: "Facebook", icon: FaFacebook },
      { network: "Twitter", icon: FaTwitter },
      { network: "Email", icon: FaEnvelope },
      { network: "Linkedin", icon: FaLinkedin },
    ],
    
    text: title,
    longtext: excerpt,
    ClassName: customStyles
  };

    return (
        <div>
            <hr style={{marginBottom: rhythm(1),}}/>
            <p style={{marginBottom: 0}}>Compartilhe este post:</p>
            <ShareBlockStandard {...shareBlockProps} />
        </div>
    )
};

Share.PropTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string
};

Share.defaultProps = {
  url: "https://blog.wmitrut.com/",
  title: "Blog do Mitrut",
  excerpt: "Blog escrito e mantido por Wellington Mitrut desenvolvedor, engenheiro de interfaces e músico."
};

export default Share;