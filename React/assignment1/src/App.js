import React, { Component } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Menu from './Menu'

class App extends Component {
  render() {
    const articles = [
      {title: 'Hello WatchKit',
       body: 'Last month Apple released the anticipated Watchkit Framework for developers in the form of iOS 8.2 beta SDK realese. The WatchKit framework enambles the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.',
       comments: 12,
       likes: 124},
      {title: 'Introduction to Swift',
       body: 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fiarly new language and still in development but it clearly reflexts the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.',
       comments: 15,
       likes: 45}
    ]

    return (
      <div>
        <Menu />
        <Header />
        <MainContent articleItems={articles} />
      </div>
    )
  }
}

export default App;

