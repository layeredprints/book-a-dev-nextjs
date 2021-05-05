import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { meta } from 'src/config';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { externals } from 'src/config';

import { Container, Content } from './styles';
import Icon from '../Icon';
import { palette } from 'src/styles/colors';

interface Props {
  children: any;
}

const Layout = (props: Props): JSX.Element => {
  const { children } = props;

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Head>
        {/* Device */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Primary Meta Tags */}
        <link rel="icon" href="/favicon.ico" />
        <title>{t('meta.title')}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.domain} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content={meta.domain} />
        <meta property="twitter:image" content={meta.image} />

        {/* Progressive Web App */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content={meta.colors.theme} />
        <meta
          name="apple-mobile-web-app-status-bar"
          content={meta.colors.status}
        />
        <meta
          name="msapplication-navbutton-color"
          content={meta.colors.theme}
        />

        {/* Bots */}
        <meta key="robots" name="robots" content="index, follow" />

        {/* Native App */}
        <meta name="apple-itunes-app" content={meta.app.id} />
      </Head>
      <Container>
        {/* Header */}
        <Header />

        {/* Content */}
        <Content>{children}</Content>

        {/* Footer */}
        <Footer.Container>
          <Footer.Head>
            <li>
              <p>{t('components.footer.label.credits')}</p>
            </li>
          </Footer.Head>
          <Footer.Foot>
            <li>
              <Link href={externals.facebook}>
                {/* :poop: icon needs to be wrapped in a div since href attribute get parsed down and icons cannot have href attributes */}
                <div>
                  <Icon.Facebook color={palette.accent.base} />
                </div>
              </Link>
            </li>
            <li>
              <Link href={externals.linkedIn}>
                {/* :poop: icon needs to be wrapped in a div since href attribute get parsed down and icons cannot have href attributes */}
                <div>
                  <Icon.LinkedIn color={palette.accent.base} />
                </div>
              </Link>
            </li>
          </Footer.Foot>
        </Footer.Container>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
