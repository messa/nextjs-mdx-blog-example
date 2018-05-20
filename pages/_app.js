import App, {Container} from 'next/app'
import React from 'react'
import PageLayout from '../components/PageLayout'

export default class MyApp extends App {

  render () {
    const { Component, pageProps } = this.props
    const { pathname } = this.props.router
    return (
      <Container>
        <PageLayout pathname={pathname}>
          <Component {...pageProps} />
        </PageLayout>
      </Container>
    )
  }

}
