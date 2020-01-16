import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';
import walkShape from '../../helpers/propz/walkShape';

class WalkForm extends React.Component {
  static propTypes = {
    walkToEdit: walkShape.walkShape,
    addWalk: PropTypes.func,
    editMode: PropTypes.bool,
    updateWalkInfo: PropTypes.func,
  }

  state = {
    walkDog: '',
    walkEmployee: '',
    walkDate: '',
  }

  componentDidMount() {
    const { walkToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({ walkDog: walkToEdit.dogId, walkEmployee: walkToEdit.employeeId, walkDate: walkToEdit.date });
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.walkToEdit.id !== this.props.walkToEdit.id) && this.props.editMode) {
      this.setState({ walkDog: this.props.walkToEdit.dogId, walkEmployee: this.props.walkToEdit.employeeId, walkDate: this.props.walkToEdit.date });
    }
  }

  saveWalkEvent = (e) => {
    const { addWalk } = this.props;
    e.preventDefault();
    const newWalk = {
      dogId: this.state.walkDog,
      employeeId: this.state.walkEmployee,
      date: this.state.walkDate,
      uid: authData.getUid(),
    };
    addWalk(newWalk);
    this.setState({ walkDog: '', walkEmployee: '', walkDate: '' });
  }

  updateWalkEvent = (e) => {
    e.preventDefault();
    const { updateWalkInfo, walkToEdit } = this.props;
    const updatedWalk = {
      dogId: this.state.walkDog,
      employeeId: this.state.walkEmployee,
      date: this.state.walkDate,
      uid: authData.getUid(),
    };
    updateWalkInfo(walkToEdit.id, updatedWalk);
    this.setState({ walkDog: '', walkEmployee: '', walkDate: '' });
  }

  dogChange = (e) => {
    e.preventDefault();
    this.setState({ walkDog: e.target.value });
  }

  employeeChange = (e) => {
    e.preventDefault();
    this.setState({ walkEmployee: e.target.value });
  }

  dateChange = (e) => {
    e.preventDefault();
    this.setState({ walkDate: e.target.value });
  }

  render() {
    const { dogs, employees, editMode } = this.props;
    const printDogNames = dogs.map((dog) => <option key={dog.id} value={dog.id}>{dog.name}</option>);
    const printEmployeeNames = employees.map((employee) => <option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>);
    return (
<form className='col-6 offset-3 PinForm'>
  <div className="form-group">
    <label htmlFor="walk-dog">Dog's Name:</label>
    <select
      className="form-control"
      id="walk-name"
      value={this.state.walkDog}
      onChange={this.dogChange}>
        {printDogNames}
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="walk-employee">Employee Name:</label>
    <select
      className="form-control"
      id="walk-employee"
      value={this.state.walkEmployee}
      onChange={this.employeeChange}>
        {printEmployeeNames}
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="example-date-input">Walk Date:</label>
    <input
      type="date"
      className="form-control"
      id="example-date-input"
      value={this.state.walkDate}
      onChange={this.dateChange}
    />
  </div>
  {
  (editMode) ? (<button className="btn btn-warning" onClick={this.updateWalkEvent}>UPDATE WALK</button>)
    : (<button className="btn btn-secondary" onClick={this.saveWalkEvent}>SAVE WALK</button>)
  }
    </form>
    );
  }
}

export default WalkForm;
