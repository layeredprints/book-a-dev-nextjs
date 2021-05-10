import React from 'react';

import Link from 'next/link';

import Icon from 'src/components/Icon';

import { externals } from 'src/config';
import { palette } from 'src/styles/colors';

import { Container, Content, Actions } from './styles';

const Footer = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <img
          src="assets/images/logo.png"
          alt="ballistix-logo"
          width="100"
          height="39"
        />
        <Actions>
          <Link href={externals.facebook}>
            <div>
              <Icon.Facebook color={palette.accent.base} />
            </div>
          </Link>
          <Link href={externals.linkedIn}>
            <div>
              <Icon.LinkedIn color={palette.accent.base} />
            </div>
          </Link>
        </Actions>
      </Content>
    </Container>
  );
};

export default Footer;
