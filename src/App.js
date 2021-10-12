import "./styles.css";
import { useState } from "react";

export default function App() {
  let horror = [
    {
      name: "Annabelle",
      rating: "5.4/10",
      about: "Annabelle is a 2014 American supernatural horror film directed by John R. Leonetti, written by Gary Dauberman and produced by Peter Safran and James Wan. It is a prequel to 2013's The Conjuring and the second installment in the Conjuring Universe franchise. The film was inspired by a story of a doll named Annabelle told by Ed and Lorraine Warren."
    },
    {
      name: "The Conjuring",
      rating: "7.5/10",
      about:"The Conjuring is a 2013 American supernatural horror film directed by James Wan and written by Chad Hayes and Carey W. Hayes. It is the inaugural film in the Conjuring Universe franchise.[4] Patrick Wilson and Vera Farmiga star as Ed and Lorraine Warren, paranormal investigators and authors associated with prominent cases of haunting."
    },
    {
      name: "The Nun",
      rating: "5.3/10",
      about:"The Nun (2018 film) From Wikipedia, the free encyclopedia The Nun is a 2018 American gothic supernatural horror film directed by Corin Hardy and written by Gary Dauberman, from a story by Dauberman and James Wan. It is a spin-off / prequel of 2016's The Conjuring 2 and the fifth installment in the Conjuring Universe franchise."
    }
  ];
  let animated = [
    {
      name: "Ice Age",
      rating: "7.5/10",
      about:"Ice Age is a 2002 American computer-animated comedy film directed by Chris Wedge and co-directed by Carlos Saldanha from a story by Michael J. Wilson. Produced by Blue Sky Studios as its first feature film, it was released by 20th Century Fox on March 15, 2002"
    },
    {
      name: "Madagascar",
      rating: "6.9/10",
      about:"Madagascar is a 2005 American computer-animated comedy film produced by DreamWorks Animation and distributed by DreamWorks Pictures. It was directed by Eric Darnell and Tom McGrath (in McGrath's feature directorial debut) and written by Mark Burton, Billy Frolick, Darnell, and McGrath."
    },
    {
      name: "Rio",
      rating: "6.9/10",
      about:"Rio is a 2011 American 3D computer-animated musical adventure comedy film produced by Blue Sky Studios and directed by Carlos Saldanha. The title refers to the Brazilian city of Rio de Janeiro, where the film is set."
    }
  ];
  let action = [
    {
      name: "Extraction",
      rating: "6.7/10",
      about:"Extraction: Directed by Sam Hargrave. With Chris Hemsworth, Bryon Lerum, Ryder Lerum, Rudhraksh Jaiswal. Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord."
    },
    {
      name: "Bad Boys",
      rating: "6.9/10",
      about:"Bad Boys is a 1995 American buddy cop action comedy film directed by Michael Bay, in his feature directorial debut, produced by Don Simpson and Jerry Bruckheimer and starring Martin Lawrence and Will Smith as two Miami narcotics detectives, Marcus Burnett and Mike Lowrey."
    },
    {
      name: "John Wick",
      rating: "7.4/10",
      about:"The story focuses on John Wick (Reeves), searching for the men who broke into his home, stole his vintage car and killed his puppy, which were a last gift to him from his recently deceased wife (Moynahan)."
    }
  ];

  let funny = [
    {
      name: "Johnny English",
      rating: "6.2/10",
      about:"Johnny English is a series of spy - action comedy films parodying the James Bond secret agent genre. It features Rowan Atkinson as the title character, based on the screenplay written by Neal Purvis, Robert Wade and William Davies."
    },
    {
      name: "American Pie",
      rating: "7/10",
      about:"In the American Pie (1999), Jim Levenstein and his friends Kevin Myers, Paul Finch, and Chris Ostreicher attempt to lose their virginity before their high school graduation."
    },
    {
      name: "The Hangover",
      rating: "7.7/10",
      about:"The Hangover is a trilogy of American comedy films created by Jon Lucas and Scott Moore, and directed by Todd Phillips. All three films follow the misadventures of a quartet of friends who go on their road trip to attend a bachelor party."
    }
  ];

  let [output, showOutput] = useState(funny);

  return (
    <div className="App">
      <h1 className="h1">Movie's Suggestion</h1>
      <button
        onClick={() => {
          showOutput(horror);
        }}
        className="button"
      >
        HORROR
      </button>
      <button
        onClick={() => {
          showOutput(animated);
        }}
        className="button"
      >
        ANIMATED
      </button>
      <button
        onClick={() => {
          showOutput(funny);
        }}
        className="button"
      >
        FUNNY
      </button>

      <button
        onClick={() => {
          showOutput(action);
        }}
        className="button"
      >
        ACTION
      </button>
      {output.map((movie) => {
        return (
          <ul className="ul">
            <li className="list">{`Name : ${movie.name}`}</li>
            <li className="list">{`Rating : ${movie.rating}`}</li>
            <li className="list">{`About : ${movie.about}`}</li>
          </ul>
        );
      })}
    </div>
  );
}
