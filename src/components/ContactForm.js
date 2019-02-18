import React from 'react';



const ContactForm = () => (

<form className="pa4 black-80 ph3">
        <article className="pa4 black-80 pv2 mb2">
    <fieldset id="access-clock" className="ba b--transparent ph0 mh0 center">
        <legend className="ph0 mh0 fw6 clip">Contact Us</legend>
                

    <div className="measure">
        <label HTMLfor="name" className="f6 b db mb2">Name <span className="normal black-60">(required)</span></label>
        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            <small id="name-desc" className="f6 black-60 db mb2"></small>
    </div>
    <div className="measure">
        <label HTMLfor="name" className="f6 b db mb2">Email <span className="normal black-60">(required)</span></label>
        <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="email" />
        <small id="name-desc" className="f6 black-60 db mb2"></small>
    </div>
    <div>
        <label HTMLfor="comment" className="f6 b db mb2">Message <span className="normal black-60">(optional)</span></label>
        <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
        <small id="comment-desc" className="f6 black-60"></small>
    </div>
                
               
            </fieldset>
                </article>
    <div className="ph3">
        <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Send message</a>
    </div>
</form>

    )


export default ContactForm;