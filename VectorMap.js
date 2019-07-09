import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import generateData from '../Tables/generateData';

const data = generateData(1000);

class VectorMap extends Component {

  state = {
    data: generateData(500, false)
  };

  removeItem = itemId => {
    this.setState({
      data: data.filter(item => item.id !== itemId)
    });
  }

  render() {
    const { data } = this.state;
    const options = {
      sizePerPage: 20,
      prePage: 'Previous',
      nextPage: 'Next',
      firstPage: 'First',
      lastPage: 'Last',
      hideSizePerPage: true,
    };

    const { edit } = {

    }


    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4>Drug Table</h4>
              </div>
              <div className="content">
                <BootstrapTable
                  data={data}
                  bordered={false}
                  striped
                  pagination={true}
                  options={options}
               >
                  <TableHeaderColumn
                    dataField='id'
                    isKey
                    width="50px"
                    dataSort>
                    ID
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='name'
                    width="15%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='country'
                    width="15%"
                    dataSort>
                    Usage
                  </TableHeaderColumn>
                  <TableHeaderColumn
                  dataField='options'
                  width="15%"
                  >
                  Options
                  
              </TableHeaderColumn>
                  <TableHeaderColumn width="20%"></TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
  
}


<script>
    baseURL = "http://localhost:3000"


function loadStudents() {
       $('#list').html('')
       fetch(baseURL + '/students', {
           headers: {
               'Authorization': 'Basic aGVucnk6MTIzNA=='
           }
       })
           .then((res) => res.json())
           .then((json) => {
               console.log(json)
               for (let i = 0; i < json.length; i++) {
                   var str = `<li>${json[i].name}
                       | <a onclick='doDelete(${json[i].id})'>Delete</a>
                       | <a onclick="doEdit(${json[i].id}, '${json[i].name}')">Edit</a>
                       </li>`
                   $('#list').append(str)
               }
           })
   }


loadStudents();


    function doSave() {

var id = $('#id').val()
if (id > 0) { //update

    var obj = { 'id': id, 'name': $('#name').val() }
    fetch(baseURL + '/students', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'put',
        body: JSON.stringify(obj)
    })
        .then(() => loadStudents())
}
else { //add new
    var obj = { 'name': $('#name').val() }
    fetch(baseURL + '/students', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'put',
        body: JSON.stringify(obj)
    })
        .then(() => loadStudents())
}


}



    function doDelete(id) {

if (confirm('Do you want to delete?')) {
    fetch(baseURL + '/students/' + id, {
        method: 'delete'
    })
        .then(() => loadStudents())
}
}

function doEdit(id, name) {
$('#id').val(id)
$('#name').val(name)
}





</script>

export default VectorMap;