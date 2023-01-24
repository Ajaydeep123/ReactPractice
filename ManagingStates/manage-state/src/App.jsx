import { useState } from 'react'
import './App.css'


// But now let’s say you want to change it so that only one panel is expanded at any given time. With that design, expanding the second panel should collapse the first one. 

/* To coordinate these two panels, you need to “lift their state up” to a parent component in three steps:

1.Remove state from the child components.
2.Pass hardcoded data from the common parent.
3.Add state to the common parent and pass it down together with the event handlers. */


function App() {
  const [activeIndex, setActiveIndex] = useState(0); //0-> first panel open, 1-> second panel open

  return (
    <>
      <h2>Almaty, Kazakhstan, Bur </h2>
      <Panel 
      title="About"
      isActive={activeIndex === 0}
      onShow={()=> setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology"
       isActive={activeIndex === 1}
       onShow={()=> setActiveIndex(1)}

      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>

      <Panel 
      title="Food"
      isActive={activeIndex === 2}
      onShow={()=> setActiveIndex(2)}
      >
        Camel meat based diet is prevalent.
      </Panel>
    </>
  );
}


export function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

export default App
