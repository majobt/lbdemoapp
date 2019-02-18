import React from "react";
import './status.css';

const ListItem = (
    {key,
            id,
            firstname,
            lastname,
            inout,
            note,        
            timestamp
        }) =>  {

    //const friendlytime =() => (new Intl.DateTimeFormat('en-UK', { hour: '2-digit', minute: '2-digit' }).format(timestamp));
    //function formatDate(string){
     //   var options = {  hour: '2-digit', minute: '2-digit'  };
       // return new Date(string).toLocaleDateString([], options);
    //}
             
        return (
            <article class="list mw8 pl0 mt0 measure center">
            <article className={`flex items-center lh-solid pa1 ph0-l bb b--black-10`} > 
                <div className={`w3 h3 w3-ns h3-ns br-100 white tc v-mid ${inout}`}> 
                        <div className="tc v-mid">{inout}</div>
                </div>
                <div className="pl3 flex-wrap tl">
                    <span className="ma1 f4 fw4 db dark-gray">
                        {`${firstname}  ${lastname}`}
                    </span>
                    <span className="ma1 f6 db gray"> 
                        Timestamp:  {new Date(timestamp).toLocaleTimeString('en-UK', {
                            hour: '2-digit',
                            minute: '2-digit', 
                            hour12: false 
                    })}
                    </span>
                    <span className=" ma1 f7 db gray">
                        {note}
                    </span>

                </div>

            </article>
            </article>
        );
    }



export default ListItem;
 