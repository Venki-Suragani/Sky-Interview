import React ,{Component} from 'react';
import ItemCreator from '../components/ItemCreator';
import ItemsList from '../components/ItemsList';


class Items extends Component {


  render() {
    return ( 
      <div className="page-content">
        
       
          <br/>
          <div className="row">
            <div className="col-md-12">
              <ItemCreator />
            </div>            
          </div>
          <div className="row">
          <div className="col-md-12">
              <ItemsList        
                />
            </div>
            </div>
    </div>
      );
    }  
  }
  export default Items;

  




