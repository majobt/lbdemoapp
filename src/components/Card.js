import React from 'react';

const Card = ({ key, id, qrcode, firstname, lastname, url}  ) => {

  return (
    <article class="fl w-20 h5 w-20-ns mw5 center bg-white br3 pa2 pa3-ns mv3 ba b--black-10">
      <div class="tc">
        <img alt='QR code' src={url} class="h4 w4 dib ba b--black-05 pa2" title="QR code" />
        <h3 class=" pa0 f6 mb3">{`${firstname} ${lastname}`}</h3>
        <h6 class="pa0 ht0 f8 fw4 gray mt0">{qrcode}</h6>
      </div>
    </article>
     )
 }
 
 export default Card;

/* class Card extends React.Component {
  state = {
    qrcode: null
  }
  componentDidMount() {
    const { qrcode } = this.props.match.params

    fetch(`https://api.twitter.com/user/${handle}`)
      .then((user) => {
        this.setState(() => ({ user }))
      })
  }
  render() {
    ...
  }
} */