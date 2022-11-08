
import './index.css';
import React from 'react';
import Heading from './Heading';
import Cgpa_Table from './Cgpa_Table';
import Result from './Result';
import Rule from './Rule';



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      courses: '',
      credits: [],
      grades: [],
      sgpa: 0,
      msg: 'Sgpa : '


    }
  }

  noOfCourses(e) {
    let value = Math.max(0, Math.min(10, Number(e)));
    // setValue(value);
    // console.log(value)
    let index = value
    if (value == 0)
      value = ''

    this.setState({
      sgpa : 0,
      courses: value,
      credits: Array(index).fill(0),
      grades: Array(index).fill(0),

    })



  }

  validate(v, i, type) {
    // console.log(v, i, type)
    let value = Math.max(0, Math.min(10, Number(v)));
    if (value == 0)
      value = ''
    if (type == 'cr') {
      this.state.credits[i] = value
    }
    else {
      this.state.grades[i] = value
    }

    this.setState({

      credits: this.state.credits,
      grades: this.state.grades,

    })


    this.calculate_sgpa()

  }


  calculate_sgpa() {
    let result = 0, sumOfCredits = 0

    for (let i = 0; i < this.state.courses; i++) {
      sumOfCredits += this.state.credits[i]
      result += this.state.credits[i] * this.state.grades[i]
    }

    result = result / sumOfCredits
    console.log(result.toFixed(2))
    this.setState({
      sgpa : result.toFixed(2)
    })
  }

  render() {


    return (
      <>
        <div className='bg-slate-300 h-full'>
          <div>

            <Heading onChange={(e) => this.noOfCourses(e)} value={this.state.courses} />
          </div>

          <div>
            <Cgpa_Table rows={this.state.courses} onChange={(v, i, type) => this.validate(v, i, type)} credits={this.state.credits} grades={this.state.grades} />
          </div>
          <div className='pb-10 shadow-lg'>
            <Result msg={this.state.msg} value={this.state.sgpa} />
          </div>
          <div className='pb-10'>
            <Rule />
          </div>

        </div>

      </>
    );
  }
}

export default App;
