import { ProgressComponent } from './components/progress'

export const MenuView = () => {
  return (
    <div>
        <div className="flex-items">
            <div className="button-difficult">
                <button className="button primary-button">Facil</button>    
                <button className="button primary-button">Normal</button>    
                <button className="button primary-button">Dificil</button>    
            </div>
            <div>
                <h1 className='title'>DevHangman</h1>
                <ProgressComponent />
            </div>
        </div>
        
    </div>
  )
}
