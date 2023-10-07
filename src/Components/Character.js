import './Character.css'

function Character() {
    return (
      <div>
        <div className="characters">
            <div className="card">
                <img className="image" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="character-image" />
                <div className="details">
                    <h2>Abadango Cluster Princess</h2>
                    <div className="status">
                        <span></span>
                        <p>Dead- Human</p>
                    </div>
                    <div className="location">
                        <p>Last known location:</p>
                        <span>Earth (Replacement Dimension)</span>
                    </div>
                    <div className="first-seen">
                        <p>First seen:</p>
                        <span>Ricky protion #1</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default Character;
  