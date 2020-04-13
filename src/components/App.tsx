import React from 'react'

function sleep1000(s: string) {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('hello ' + s)
    }, 1000)
  })
}

async function q() {
  const response = await sleep1000('q')
  console.log(response)
  const r2 = await sleep1000(response)
  console.log(r2)
}

export const App: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of information. I am
                convenient because I require little markup to use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
              <button onClick={() => q()}>Async test</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
