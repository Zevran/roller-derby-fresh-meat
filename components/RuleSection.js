import React from 'react';
import Markdown from 'react-native-simple-markdown';

export default class RuleSection extends React.Component {

  render() {
    return (
      <Markdown
        styles={markdownStyles}
        rules={this.props.markdownRules}
      >
        {this.props.children}
      </Markdown>
    );
  }
}

const markdownStyles = {
  heading1: {
    fontSize: 24,
    color: 'black',
    marginBottom: 10,
  },
  heading2: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  heading3: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
  },
  link: {
    color: 'pink',
  },
  mailTo: {
    color: 'orange',
  },
  text: {
    color: '#555555',
    marginBottom: 5,
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
  },
  listItemNumber: {
    alignSelf: 'flex-start',
  },
  listItemText: {
    alignSelf: 'flex-start',
    paddingTop: 5,
    marginTop: 3,
  }
}
