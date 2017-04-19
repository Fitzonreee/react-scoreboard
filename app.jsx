function Application(props) {
  return (

    <div className="scoreboard">

      <div className="header">
        <h1>{props.title}</h1>
      </div>

      <div className="players">
        <div className="player">
          <div className="player-name">
            Kevin Fitzhenry
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score">101</div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>

    </div> // /scoreboard

  );
}

Application.propTypes = {
  title: React.PropTypes.string,
}

Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application/>, document.getElementById('container'));
