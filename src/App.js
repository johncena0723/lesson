import { Component } from "react";
import Table from './Table';
class App extends Component {
    render(){
        const characters=[{
            name: 'Mani',
            job: 'RmsMani',
        },
        {
            name: 'RmsMani',
        job: 'RmsManiCentral',
    },
    {
        name: 'SurendharMani',
    job: 'RmsManiPostOffice',
},
    ]
        return(
            <div className="container">
                <h1> Table</h1>
                <Table charactersData={characters}/>
            </div>
        )
    }
}
export default App;